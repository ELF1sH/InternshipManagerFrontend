import { LinksBlockItem } from 'components/ui/molecules/linksBlock/types';

interface LinkItem {
  id: string;
  name: string;
}

export const parseToLinkBlockItems = <T extends LinkItem>(
  items: T[],
  classId: string,
  route: Function,
): LinksBlockItem[] => items.map((item) => ({
    text: item.name,
    to: route(classId, item.id),
    id: item.id,
  }));
