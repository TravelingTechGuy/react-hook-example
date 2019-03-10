import {useState, useEffect} from 'react';

export default ({locale = 'en-US'}) => {
  const getTime = () => (new Date()).toLocaleTimeString(locale);
  const [time, setTime] = useState(getTime());
  let interval;

  useEffect(() => {
    interval = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(interval);
  })

  return time;
}