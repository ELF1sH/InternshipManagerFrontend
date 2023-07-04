import React from 'react';

import { StackWrapper, VacancyWrapper } from 'components/ui/molecules/vacancy/styled';
import Space from 'components/ui/atoms/space/Space';
import Text from 'components/ui/atoms/text/Text';
import Actions from 'components/ui/molecules/vacancy/components/actions/Actions';

import { ISelection, SelectionStatus } from 'domain/entities/selection';
import { IPreferenceItem } from 'domain/entities/preferences';

import { useStore } from 'storesMobx/MobxStoreProvider';

export interface VacancyProps {
 name: string;
 stacks: Stack[];
 patchSelection?: (id: number, status: SelectionStatus) => Promise<void>
 postPreference?: (id: number) => Promise<void>
 addToSelections?: (payload: number) => Promise<void>
 showActions?: boolean
}

export interface Stack {
  id: number
  techStack: string;
  minimumQuantity: number;
  maximumQuantity: number;
  isSelected?: ISelection;
  isPreferenced?: IPreferenceItem;
}

const Vacancy: React.FC<VacancyProps> = ({
  name,
  stacks,
  patchSelection,
  postPreference,
  addToSelections,
  showActions = true,
}) => {
  const { role } = useStore().userStore;

  return (
    <Space direction="vertical" gap={1}>
      <VacancyWrapper paddingLeft={30} direction="vertical">
        <Text>
          Вакансия:
          &nbsp;
          <Text $primary strong>{name}</Text>
        </Text>
      </VacancyWrapper>

      <Space direction="vertical" paddingLeft={30}>
        {
          stacks.map(({
            techStack, minimumQuantity, maximumQuantity, isSelected, id, isPreferenced,
          }, idx) => (
            <StackWrapper key={idx} paddingLeft={25}>
              <Space direction="vertical">
                <Text>
                  Стэк технологий:
                  &nbsp;
                  <Text strong>{techStack}</Text>
                </Text>
                <Text>
                  Количество вакантных мест:
                  &nbsp;
                  <Text strong>{`${minimumQuantity}-${maximumQuantity}`}</Text>
                </Text>
              </Space>

              {
                showActions && (
                  <Actions
                    id={id}
                    isSelected={isSelected}
                    isPreferenced={isPreferenced}
                    patchSelection={patchSelection}
                    postPreference={postPreference}
                    addToSelections={addToSelections}
                  />
                )
              }
            </StackWrapper>
          ))
        }
      </Space>
    </Space>
  );
};

export default Vacancy;
