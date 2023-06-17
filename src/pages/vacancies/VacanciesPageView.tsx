import React from 'react';
import { Form, Input, Typography } from 'antd';

import Space from 'components/ui/atoms/space/Space';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import VacanciesList from 'components/ui/organisms/vacanciesList/VacanciesList';
import PlusIcon from 'components/ui/atoms/icons/PlusIcon';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';
import Button from 'components/ui/atoms/button/Button';

import { IVacancy } from 'domain/entities/vacancy';

import { UserRole } from 'modules/authority/enums/UserRole';

import { useVacanciesPageViewModel } from 'pages/vacancies/viewModel/context';
import FilterForm from 'pages/vacancies/components/filterForm/FilterForm';

import { userStore } from 'storesMobx/stores/UserStore';

const NewVacancyModal: React.FC<{addVacancy: (payload: any) => void}> = ({ addVacancy }) => {
  const addNewVacancy = (values: IVacancy) => {
    addVacancy(values);
  };

  return (

    <Form onFinish={addNewVacancy}>
      <Space gap={14} direction="vertical">
        <Form.Item name="name" style={{ marginTop: '16px' }}>
          <Input placeholder="Название вакансии" />
        </Form.Item>

        <Typography.Paragraph style={{ marginTop: '8px', marginBottom: '0' }}>
          Через запятую перечислите список основных технологий,
          знание которых требуется от студентов
        </Typography.Paragraph>
        <Form.Item name="techStack">
          <Input.TextArea placeholder="Стек технологий" />
        </Form.Item>
        <Typography.Paragraph style={{ marginTop: '8px', marginBottom: '0' }}>
          Укажите количество студентов, которое вы планируете набирать в этом году.
          Эти данные ни к чему не обязывают: они служат лишь примерной оценкой ситуации
          на “рынке труда” для студентов.
        </Typography.Paragraph>
        <Space direction="horizontal" justifyContent="space-between">
          <Form.Item name="minimumQuantity">
            <Input placeholder="Минимальное количество мест" />
          </Form.Item>
          <Form.Item name="maximumQuantity">
            <Input placeholder="Максимальное количество мест" />
          </Form.Item>
        </Space>

        <Form.Item>
          <Space justifyContent="center" paddingBottom={16}>
            <Button type="primary" htmlType="submit">
              Добавить
            </Button>
          </Space>

        </Form.Item>

      </Space>
    </Form>
  );
};
const VacanciesPageView: React.FC = () => {
  const { companiesWithVacancies } = useVacanciesPageViewModel();
  const { openModal } = useModalViewModel();

  const viewModel = useVacanciesPageViewModel();
  const currentRole = userStore.role;

  if (currentRole === UserRole.COMPANY) {
    return (
      <>
        <PageHeader header="Вакансии">

          <Button
            type="text"
            icon={<PlusIcon size={24} />}
            onClick={() => openModal({
              formTitle: 'Создание новой вакансии',
              content: <NewVacancyModal addVacancy={viewModel.addNewWacancy} />,
              footer: false,
            })}
          >
            Добавить

          </Button>

        </PageHeader>

        <Space direction="vertical" gap={20}>
          <FilterForm />

        </Space>
      </>
    );
  }
  if (currentRole === UserRole.UNIVERSITY_DEPARTMENT) {
    return (
      <>
        <PageHeader header="Компании и стажировки" />
        <Space direction="vertical" gap={20}>
          <FilterForm />
          <VacanciesList companiesWithVacancies={companiesWithVacancies} />
        </Space>
      </>
    );
  }

  return (
    <>
      <PageHeader header="Вакансии" />

      <Space direction="vertical" gap={20}>

        <FilterForm />
        <VacanciesList companiesWithVacancies={companiesWithVacancies} />

      </Space>
    </>
  );
};

export default VacanciesPageView;
