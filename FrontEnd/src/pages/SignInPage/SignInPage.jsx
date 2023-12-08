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

import { jwtDecode } from "jwt-decode";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slides/userSlide";

const SignInPage = () => {
  const navigate = useNavigate();

  // Call api sign-in
  const mutation = useMutationHooks((data) => UserService.loginUser(data));
  const { data, isLoading, isSuccess } = mutation;

  useEffect(() => {
    if (isSuccess) {
      navigate("/");
      // Dang nhap thanh cong luu vao localStorage va access_token
      localStorage.setItem("access_token", JSON.stringify(data?.access_token));

      if (data?.access_token) {
        const decoded = jwtDecode(data?.access_token);
        if (decoded?.id) {
          handleGetDetailUser(decoded?.id, data?.access_token);
        }
      }
    }
  }, [isSuccess]);

  const handleGetDetailUser = async (id, token) => {
    const res = await UserService.getDetailUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const dispatch = useDispatch();

  // Set lai email khi nhap
  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };

  // Set lai password khi nhap
  const handleOnchangePassword = (value) => {
    setpassword(value);
  };

  // Chuyen sang trang sing-up
  const handleNavigateSignUp = () => {
    navigate("/sign-up");
  };

  // Btn dang nhap
  const handleSignIn = () => {
    mutation.mutate({
      email,
      password,
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

          <p>Đăng nhập hoặc tạo tài khoản</p>

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
              placeholder="Nhập vào mật khẩu"
              type={isShowPassword ? "text" : "password"}
              value={password}
              onChange={handleOnchangePassword}
            />
          </div>

          {data?.status === "error" && (
            <span style={{ color: "red" }}>{data?.message}</span>
          )}

          {/* <Loading isLoading={isLoading}> */}
          <ButtonComponent
            disabled={!email.length || !password.length}
            onClick={handleSignIn}
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
          {/* </Loading> */}
          <p>
            <WrapperTextLight>Quên mật khẩu</WrapperTextLight>
          </p>

          <p>
            Chưa có tài khoản?{" "}
            <WrapperTextLight onClick={handleNavigateSignUp}>
              Tạo tài khoản
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

export default SignInPage;
