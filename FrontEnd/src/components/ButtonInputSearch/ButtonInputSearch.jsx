import React from "react";

// import icons
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ButtonInputSearch = (props) => {
  const {
    size,
    placeholder,
    textButton,
    bordered,
    backgroundColorInput = "#fff",
    backgroundColorBtn = "rgb(13, 92, 182)",
    colorBtn = "#fff",
    borderRadius = 0,
  } = props;
  return (
    <div style={{ display: "flex" }}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        bordered={bordered}
        style={{
          backgroundColor: backgroundColorInput,
          borderRadius: borderRadius,
        }}
      />
      <ButtonComponent
        size={size}
        styleBtn={{
          backgroundColor: backgroundColorBtn,
          borderRadius: borderRadius,
          border: !bordered && "none",
        }}
        icon={<SearchOutlined style={{ color: colorBtn }} />}
        textButton={textButton}
        styleText={{ color: colorBtn }}
      />
    </div>
  );
};

export default ButtonInputSearch;
