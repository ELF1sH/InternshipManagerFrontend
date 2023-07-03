import React from 'react';

import redMadRobotLogo from 'assets/companyLogos/red_mad_robot.png';

import { CompanyWrapper } from 'components/ui/molecules/company/styled';
import Text from 'components/ui/atoms/text/Text';
import Space from 'components/ui/atoms/space/Space';

export interface CompanyProps {
  name: string;
  minQuantity?: number;
  maxQuantity?: number;
  companyRole?: string;
  beginningDate?: string;
  onClick?: void;
}

const Company: React.FC<CompanyProps> = ({
  name,
  maxQuantity,
  minQuantity,
  companyRole,
  beginningDate,
  onClick,
}) => (
  <CompanyWrapper justifyContent="space-between" alignItems="center">
    <Space direction="vertical">
      <Text $size="large">
        Компания:
        &nbsp;
        <Text strong $primary $size="large">{name}</Text>
      </Text>
      <Text>
        Количество вакантных мест:
        &nbsp;
        <Text strong>{`${minQuantity}-${maxQuantity}`}</Text>
      </Text>
      {
        companyRole && (
          <Text>
            Роль:
            &nbsp;
            <Text strong>{companyRole}</Text>
          </Text>
        )
      }
      {
        beginningDate && (
          <Text>
            Дата начала:
            &nbsp;
            <Text strong>{beginningDate}</Text>
          </Text>
        )
      }
    </Space>
    <img alt="company logo" src={redMadRobotLogo} height={50} />
  </CompanyWrapper>
);

export default Company;
