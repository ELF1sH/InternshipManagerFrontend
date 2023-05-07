import styled from 'styled-components';
import Title from 'antd/es/typography/Title';

export const PageHeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-grow: 1;
`;

export const TitleStyled = styled(Title)`
  && {
    margin: 0 !important;
    flex-grow: 1;
  }
`;

export const PrefixTitle = styled(Title)`
  && {
    margin: 0;
    white-space: nowrap;
  }
`;

export const RightSideWrapper = styled.div`
  display: flex;
  gap: 5px;
`;
