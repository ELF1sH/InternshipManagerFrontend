import { EntityDrawerType } from 'components/ui/organisms/entityDrawer/enums';
import { useEntityDrawerViewModel } from 'components/ui/organisms/entityDrawer/viewModel/context';

export const useStudentEntityDrawer = () => {
  const { open } = useEntityDrawerViewModel();

  return { open: (id: number) => open(EntityDrawerType.STUDENT, id) };
};
