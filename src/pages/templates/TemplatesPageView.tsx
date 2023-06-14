import React from 'react';

import Space from 'components/ui/atoms/space/Space';
import ReportTemplate from 'components/ui/molecules/reportTemplate/ReportTemplate';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import Button from 'components/ui/atoms/button/Button';
import PlusIcon from 'components/ui/atoms/icons/PlusIcon';
import { useModalViewModel } from 'components/ui/organisms/modal/context/ModalProvider';

import { TemplateForm } from 'pages/templates/components/TemplateForm';

const TemplatesPageView: React.FC = () => {
  const { openModal } = useModalViewModel();
  return (
    <>
      <PageHeader header="Шаблоны дневника практики">
        <Button
          type="text"
          icon={<PlusIcon size={24} />}
          onClick={() => {
            openModal({
              formTitle: 'Создание шаблона',
              content: <TemplateForm />,
            });
          }}
        >
          Создать шаблон

        </Button>
      </PageHeader>
      <Space $wrap gap={20}>
        <ReportTemplate
          title="Дневник практики 1"
          description="Тут идет описание дневника практики номер 1"
          clickEditHandler={(template) => openModal({
            formTitle: 'Редактирование шаблона',
            content: <TemplateForm defaultValues={template} />,
          })}
        />
        <ReportTemplate
          title="Дневник практики 1"
          description="Тут идет описание дневника практики номер 1"
          clickEditHandler={(template) => openModal({
            formTitle: 'Редактирование шаблона',
            content: <TemplateForm defaultValues={template} />,
          })}
        />
        <ReportTemplate
          title="Дневник практики 1"
          description="Тут идет описание дневника практики номер 1"
          clickEditHandler={(template) => openModal({
            formTitle: 'Редактирование шаблона',
            content: <TemplateForm defaultValues={template} />,
          })}
        />
        <ReportTemplate
          title="Дневник практики 1"
          description="Тут идет описание дневника практики номер 1"
          clickEditHandler={(template) => openModal({
            formTitle: 'Редактирование шаблона',
            content: <TemplateForm defaultValues={template} />,
          })}
        />
      </Space>
    </>
  );
};

export default TemplatesPageView;
