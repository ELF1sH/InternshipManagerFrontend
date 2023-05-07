import React from 'react';

import { Grid } from 'components/ui/layout/grid/styled';

interface GridLayoutProps {
  children?: React.ReactNode;
}

const Component: React.FC<GridLayoutProps> = ({
  children,
}) => (
  <Grid>
    {children}
  </Grid>
);

export default Component;
