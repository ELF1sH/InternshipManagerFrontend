import React, { useState } from 'react';
import { Empty, InputNumber } from 'antd';

import Space from 'components/ui/atoms/space/Space';
import Text from 'components/ui/atoms/text/Text';
import Button from 'components/ui/atoms/button/Button';
import { CompanyWithVacancies } from 'components/ui/organisms/vacanciesList/VacanciesList';

import { FiltredCompaniesList } from 'pages/profile/modals/NewInternshipModal/components/FiltredCompaniesList';
import { FilterForm } from 'pages/profile/modals/NewInternshipModal/components/FilterForm';

export const NewInternshipModal = (
  {
    filtredCompanies,
    patchinternshipByVacancy,
    setIsModalOpenCreate,
    setIsModalOpen,
  }:
     {
      filtredCompanies: CompanyWithVacancies[],
      patchinternshipByVacancy: ({ vacancyId, semester }: {
        vacancyId: number;
        semester: number;
    }) => Promise<void>
    setIsModalOpenCreate:(val: boolean) => void,
    setIsModalOpen:(val: boolean) => void
  },
) => {
  const [selectedVacancy, setSelecetedVacancy] = useState<number>();
  const [semester, setSelecetedSemester] = useState<number | null>();

  return (
    <Space direction="vertical" alignItems="center" gap={32}>
      <FilterForm />
      {filtredCompanies.length <= 0

        ? <Empty />

        : (
          <FiltredCompaniesList
            filtredCompanies={filtredCompanies}
            selectedVacancy={selectedVacancy}
            setSelecetedVacancy={setSelecetedVacancy}
          />
        )}

      <Button type="primary" onClick={() => setIsModalOpenCreate(true)}>Моей стажировки нет в этом списке</Button>

      <Space direction="vertical" gap={16}>
        <Text>Укажите номер семестра</Text>
        <InputNumber
          placeholder="Номер семестра"
          min={1}
          max={8}
          onChange={(val) => {
            setSelecetedSemester(val);
          }}
        />
      </Space>

      <Space justifyContent="end">
        <Button
          type="primary"
          disabled={!selectedVacancy || !semester}
          onClick={() => {
            if (selectedVacancy && semester) {
              patchinternshipByVacancy({ vacancyId: selectedVacancy, semester }).then(() => {
                setIsModalOpen(false);
              });
            }
          }}
        >
          Ок

        </Button>
      </Space>

    </Space>
  );
};
