import React from "react";
import { Row, Col, Image, InputNumber } from "antd";
import imageProduct from "../../assets/images/test.webp";
import imageProductSmall from "../../assets/images/test1.webp";
import {
  WrapperAddressProduct,
  WrapperBtnQualityProduct,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleTextSell,
} from "./style";

import { StarFilled, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailsComponent = () => {
  const onChange = () => {};
  return (
    <Row
      style={{ padding: "16px", backgroundColor: "#fff", borderRadius: "4px" }}
    >
      <Col
        span={10}
        style={{ borderRight: "1px solid #e5e5e5", paddingRight: "8px" }}
      >
        <Image src={imageProduct} alt="Image product" preview={false} />
        <Row
          style={{
            paddingTop: "10px",
            justifyContent: "space-between",
          }}
        >
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="Image product Small"
              preview={false}
            />
          </WrapperStyleColImage>

          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="Image product Small"
              preview={false}
            />
          </WrapperStyleColImage>

          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="Image product Small"
              preview={false}
            />
          </WrapperStyleColImage>

          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="Image product Small"
              preview={false}
            />
          </WrapperStyleColImage>

          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="Image product Small"
              preview={false}
            />
          </WrapperStyleColImage>

          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              src={imageProductSmall}
              alt="Image product Small"
              preview={false}
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={14} style={{ paddingLeft: "10px" }}>
        <WrapperStyleNameProduct>
          Apple iPhone 14 Pro Max
        </WrapperStyleNameProduct>

        <div>
          <StarFilled style={{ fontSize: "12px", color: "rgb(253, 216, 54" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253, 216, 54" }} />
          <StarFilled style={{ fontSize: "12px", color: "rgb(253, 216, 54" }} />
          <WrapperStyleTextSell> | Đã bán 1000+</WrapperStyleTextSell>
        </div>

        <WrapperPriceProduct>
          <WrapperPriceTextProduct>200.000 đ</WrapperPriceTextProduct>
        </WrapperPriceProduct>

        <WrapperAddressProduct>
          <span>Giao đến </span>
          <span className="address">
            Hẻm 66A, Nguyễn Văn Cừ, phường An Hòa, quận Ninh Kiều, TP Cần Thơ
          </span>{" "}
          -<span className="change-address"> Đổi địa chỉ</span>
        </WrapperAddressProduct>

        <div
          style={{
            margin: "10px 0 20px",
            padding: "10px 0",
            borderTop: "1px solid #e5e5e5",
            borderBottom: "1px solid #e5e5e5",
          }}
        >
          <div style={{ marginBottom: "10px" }}>Số lượng</div>
          <WrapperQualityProduct>
            <button style={{ border: "none", background: "transparent" }}>
              <MinusOutlined style={{ color: "red", fontSize: "20px" }} />
            </button>

            <WrapperInputNumber
              size="small"
              defaultValue={3}
              onChange={onChange}
            />

            <button style={{ border: "none", background: "transparent" }}>
              <PlusOutlined style={{ color: "red", fontSize: "20px" }} />
            </button>
          </WrapperQualityProduct>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <ButtonComponent
            size={40}
            styleBtn={{
              background: "rgb(257, 57, 69)",
              height: "48px",
              width: "220px",
              border: "none",
            }}
            textButton={"Chọn mua"}
            styleText={{ color: "#fff" }}
          ></ButtonComponent>

          <ButtonComponent
            size={40}
            styleBtn={{
              background: "#fff",
              height: "48px",
              width: "220px",
              border: "1px solid rgb(13, 92, 182",
            }}
            textButton={"Mua trước trả sau"}
            styleText={{ color: "rgb(13, 92, 182", fontSize: "15px" }}
          ></ButtonComponent>
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailsComponent;
