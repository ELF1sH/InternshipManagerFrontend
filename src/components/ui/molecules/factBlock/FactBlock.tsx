import React from 'react';
import { theme } from 'antd';

import { FactBlockWrapper, FactsWrapper } from 'components/ui/molecules/factBlock/styled';
import FactIcon from 'components/ui/atoms/icons/FactIcon';

interface FactBlockProps {
  facts: string[];
}

const FactBlock: React.FC<FactBlockProps> = ({
  facts,
}) => {
  const { token } = theme.useToken();

  return (
    <FactBlockWrapper>
      <FactIcon color={token.colorPrimary} />
      <FactsWrapper>
        {
          facts.map((fact, idx) => (
            <p key={idx}>{fact}</p>
          ))
        }
      </FactsWrapper>
    </FactBlockWrapper>
  );
};

export default FactBlock;
