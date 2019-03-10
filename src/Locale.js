import React, { useState } from 'react';

export default ({defaultLocale, onChange}) => {
  const [locale, setLocale] = useState(defaultLocale);

  const onLocaleChange = e => {
    setLocale(e.target.value);
    onChange(e.target.value);
  };

  return (
    <select onChange={onLocaleChange} value={locale}>
      <option value='en-US'>en-US</option>
      <option value='en-GB'>en-GB</option>
      <option value='he-IL'>he-IL</option>
      <option value='ar-EG'>ar-EG</option>
    </select>
  );
}