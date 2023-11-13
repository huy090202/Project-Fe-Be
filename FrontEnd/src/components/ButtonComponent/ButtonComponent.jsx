import { Button } from "antd";
import React from "react";

const ButtonComponent = ({
  size,
  styleBtn,
  styleText,
  textButton,
  disabled,
  ...rests
}) => {
  return (
    <Button
      size={size}
      {...rests}
      style={{
        ...styleBtn,
        background: disabled ? "#ccc" : styleBtn.background,
      }}
    >
      <span style={styleText}>{textButton}</span>
    </Button>
  );
};

export default ButtonComponent;
