import React from "react";
import { Col } from "antd";
// import Search from "antd/es/input/Search";

//import css
import {
  WapperHeader,
  WapperTextHeader,
  WapperAccountHeader,
  WapperTextHeaderSmall,
} from "./style";

// import icons
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

//import component ButtonInputSearch
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

const HeaderComponent = () => {
  return (
    <div>
      <WapperHeader>
        <Col span={6}>
          <WapperTextHeader>PhamDangHuy</WapperTextHeader>
        </Col>
        <Col span={12}>
          <ButtonInputSearch
            size="large"
            textButton="Tìm kiếm"
            placeholder="Input search text"
            // onSearch={onSearch}
          />
        </Col>
        <Col
          span={6}
          style={{ display: "flex", gap: "20px", alignItems: "center" }}
        >
          <WapperAccountHeader>
            <UserOutlined style={{ fontSize: "30px" }} />
            <div>
              <WapperTextHeaderSmall>Đăng nhập/Đăng ký</WapperTextHeaderSmall>
              <div>
                <WapperTextHeaderSmall>Tài khoản</WapperTextHeaderSmall>
                <CaretDownOutlined />
              </div>
            </div>
          </WapperAccountHeader>
          <div>
            <ShoppingCartOutlined style={{ fontSize: "30px", color: "#fff" }} />
            <WapperTextHeaderSmall>Giỏ hàng</WapperTextHeaderSmall>
          </div>
        </Col>
      </WapperHeader>
    </div>
  );
};

export default HeaderComponent;
