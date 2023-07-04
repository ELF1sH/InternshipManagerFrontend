import { action, makeObservable, observable } from 'mobx';

import { EntityDrawerStudentViewModel } from 'components/ui/organisms/entityDrawer/entities/student/EntityDrawerStudentViewModel';
import { EntityDrawerType } from 'components/ui/organisms/entityDrawer/enums';

export class EntityDrawerViewModel {
  @observable public openedDrawers: EntityDrawerType[] = [];

  @observable public id: number | undefined;

  public constructor(
    private studentViewModel: EntityDrawerStudentViewModel,
  ) {
    makeObservable(this);
  }

  public isOpened = (type: EntityDrawerType) => this.openedDrawers.includes(type);

  public getDrawerViewModel = (type: EntityDrawerType) => {
    switch (type) {
      case EntityDrawerType.STUDENT:
        return this.studentViewModel;
      default:
        throw new Error('Unknown drawer');
    }
  };

  @action public open = (type: EntityDrawerType, id: number) => {
    if (this.openedDrawers.includes(type)) throw new Error('Drawer is already opened');

    this.openedDrawers = [
      ...this.openedDrawers,
      type,
    ];

    this.id = id;

    (async () => {
      await this.getDrawerViewModel(type).fetch(+id);
    })();
  };

  @action public close = (type: EntityDrawerType) => {
    this.openedDrawers = this.openedDrawers.filter((drawer) => drawer !== type);
  };
}
