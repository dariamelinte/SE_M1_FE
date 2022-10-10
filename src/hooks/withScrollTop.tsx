import { useEffect } from 'react';

export const withScrollTop = (WrappedComponent: React.FC) => () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <WrappedComponent />;
};
