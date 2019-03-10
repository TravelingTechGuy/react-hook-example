import React, {useState} from 'react';
import Locale from './Locale';
import Time from './Time';
import Editable from './Editable';

export default () => {
  const defaultLocale = 'en-US';
  const [locale, setLocale] = useState(defaultLocale);
  const [value, setValue] = useState('');
  
  return (
    <div>
      <Time locale={locale}/>
      <br />
      <Locale defaultLocale={defaultLocale} onChange={setLocale} />
      <br />
      <Editable label="Edit content:" initialValue="What's your name?" onChange={setValue}/>
      <br/>
      {value ? `hello ${value}` : null}
    </div>
  );
}