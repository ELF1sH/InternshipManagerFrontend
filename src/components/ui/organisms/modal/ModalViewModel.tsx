import React from 'react';
import {
  action, makeObservable, observable,
} from 'mobx';

interface IOpenModalProps {
  formTitle: string;
  content: React.ReactNode;
  cbOnComplete?: Function;
  style?: React.CSSProperties | undefined;
  footer?: boolean| undefined
}

export class ModalViewModel {
  @observable public isOpened = false;

  @observable public formTitle = '';

  @observable public content: React.ReactNode = null;

  @observable private cbOnComplete: Function | undefined = undefined;

  @observable public style: React.CSSProperties | undefined;

  @observable public footer: boolean | undefined;

  public constructor() {
    makeObservable(this);
  }

  @action public openModal = ({
    formTitle, content, cbOnComplete, style, footer,
  }: IOpenModalProps) => {
    this.isOpened = true;

    this.formTitle = formTitle;
    this.content = content;
    this.cbOnComplete = cbOnComplete;
    this.style = style;
    this.footer = footer;
  };

  @action public onOk = () => {
    this.cbOnComplete?.();

    this.closeModal();
  };

  @action public closeModal = () => {
    this.isOpened = false;
  };
}
