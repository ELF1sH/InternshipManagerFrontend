import React from 'react';
import {
  action, makeObservable, observable,
} from 'mobx';

interface IOpenModalProps {
  formTitle: string;
  content: React.ReactNode;
  cbOnComplete?: Function;
}

export class ModalViewModel {
  @observable public isOpened = false;

  @observable public formTitle = '';

  @observable public content: React.ReactNode = null;

  @observable private cbOnComplete: Function | undefined = undefined;

  public constructor() {
    makeObservable(this);
  }

  @action public openModal = ({ formTitle, content, cbOnComplete }: IOpenModalProps) => {
    this.isOpened = true;

    this.formTitle = formTitle;
    this.content = content;
    this.cbOnComplete = cbOnComplete;
  };

  @action public onOk = () => {
    this.cbOnComplete?.();

    this.closeModal();
  };

  @action public closeModal = () => {
    this.isOpened = false;
  };
}
