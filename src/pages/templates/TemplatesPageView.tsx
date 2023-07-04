import React from 'react';
import { observer } from 'mobx-react-lite';

import DiaryTemplate from 'components/ui/molecules/diaryTemplate/DiaryTemplate';
import Space from 'components/ui/atoms/space/Space';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';
import Button from 'components/ui/atoms/button/Button';
import PlusIcon from 'components/ui/atoms/icons/PlusIcon';

import { useTemplatesPageViewModel } from 'pages/templates/viewModel/context';
import { useCreateTemplateModal } from 'pages/templates/modals/createTemplate';

const TemplatesPageView: React.FC = () => {
  const { postTemplate, templates } = useTemplatesPageViewModel();

  const { openCreateTemplateModal } = useCreateTemplateModal(postTemplate);

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
        {
          templates.map((template) => (
            <DiaryTemplate template={template} key={template.id} />
          ))
        }
      </Space>
    </>
  );
};

export default observer(TemplatesPageView);
