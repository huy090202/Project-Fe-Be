import React from "react";
import { Badge, Button, Col, Popover } from "antd";
// import Search from "antd/es/input/Search";

//import css
import {
  WrapperHeader,
  WrapperTextHeader,
  WrapperAccountHeader,
  WrapperTextHeaderSmall,
  WrapperContentPopup,
} from "./style";

// import icons
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

//import component ButtonInputSearch
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";

import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import * as UserService from "../../services/UserService";
import { resetUser } from "../../redux/slides/userSlide";

const HeaderComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user);

  // Chuyen sang trang sing-in
  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };

  const handleLogOut = async () => {
    await UserService.logOutUser();
    dispatch(resetUser());
  };

  const content = (
    <div>
      <WrapperContentPopup>Thông tin người dùng</WrapperContentPopup>
      <WrapperContentPopup onClick={handleLogOut}>
        Đăng xuất
      </WrapperContentPopup>
    </div>
  );

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        background: "rgb(26, 148, 255)",
        justifyContent: "center",
      }}
    >
      <WrapperHeader>
        <Col span={5}>
          <WrapperTextHeader>DangHuy</WrapperTextHeader>
        </Col>

        <Col span={13}>
          <ButtonInputSearch
            size="large"
            textButton="Tìm kiếm"
            bordered={false}
            placeholder="Input search text"
            // onSearch={onSearch}
          />
        </Col>

        <Col
          span={6}
          style={{ display: "flex", gap: "54px", alignItems: "center" }}
        >
          <WrapperAccountHeader>
            <UserOutlined style={{ fontSize: "30px" }} />
            {user?.name ? (
              <>
                <Popover content={content} trigger="click">
                  <div style={{ cursor: "pointer" }}>{user.name}</div>
                </Popover>
              </>
            ) : (
              <div onClick={handleNavigateLogin} style={{ cursor: "pointer" }}>
                <WrapperTextHeaderSmall>
                  Đăng nhập/Đăng ký
                </WrapperTextHeaderSmall>

                <div>
                  <WrapperTextHeaderSmall>Tài khoản</WrapperTextHeaderSmall>
                  <CaretDownOutlined />
                </div>
              </div>
            )}
          </WrapperAccountHeader>
          <div>
            <Badge count={4} size="small">
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#fff" }}
              />
            </Badge>

            <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
