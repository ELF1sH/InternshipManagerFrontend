import { createContext, useContext } from 'react';

import { EntityDrawerViewModel } from 'components/ui/organisms/entityDrawer/viewModel';

export const EntityDrawerVmContext = createContext<EntityDrawerViewModel | undefined>(
  undefined,
);

export const useEntityDrawerViewModel = () => {
  const vm = useContext(EntityDrawerVmContext);

  if (!vm) throw new Error();

  return vm;
};
