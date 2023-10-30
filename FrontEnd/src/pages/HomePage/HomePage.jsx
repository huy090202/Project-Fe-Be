import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WapperTypeProduct } from "./style";

const HomePage = () => {
  const arr = ["TV", "Tủ Lạnh", "LapTop"];
  return (
    <div style={{ padding: "0 120px" }}>
      <WapperTypeProduct>
        {arr.map((item) => {
          return <TypeProduct name={item} key={item} />;
        })}
      </WapperTypeProduct>
      HomePage
    </div>
  );
};

export default HomePage;
