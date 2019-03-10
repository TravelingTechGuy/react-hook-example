import React, { useState } from 'react';

export default ({ label, initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);
  const [editorVisible, setEditorVisible] = useState(false);

  const toggleEditor = () => {
    editorVisible && onChange(value);
    setEditorVisible(!editorVisible);
  }
    
  return (
    <main>
      {editorVisible
        ?
        <label>
          {label}
          <input
            type="text"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
        </label>
        :
        <span>{value}</span>
      }
      <button onClick={toggleEditor}>{editorVisible ? 'Done' : 'Edit'}</button>
    </main>
  );
}