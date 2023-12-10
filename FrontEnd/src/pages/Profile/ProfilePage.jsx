import React, { useEffect, useState } from "react";
import {
  WrapperContentProfile,
  WrapperHeaderProfile,
  WrapperInputProfile,
  WrapperLabel,
} from "./style";
import InputForm from "../../components/InputForm/InputForm";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useSelector } from "react-redux";
import * as UserService from "../../services/UserService";
import { useMutationHooks } from "../../hooks/useMutationHooks";
import Loading from "../../components/LoadingComponent/Loading";
import Message from "../../components/Message/Message";
import { useDispatch } from "react-redux";
import { updateUser } from "../../redux/slides/userSlide";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);

  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setaddress] = useState("");

  //   Loading
  const [loading, setLoading] = useState(false);

  const mutation = useMutationHooks((data) => {
    const { id, access_token, ...rests } = data;
    UserService.updateUser(id, access_token, rests);
  });

  const dispatch = useDispatch();
  const { data, isSuccess, isError } = mutation;

  useEffect(() => {
    setAvatar(user?.avatar);
    setName(user?.name);
    setEmail(user?.email);
    setPhone(user?.phone);
    setaddress(user?.address);
  }, [user]);

  useEffect(() => {
    if (isSuccess) {
      Message.success();
      handleGetDetailUser(user?.id, user?.access_token);
    } else if (isError) {
      Message.error();
    }
  }, [isSuccess, isError]);

  const handleGetDetailUser = async (id, token) => {
    const res = await UserService.getDetailUser(id, token);
    dispatch(updateUser({ ...res?.data, access_token: token }));
  };

  //   Function change avatar
  const handleOnchangeAvatar = (value) => {
    setAvatar(value);
  };

  //   Function change name
  const handleOnchangeName = (value) => {
    setName(value);
  };

  //   Function change email
  const handleOnchangeEmail = (value) => {
    setEmail(value);
  };

  //   Function change phone
  const handleOnchangePhone = (value) => {
    setPhone(value);
  };

  //   Function change address
  const handleOnchangeAddress = (value) => {
    setaddress(value);
  };

  // Function update user
  const handleUpdate = () => {
    setLoading(true);
    mutation.mutate({
      id: user?.id,
      avatar,
      name,
      email,
      phone,
      address,
      access_token: user?.access_token,
    });

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <div style={{ width: "1270px", margin: "0 auto", height: "500px" }}>
      <WrapperHeaderProfile>Thông tin người dùng</WrapperHeaderProfile>

      <Loading isLoading={loading}>
        <WrapperContentProfile>
          {/* Input avatar */}
          <WrapperInputProfile>
            <WrapperLabel htmlFor="avatar">Avatar: </WrapperLabel>
            <InputForm
              id="avatar"
              style={{ width: "300px" }}
              value={avatar}
              onChange={handleOnchangeAvatar}
            />

            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleBtn={{
                height: "30px",
                width: "fit-content",
                padding: "2px 6px 6px",
              }}
              textButton={"Cập nhật"}
              styleText={{
                color: "rgb(26, 148, 255)",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            ></ButtonComponent>
          </WrapperInputProfile>

          {/* Input name */}
          <WrapperInputProfile>
            <WrapperLabel htmlFor="name">Name: </WrapperLabel>
            <InputForm
              id="name"
              style={{ width: "300px" }}
              value={name}
              onChange={handleOnchangeName}
            />

            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleBtn={{
                height: "30px",
                width: "fit-content",
                padding: "2px 6px 6px",
              }}
              textButton={"Cập nhật"}
              styleText={{
                color: "rgb(26, 148, 255)",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            ></ButtonComponent>
          </WrapperInputProfile>

          {/* Input email */}
          <WrapperInputProfile>
            <WrapperLabel htmlFor="email">Email: </WrapperLabel>
            <InputForm
              id="email"
              style={{ width: "300px" }}
              value={email}
              onChange={handleOnchangeEmail}
            />

            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleBtn={{
                height: "30px",
                width: "fit-content",
                padding: "2px 6px 6px",
              }}
              textButton={"Cập nhật"}
              styleText={{
                color: "rgb(26, 148, 255)",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            ></ButtonComponent>
          </WrapperInputProfile>

          {/* Input phone */}
          <WrapperInputProfile>
            <WrapperLabel htmlFor="phone">Phone: </WrapperLabel>
            <InputForm
              id="phone"
              style={{ width: "300px" }}
              value={phone}
              onChange={handleOnchangePhone}
            />

            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleBtn={{
                height: "30px",
                width: "fit-content",
                padding: "2px 6px 6px",
              }}
              textButton={"Cập nhật"}
              styleText={{
                color: "rgb(26, 148, 255)",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            ></ButtonComponent>
          </WrapperInputProfile>

          {/* Input address */}
          <WrapperInputProfile>
            <WrapperLabel htmlFor="address">Address: </WrapperLabel>
            <InputForm
              id="address"
              style={{ width: "300px" }}
              value={address}
              onChange={handleOnchangeAddress}
            />

            <ButtonComponent
              onClick={handleUpdate}
              size={40}
              styleBtn={{
                height: "30px",
                width: "fit-content",
                padding: "2px 6px 6px",
              }}
              textButton={"Cập nhật"}
              styleText={{
                color: "rgb(26, 148, 255)",
                fontSize: "15px",
                fontWeight: "bold",
              }}
            ></ButtonComponent>
          </WrapperInputProfile>
        </WrapperContentProfile>
      </Loading>
    </div>
  );
};

export default ProfilePage;
