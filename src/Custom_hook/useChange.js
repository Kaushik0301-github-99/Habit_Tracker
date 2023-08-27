import { useState } from "react";

const useChangeValue = (initialValue) => {
  const [value, setvalue] = useState(initialValue);
  const handleChange = (event) => {
    console.log(event.target.value);
    setvalue(event.target.value);
    console.log(value);
  };
  return {
    value,
    onchange: handleChange,
  };
};

export default useChangeValue;
