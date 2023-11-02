import { Col, Image, InputNumber } from "antd";
import styled from "styled-components";

export const WrapperStyleImageSmall = styled(Image)`
  height: 64px !important;
  width: 64px;
`;

export const WrapperStyleColImage = styled(Col)`
  display: flex;
  flex-basis: unset;
`;

export const WrapperStyleNameProduct = styled.h1`
  color: rgb(39, 39, 42);
  font-size: 20px;
  font-weight: 500;
  line-height: 150%;
  word-break: break-word;
`;

export const WrapperStyleTextSell = styled.span`
  font-size: 15px;
  line-height: 24px;
  color: rgb(120, 120, 120);
`;

export const WrapperPriceProduct = styled.div`
  background: rgb(250, 250, 250);
  border-radius: 4px;
`;

export const WrapperPriceTextProduct = styled.h1`
  font-size: 32px;
  line-height: 40px;
  margin: 10px 8px 0 0;
  font-weight: 500;
  padding: 10px;
`;

export const WrapperAddressProduct = styled.div`
  span.address {
    text-decoration: underline;
    font-size: 15px;
    line-height: 24px;
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span.change-address {
    color: rgb(11, 116, 229);
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
  }
`;

export const WrapperQualityProduct = styled.div`
  display: flex;
  gap: 4px;
  width: 120px;
  align-items: center;
  border: 1px solid red;
  border-radius: 4px;
`;

export const WrapperInputNumber = styled(InputNumber)`
  &.ant-input-number.ant-input-number-sm {
    width: 60px;
    border-top: none;
    border-bottom: none;

    &.ant-input-number.handler-wrap {
      display: none;
    }
  }
`;
