import React from 'react';
import { CheckCircleOutlined } from '@ant-design/icons';

import Space from 'components/ui/atoms/space/Space';
import Text from 'components/ui/atoms/text/Text';
import Company from 'components/ui/molecules/company/Company';
import { VacancyWrapper, StackWrapper } from 'components/ui/molecules/vacancy/styled';
import { IconButton } from 'components/ui/atoms/iconButton/IconButton';
import { CompanyWithVacancies } from 'components/ui/organisms/vacanciesList/VacanciesList';

interface FiltredCompaniesListProps {
    filtredCompanies: CompanyWithVacancies[],
    selectedVacancy?: number,
    setSelecetedVacancy: (val: number) => void
}
export const FiltredCompaniesList = (
  {
    filtredCompanies,
    selectedVacancy,
    setSelecetedVacancy,
  }: FiltredCompaniesListProps,
) => (
  <>
    {
            filtredCompanies.map(({
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
            ))
        }
  </>
);
