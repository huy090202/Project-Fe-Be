import React, { useEffect, useState } from "react";
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

import { useNavigate } from "react-router-dom";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHooks";

import Loading from "../../components/LoadingComponent/Loading";
import Message from "../../components/Message/Message";

const SignUpPage = () => {
  const navigate = useNavigate();

  // Call api sign-up
  const mutation = useMutationHooks((data) => UserService.signUpUser(data));
  const { data, isLoading, isSuccess, isError } = mutation;

  useEffect(() => {
    if (isSuccess) {
      Message.success();
      handleNavigateSignIn();
    } else if (isError) {
      Message.error();
    }
  }, [isSuccess, isError]);

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  // Set lai email khi nhap
  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };

  // Set lai password khi nhap
  const handleOnchangePassword = (value) => {
    setpassword(value);
  };

  // Set lai confirm password khi nhap
  const handleOnchangeConfirmPassword = (value) => {
    setconfirmPassword(value);
  };

  // Chuyen sang trang sing-in
  const handleNavigateSignIn = () => {
    navigate("/sign-in");
  };

  // Btn dang ky
  const handleSignUp = () => {
    mutation.mutate({
      email,
      password,
      confirmPassword,
    });
  };
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

          <p>Nhập vào form bên dưới để đăng ký tài khoản</p>

          <InputForm
            style={{ marginBottom: "10px" }}
            placeholder="abc@gmail.com"
            value={email}
            onChange={handleOnchangeEmail}
          />

          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
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
              value={password}
              onChange={handleOnchangePassword}
            />
          </div>

          <div style={{ position: "relative" }}>
            <span
              onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
              style={{
                zIndex: 10,
                position: "absolute",
                top: "4px",
                right: "8px",
              }}
            >
              {isShowConfirmPassword ? <EyeFilled /> : <EyeInvisibleFilled />}
            </span>

            <InputForm
              placeholder="Xác nhận mật khẩu"
              type={isShowConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={handleOnchangeConfirmPassword}
            />
          </div>

          {data?.status === "error" && (
            <span style={{ color: "red" }}>{data?.message}</span>
          )}

          {/* <Loading isLoading={isLoading}> */}
          <ButtonComponent
            disabled={
              !email.length || !password.length || !confirmPassword.length
            }
            onClick={handleSignUp}
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
          {/* </Loading> */}

          <p>
            Bạn đã có tài khoản?{" "}
            <WrapperTextLight onClick={handleNavigateSignIn}>
              Đăng nhập
            </WrapperTextLight>
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
