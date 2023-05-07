import { DropResult } from 'react-beautiful-dnd';

export interface UseOnDragEndResult {
  onDragEnd: (result: DropResult) => void;
}
