import { Button } from "antd";
import React from "react";

const ButtonComponent = ({
  size,
  styleBtn,
  styleText,
  textButton,
  ...rests
}) => {
  return (
    <Button size={size} style={styleBtn} {...rests}>
      <span style={styleText}>{textButton}</span>
    </Button>
  );
};

export default ButtonComponent;
