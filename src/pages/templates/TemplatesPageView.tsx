import React from 'react';

import Space from 'components/ui/atoms/space/Space';
import ReportTemplate from 'components/ui/molecules/reportTemplate/ReportTemplate';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import Button from 'components/ui/atoms/button/Button';
import PlusIcon from 'components/ui/atoms/icons/PlusIcon';

import { useCreateTemplateModal } from 'pages/templates/modals/createTemplate';

const TemplatesPageView: React.FC = () => {
  const { openCreateTemplateModal } = useCreateTemplateModal();

  return (
    <>
      <PageHeader header="Шаблоны дневника практики">
        <Button
          type="text"
          icon={<PlusIcon size={24} />}
          onClick={() => openCreateTemplateModal()}
        >
          Создать шаблон
        </Button>
      </PageHeader>

      <Space $wrap gap={20}>
        <ReportTemplate
          title="Дневник практики 1"
          description="Тут идет описание дневника практики номер 1"
          clickEditHandler={() => {}}
        />
        <ReportTemplate
          title="Дневник практики 1"
          description="Тут идет описание дневника практики номер 1"
          clickEditHandler={() => {}}
        />
        <ReportTemplate
          title="Дневник практики 1"
          description="Тут идет описание дневника практики номер 1"
          clickEditHandler={() => {}}
        />
        <ReportTemplate
          title="Дневник практики 1"
          description="Тут идет описание дневника практики номер 1"
          clickEditHandler={() => {}}
        />
      </Space>
    </>
  );
};

export default TemplatesPageView;
