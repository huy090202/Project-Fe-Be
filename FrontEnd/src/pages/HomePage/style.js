import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 24px;
  heigh: 44px;
  border-bottom: 1px solid #ccc;
`;

export const WrapperButtonMore = styled(ButtonComponent)`
  &:hover {
    color: #fff;
    background-color: rgb(13, 92, 182);

    span {
      color: #fff;
    }
  }

  width: 100%;
  text-align: center;
`;

export const WrapperProducts = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap;
`;
