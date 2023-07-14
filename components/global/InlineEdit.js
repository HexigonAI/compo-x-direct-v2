import { useRef, useState } from 'react';
import EditIcon from './EditIcon';

const InlineEdit = ({ value, setValue }) => {
  const [editingValue, setEditingValue] = useState(value);
  const inputElement = useRef();

  const onChange = (event) => setEditingValue(event.target.value);

  const onKeyDown = (event) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      event.target.blur();
    }
  };

  const onBlur = (event) => {
    if (event.target.value.trim() === '') {
      setEditingValue(value);
    } else {
      setValue(event.target.value);
    }
  };
  const focusInput = () => {
    inputElement.current.focus();
  };


  return (
    <h1 style={{display: 'flex'}}>
      <input
        type='text'
        style={{overflow:'hidden'}}
        ref={inputElement}
        className='font-LeagueSpartan bg-transparent text-white w-6/12'
        aria-label='Field name'
        value={editingValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
      />
        <button className='mt-2' onClick={focusInput}> <EditIcon /></button>
    </h1>
  );
};

export default InlineEdit;
