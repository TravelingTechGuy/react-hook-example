import React, {useState} from 'react';
import Locale from './Locale'
import Time from './Time';
import Editable from './Editable';

export default () => {
  const defaultLocale = 'en-US';
  let [locale, setLocale] = useState(defaultLocale);
  return (
    <div>
      <Locale defaultLocale={defaultLocale} onChange={setLocale} />
      &nbsp;
      <Time locale={locale}/>
      <br />
      <Editable label="Edit content:" initialValue="Hello" onValueChanged={console.log}/>
    </div>
  );
}