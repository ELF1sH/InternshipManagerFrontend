import React, { useState } from 'react';
import {
  Form, Input, Empty, InputNumber,
} from 'antd';
import { CheckCircleOutlined } from '@ant-design/icons';

import Space from 'components/ui/atoms/space/Space';
import Text from 'components/ui/atoms/text/Text';
import Button from 'components/ui/atoms/button/Button';
import Company from 'components/ui/molecules/company/Company';
import { CompanyWithVacancies } from 'components/ui/organisms/vacanciesList/VacanciesList';
import { VacancyWrapper, StackWrapper } from 'components/ui/molecules/vacancy/styled';
import { IconButton } from 'components/ui/atoms/iconButton/IconButton';

export const NewInternshipModal = (
  {
    filtredCompanies,
    setCompanySearchString,
    setVacancySearchString,
    patchinternshipByVacancy,
    setIsModalOpenCreate,
    setIsModalOpen,
  }:
     {
      filtredCompanies: CompanyWithVacancies[],
      setCompanySearchString: (val: string) => void,
      setVacancySearchString: (val: string) => void,
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

      <Form layout="vertical" style={{ width: '100%' }}>
        <Space gap={20}>
          <Form.Item name="company" label="Компания" style={{ width: '100%' }}>
            <Input onChange={(e) => {
              setCompanySearchString(e.currentTarget.value);
            }}
            />
          </Form.Item>
          <Form.Item name="vacancy" label="Вакансия" style={{ width: '100%' }}>
            <Input onChange={(e) => {
              setVacancySearchString(e.currentTarget.value);
            }}
            />
          </Form.Item>
        </Space>
      </Form>

      {filtredCompanies.length <= 0

        ? <Empty />

        : filtredCompanies.map(({
          id, name, minQuantity, maxQuantity, vacancies,
        }) => (
          <Space direction="vertical" key={id} gap={10}>
            <Company
              name={name}
              minQuantity={minQuantity}
              maxQuantity={maxQuantity}
            />
            <Space paddingLeft={40} direction="vertical">
              {
                  vacancies.map(({ name, vacancies }, idx) => (
                    <Space direction="vertical" gap={1} key={idx}>
                      <VacancyWrapper paddingLeft={30} direction="vertical">
                        <Text>
                          Вакансия:
                          &nbsp;
                          <Text $primary strong>{name}</Text>
                        </Text>
                      </VacancyWrapper>

                      <Space direction="vertical" paddingLeft={30}>
                        {
            vacancies.map(({
              techStack, minimumQuantity, maximumQuantity, id,
            }, idx) => (
              <StackWrapper key={idx} paddingLeft={25}>
                <Space direction="vertical">
                  <Text>
                    Стэк технологий:
                    &nbsp;
                    <Text strong>{techStack}</Text>
                  </Text>
                  <Text>
                    Количество вакантных мест:
                    &nbsp;
                    <Text strong>{`${minimumQuantity}-${maximumQuantity}`}</Text>
                  </Text>
                </Space>

                <Space justifyContent="end" alignItems="center" style={{ width: 'fit-content' }}>
                  <IconButton
                    icon={<CheckCircleOutlined style={{ color: selectedVacancy === id ? 'green' : '' }} />}
                    onClick={() => {
                      setSelecetedVacancy(id);
                    }}
                  />

                </Space>

              </StackWrapper>
            ))
          }

                      </Space>
                    </Space>
                  ))
                }

            </Space>
          </Space>
        ))}

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
