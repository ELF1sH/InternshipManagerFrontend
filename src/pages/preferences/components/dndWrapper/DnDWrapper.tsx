import React from 'react';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';
import { observer } from 'mobx-react-lite';

import StrictModeDroppable from 'components/ui/molecules/droppable/Droppable';

import Preference from 'pages/preferences/components/preference/Preference';
import { usePreferencesPageViewModel } from 'pages/preferences/viewModel/context';

import { useOnDragEnd } from 'utils/dnd/useOnDragEnd';

const DnDWrapper: React.FC = () => {
  const { preferencesList, setUpdatedPreferenceList } = usePreferencesPageViewModel();

  const { onDragEnd } = useOnDragEnd(preferencesList, setUpdatedPreferenceList);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <StrictModeDroppable droppableId="droppablePreferences">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {
              preferencesList.map((preference, index) => (
                <Draggable key={preference.id} draggableId={preference.id.toString()} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      style={provided.draggableProps.style}
                    >
                      <Preference
                        preference={preference}
                        draggableProps={provided.dragHandleProps}
                      />
                    </div>
                  )}
                </Draggable>
              ))
            }
            {provided.placeholder}
          </div>
        )}
      </StrictModeDroppable>
    </DragDropContext>
  );
};

export default observer(DnDWrapper);
