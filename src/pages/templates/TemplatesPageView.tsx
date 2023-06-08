import React from 'react';

import Space from 'components/ui/atoms/space/Space';
import ReportTemplate from 'components/ui/molecules/reportTemplate/ReportTemplate';
import PageHeader from 'components/ui/molecules/pageHeader/PageHeader';

const TemplatesPageView: React.FC = () => (
  <>
    <PageHeader header="Шаблоны дневника практики" />
    <Space $wrap gap={20}>
      <ReportTemplate title="Дневник практики 1" description="Тут идет описание дневника практики номер 1" />
      <ReportTemplate title="Дневник практики 1" description="Тут идет описание дневника практики номер 1" />
      <ReportTemplate title="Дневник практики 1" description="Тут идет описание дневника практики номер 1" />
      <ReportTemplate title="Дневник практики 1" description="Тут идет описание дневника практики номер 1" />
    </Space>
  </>
);

export default TemplatesPageView;
