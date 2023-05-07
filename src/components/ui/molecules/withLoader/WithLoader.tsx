import React from 'react';

import Spinner from 'components/ui/atoms/spinner/Spinner';

interface ComponentWithLoaderProps {
  isLoading: boolean;
  isFailed?: boolean;
}

const WithLoader = <T, >(Component: React.FC<any>, isLoaderCentered: boolean = false) => {
  const ComponentWithLoader: React.FC<ComponentWithLoaderProps & T> = ({
    isLoading,
    isFailed = false,
    ...props
  }) => (isLoading
    ? <Spinner isCentered={isLoaderCentered} />
    : isFailed
      ? <h1>FAILED</h1>
      : <Component {...props} />);

  return ComponentWithLoader;
};

export default WithLoader;
