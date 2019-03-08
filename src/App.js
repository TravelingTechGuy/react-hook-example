import React, {useState} from 'react';
import Time from './Time';

export default () => {
  const defaultLocale = 'en-US';
  let [locale, setLocale] = useState(defaultLocale);
  return (
    <div>
      <select onChange={e => setLocale(e.target.value)} defaultValue={defaultLocale}>
        <option value='en-US'>en-US</option>
        <option value='en-GB'>en-GB</option>
        <option value='he-IL'>he-IL</option>
        <option value='ar-EG'>ar-EG</option>
      </select>&nbsp;
      <Time locale={locale}/>
    </div>
  );
}