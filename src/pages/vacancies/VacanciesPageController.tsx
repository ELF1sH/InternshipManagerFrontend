import React from 'react';
import { observer } from 'mobx-react-lite';

import WithLoader from 'components/ui/molecules/withLoader/WithLoader';

import VacanciesPageView from 'pages/vacancies/VacanciesPageView';

const ClassesGridViewWithLoader = WithLoader(VacanciesPageView, true);

const VacanciesPageController: React.FC = () => (
  <ClassesGridViewWithLoader
    isLoading={false}
  />
);

export default observer(VacanciesPageController);
