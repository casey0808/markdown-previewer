import { useState } from 'react';

export default (initialVal) => {
  const [value, setValue] = useState(initialVal);
  const handleChange = (e) => {
    setValue(e.target.value);
    window.localStorage.setItem('Markdown', JSON.stringify(e.target.value))
  };

  const reset = () => {
    setValue('');
    window.localStorage.removeItem('Markdown')
  };
  return [value, handleChange, reset];
};
