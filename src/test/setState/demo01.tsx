import { useState } from "react";

export const Demo01 = () => {
  console.log("demo01");

  const [value, setValue] = useState(100);

  const clickHandler = () => {
    setValue(value + 1)
    setValue(value + 1)
    console.log("value1", value);
    setValue((value) => value + 1)
    setValue((value) => value + 1)
    console.log('value2', value)
  }

  return (
    <div>
      value: {value}
      <button onClick={clickHandler}>increase</button>
    </div>
  );
};
