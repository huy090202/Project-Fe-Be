import React from "react";
import NavBarComponent from "../../components/NavbarComponent/NavbarComponent";
import CardComponent from "../../components/CardComponent/CardComponent";
import { Col, Row } from "antd";

const TypeProductPage = () => {
  return (
    <Row
      style={{
        padding: "10px 120px 0",
        backgroundColor: "#efefef",
        flexWrap: "nowrap",
      }}
    >
      <Col
        span={4}
        style={{
          backgroundColor: "#fff",
          marginRight: "10px",
          padding: "10px",
          borderRadius: "6px",
        }}
      >
        <NavBarComponent />
      </Col>
      <Col span={20} style={{ backgroundColor: "#fff" }}>
        <CardComponent />
      </Col>
    </Row>
  );
};

export default TypeProductPage;
