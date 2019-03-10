import React, { useState } from 'react';

export default ({ label, initialValue, onValueChanged }) => {
  const [value, setValue] = useState(initialValue);
  const [editorVisible, setEditorVisible] = useState(false);

  const toggleEditor = () => {
    editorVisible && onValueChanged(value);
    setEditorVisible(!editorVisible);
  }
    
  return (
    <main>
      {editorVisible ? (
        <label>
          {label}
          <input
            type="text"
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </label>
      ) : (
        <span>{value}</span>
      )}
      <button onClick={toggleEditor}>{editorVisible ? 'Done' : 'Edit'}</button>
    </main>
  );
}