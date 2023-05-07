import React from 'react';

import {
  PageHeaderWrapper, PrefixTitle, RightSideWrapper, TitleStyled, TitleWrapper,
} from 'components/ui/molecules/pageHeader/styled';
import Button from 'components/ui/atoms/button/Button';
import SaveIcon from 'components/ui/atoms/icons/SaveIcon';
import Scale from 'components/animations/scale/Scale';

interface PageHeaderProps {
  header: string;
  prefixText?: string;
  titleEditable?: boolean;
  editable?: boolean;
  wasEdited?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  onChangeTitle?: (title: string) => void;
  onSaveChanges?: Function;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  header,
  prefixText,
  titleEditable = false,
  editable = false,
  wasEdited = false,
  isLoading,
  children,
  onChangeTitle,
  onSaveChanges,
}) => (
  <PageHeaderWrapper>
    <TitleWrapper>
      {
        prefixText && (
        <PrefixTitle>
          {`${prefixText}:`}
&nbsp;
        </PrefixTitle>
        )
      }
      <TitleStyled
        editable={titleEditable && {
          triggerType: ['text', 'icon'],
          onChange: onChangeTitle,
        }}
      >
        {header}
      </TitleStyled>
    </TitleWrapper>

    <RightSideWrapper>
      <Scale isVisible={editable && wasEdited}>
        <Button
          type="primary"
          icon={<SaveIcon />}
          onClick={() => onSaveChanges?.()}
          loading={isLoading}
        >
          Save changes
        </Button>
        {/* <Button type="text" icon={<UndoIcon size={24} color={token.colorPrimary} />} /> */}
      </Scale>
      {children}
    </RightSideWrapper>
  </PageHeaderWrapper>
);

export default PageHeader;
