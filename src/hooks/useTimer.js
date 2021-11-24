/* eslint-disable react-hooks/exhaustive-deps */
import {createRef, useEffect, useState} from 'react';

const useTimer = (timeInSeconds = 3600, trigger = false, val = 1) => {
  const ref = createRef(null);
  const [now, setNow] = useState(timeInSeconds);

  useEffect(() => {
    if (trigger) {
      ref.current = setInterval(() => setNow(timeInSeconds + val), 1000);
    }
    return () => ref.current && clearInterval(ref.current);
  }, [trigger, timeInSeconds]);

  return now;
};

export default useTimer;
