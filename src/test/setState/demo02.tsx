import React from "react";

export const Demo02 = () => {
  console.log("demo02");
  const [value, setValue] = React.useState(0);

  const keepYourEyesOnTheValue = () => {
    setValue(1);
  };
  return <div onClick={keepYourEyesOnTheValue}> 点我打印 value: {value}</div>;
};
