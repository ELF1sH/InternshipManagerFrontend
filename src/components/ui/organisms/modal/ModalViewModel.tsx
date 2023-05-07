import React from 'react';
import {
  action, computed, makeObservable, observable,
} from 'mobx';
import { StepProps } from 'antd';

interface IOpenModalProps {
  formTitle: string;
  steps: IModalStep[];
  cbOnComplete?: Function;
}

interface IModalStep {
  content: React.ReactNode;
  stepProps?: StepProps;
}

export class ModalViewModel {
  @observable public isOpened = false;

  @observable public formTitle = '';

  @observable public stepProps: StepProps[] = [];

  @observable public isNextBtnDisabled = false;

  @observable public isPreviousBtnDisabled = false;

  @observable public currentStep = 0;

  @observable public cbOnComplete: Function | undefined = undefined;

  @observable private _content: React.ReactNode[] = [];

  public constructor() {
    makeObservable(this);
  }

  @computed public get content() {
    return this._content[this.currentStep];
  }

  @computed public get isLastStep() {
    return this.currentStep === this._content.length - 1;
  }

  @computed public get isFirstStep() {
    return this.currentStep === 0;
  }

  @action public openModal = ({ steps, formTitle, cbOnComplete }: IOpenModalProps) => {
    this.isOpened = true;

    this._content = steps.map((step) => step.content);

    const isStepPropsSkipped = steps.some((step) => !step);

    if (isStepPropsSkipped) this.stepProps = [];
    else this.stepProps = steps.map((step) => step.stepProps!);

    this.formTitle = formTitle;
    this.cbOnComplete = cbOnComplete;
  };

  @action public closeModal = () => {
    this.isOpened = false;

    this.resetForm();
  };

  @action public switchToNextStep = () => {
    this.currentStep += 1;
  };

  @action public switchToPreviousStep = () => {
    this.currentStep -= 1;
  };

  @action toggleNextBtnDisabled = (value: boolean) => {
    this.isNextBtnDisabled = value;
  };

  @action togglePreviousBtnDisabled = (value: boolean) => {
    this.isPreviousBtnDisabled = value;
  };

  @action private resetForm = () => {
    this.currentStep = 0;
    this._content = [];
  };
}
