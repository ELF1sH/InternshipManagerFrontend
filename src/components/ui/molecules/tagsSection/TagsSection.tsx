import React, { useState } from 'react';
import { Tag } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { useTheme } from 'styled-components';

import { TagsSectionWrapper } from 'components/ui/molecules/tagsSection/styled';
import Input from 'components/ui/atoms/input/Input';

interface TagsSectionProps {
  tags: string[];
  setTags: (tags: string[]) => void;
}

const TagsSection: React.FC<TagsSectionProps> = ({
  tags,
  setTags,
}) => {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const onDeleteTag = (deletedTag: string) => {
    const newTags = tags.filter((tag) => tag !== deletedTag);
    setTags(newTags);
  };

  const { colorPrimary } = useTheme();

  return (
    <TagsSectionWrapper>
      {
        tags.map((tag) => (
          <Tag key={tag} closable onClose={() => onDeleteTag(tag)}>{tag}</Tag>
        ))
      }
      {inputVisible ? (
        <Input
          style={{ width: '80px' }}
          type="text"
          size="small"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
          autoFocus
        />
      ) : (
        <Tag onClick={() => setInputVisible(true)} color={colorPrimary}>
          <PlusOutlined />
          {' '}
          New Tag
        </Tag>
      )}
    </TagsSectionWrapper>
  );
};

export default TagsSection;
