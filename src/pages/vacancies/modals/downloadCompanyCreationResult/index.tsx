import React from 'react';

import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';

import { ICreateCompanyResponse } from 'domain/repositories/api/interfaces/ICompanyRepository';

import DownloadCompanyCreationResultModal from 'pages/vacancies/modals/downloadCompanyCreationResult/content';

export const useDownloadCompanyCreationResult = () => {
  const { openModal } = useModalViewModel();

  const openDownloadCompanyCreationResult = (result: ICreateCompanyResponse[]) => {
    openModal({
      formTitle: 'Добавление компаний: выгрузка результатов',
      content: <DownloadCompanyCreationResultModal companiesResult={result} />,
      footer: false,
      width: '1200px',
    });
  };

  return { openDownloadCompanyCreationResult };
};
