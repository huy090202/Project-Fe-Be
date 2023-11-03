import React, { useState } from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperTextLight,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import imageSignIn from "../../assets/images/SignInImage.png";
import { Image } from "antd";
import { EyeFilled, EyeInvisibleFilled } from "@ant-design/icons";

const SignInPage = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "rgba(0, 0, 0, 0.53",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "800px",
          height: "445px",
          borderRadius: "6px",
          backgroundColor: "#fff",
        }}
      >
        <WrapperContainerLeft>
          <h1>Xin chào</h1>

          <p>Đăng nhập hoặc tạo tài khoản</p>

          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
          />

          <div style={{ position: "relative" }}>
            <span
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            >
              {isShowPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>

            <InputForm
              placeholder="Nhập vào mật khẩu"
              type={isShowPassword ? "text" : "password"}
            />
          </div>

          <ButtonComponent
            size={40}
            styleBtn={{
              background: "rgb(257, 57, 69)",
              height: "48px",
              width: "100%",
              border: "none",
              margin: "26px 0 10px",
            }}
            textButton={"Đăng nhập"}
            styleText={{ color: "#fff" }}
          ></ButtonComponent>

          <p>
            <WrapperTextLight>Quên mật khẩu</WrapperTextLight>
          </p>

          <p>
            Chưa có tài khoản?{" "}
            <WrapperTextLight>Tạo tài khoản</WrapperTextLight>
          </p>
        </WrapperContainerLeft>

        <WrapperContainerRight>
          <Image
            src={imageSignIn}
            preview={false}
            alt="Image SignIn"
            height="203px"
            width="203px"
          />

          <h4>Mua sắm tại DH</h4>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignInPage;
