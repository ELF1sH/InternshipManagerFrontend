import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { useTheme } from 'styled-components';

interface BooleanFlagProps {
  value: boolean;
  colorful?: boolean;
}

const BooleanFlag: React.FC<BooleanFlagProps> = ({
  value,
  colorful = false,
}) => {
  const { colorSuccess, colorError } = useTheme();

  const style: React.CSSProperties = {};

  if (colorful) {
    style.color = value ? colorSuccess : colorError;
  }

  return (
    value
      ? <CheckOutlined style={style} />
      : <CloseOutlined style={style} />
  );
};

export default BooleanFlag;
