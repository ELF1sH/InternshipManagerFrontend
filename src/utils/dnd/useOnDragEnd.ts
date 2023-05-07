import { DropResult } from 'react-beautiful-dnd';

import { reorderDndList } from 'utils/dnd/reorderDndList';
import { UseOnDragEndResult } from 'utils/dnd/types';

export const useOnDragEnd = <T>(
  data: T[],
  setUpdatedData: (data: T[]) => void,
): UseOnDragEndResult => {
  const onDragEnd = (result: DropResult) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const itemsReordered = reorderDndList<T>(
      data,
      result.source.index,
      result.destination.index,
    );

    setUpdatedData(itemsReordered);
  };

  return { onDragEnd };
};
