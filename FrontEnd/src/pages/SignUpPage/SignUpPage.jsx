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

const SignUpPage = () => {
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

          <p>Nhập vào form bên dưới để đăng ký tại khoản</p>

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
              style={{ marginBottom: "10px" }}
              placeholder="Nhập vào mật khẩu"
              type={isShowPassword ? "text" : "password"}
            />
          </div>

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
              placeholder="Xác nhận mật khẩu"
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
            textButton={"Đăng ký"}
            styleText={{ color: "#fff" }}
          ></ButtonComponent>

          <p>
            Bạn đã có tài khoản? <WrapperTextLight>Đăng nhập</WrapperTextLight>
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

export default SignUpPage;
