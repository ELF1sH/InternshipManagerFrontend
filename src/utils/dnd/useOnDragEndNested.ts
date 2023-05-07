import { DropResult } from 'react-beautiful-dnd';

import { reorderDndList } from 'utils/dnd/reorderDndList';
import { UseOnDragEndResult } from 'utils/dnd/types';

export const useOnDragEndNested = <T, SubItemT>(
  data: T[],
  subItemsKey: keyof T,
  idKey: keyof T,
  itemDroppableType: string,
  subItemDroppableType: string,
  setUpdatedData: (data: T[]) => void,
): UseOnDragEndResult => {
  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const sourceIndex = result.source.index;
    const destIndex = result.destination.index;

    if (result.type === itemDroppableType) {
      const reorderedItems = reorderDndList<T>(data, sourceIndex, destIndex);

      setUpdatedData(reorderedItems);

      return;
    }

    if (result.type === subItemDroppableType) {
      const sourceParentId = result.source.droppableId;
      const destParentId = result.destination.droppableId;

      const sourceSubItems = data
        .find((item) => item[idKey] === sourceParentId)?.[subItemsKey] as SubItemT[];

      const destSubItems = data
        .find((item) => item[idKey] === destParentId)?.[subItemsKey] as SubItemT[];

      if (!sourceSubItems || !destSubItems) return;

      let newItems = [...data];

      // case of moving sub item within one global item
      if (sourceParentId === destParentId) {
        const reorderedSubItems = reorderDndList<SubItemT>(
          sourceSubItems,
          sourceIndex,
          destIndex,
        );

        newItems = newItems.map((item) => {
          if (item[idKey] === sourceParentId) {
            return { ...item, [subItemsKey]: reorderedSubItems };
          }
          return item;
        });

        setUpdatedData(newItems);

        return;
      }

      // case of moving sub item across different global items
      const newSourceSubItems = [...sourceSubItems];
      const [draggedItem] = newSourceSubItems.splice(sourceIndex, 1);

      const newDestSubItems = [...destSubItems];
      newDestSubItems.splice(destIndex, 0, draggedItem);

      newItems = newItems.map((item) => {
        if (item[idKey] === sourceParentId) {
          return { ...item, [subItemsKey]: newSourceSubItems as T[keyof T] };
        }

        if (item[idKey] === destParentId) {
          return { ...item, [subItemsKey]: newDestSubItems as T[keyof T] };
        }

        return item;
      });

      setUpdatedData(newItems);
    }
  };

  return { onDragEnd };
};
