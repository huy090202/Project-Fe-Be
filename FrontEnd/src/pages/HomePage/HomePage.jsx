import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import { WapperTypeProduct } from "./style";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider2.png";
import slider3 from "../../assets/images/slider3.png";

const HomePage = () => {
  const arr = ["TV", "Tủ Lạnh", "LapTop"];
  return (
    <>
      <div style={{ padding: "0 120px" }}>
        <WapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WapperTypeProduct>
      </div>
      <div
        id="container"
        style={{ backgroundColor: "#efefef", padding: "0 120px" }}
      >
        <SliderComponent arrImages={[slider1, slider2, slider3]} />
      </div>
    </>
  );
};

export default HomePage;
