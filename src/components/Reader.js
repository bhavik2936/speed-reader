import { useEffect } from 'react';

import { SPEED } from '../constants';
import { calculateInterval } from '../utils';

const Reader = ({ words, setWords }) => {
  // Calculate interval speed based on pre-defined WPM
  const timeInterval = calculateInterval(SPEED);

  useEffect(() => {
    const timer = setInterval(() => {
      setWords((prevWords) => {
        return prevWords?.slice(1, prevWords.length);
      });
    }, timeInterval);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <div>{words.at(0)}</div>;
};

export default Reader;
