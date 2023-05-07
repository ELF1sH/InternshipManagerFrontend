import React from 'react';
import { observer } from 'mobx-react-lite';

import WithLoader from 'components/ui/molecules/withLoader/WithLoader';

import VacanciesPageView, { ClassesGridViewProps } from 'pages/vacancies/VacanciesPageView';
import { VacanciesPageViewModel } from 'pages/vacancies/VacanciesPageViewModel';

const ClassesGridViewWithLoader = WithLoader<ClassesGridViewProps>(VacanciesPageView, true);

interface ClassesGridControllerProps {
  viewModel: VacanciesPageViewModel;
}

const VacanciesPageController: React.FC<ClassesGridControllerProps> = ({
  viewModel,
}) => (
  <ClassesGridViewWithLoader
    isLoading={false}
  />
);

export default observer(VacanciesPageController);
