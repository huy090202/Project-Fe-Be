import axios from "axios";

// Dang nhap
export const loginUser = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/sign-in`,
    data
  );
  return res.data;
};

// Dang ky
export const signUpUser = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/sign-up`,
    data
  );
  return res.data;
};

// Detail user khi dang nhap thanh cong
export const getDetailUser = async (id, access_token) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/user//detai-user/${id}`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};
