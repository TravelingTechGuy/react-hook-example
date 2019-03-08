import React, {useState, useEffect} from 'react';

export default (props = {locale: 'en-US'}) => {
  const getTime = () => (new Date()).toLocaleTimeString(props.locale);
  const [time, setTime] = useState(getTime());
  let interval;

  useEffect(() => {
    interval = setInterval(() => setTime(getTime()), 1000);
    return () => clearInterval(interval);
  })

  return time;
}