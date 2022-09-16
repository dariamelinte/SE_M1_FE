import { useEffect, useState } from 'react';

type Props = {
  children: JSX.Element;
  waitBeforeShow?: number;
};

function Delayed({ children, waitBeforeShow = 1000 }: Props) {
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShown(true);
    }, waitBeforeShow);
    return () => clearTimeout(timer);
  }, [waitBeforeShow]);

  return isShown ? children : null;
}

export default Delayed;
