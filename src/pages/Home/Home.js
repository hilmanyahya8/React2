import React from "react";
import { PageHeader, Card, } from "antd";
import "./Home.css";
import { Slider } from "./slider";
import { AppFeature }  from "./Feature";


const { Meta } = Card;

export const Home = () => {
  return (
    <div>
      <PageHeader
        style={{
          padding: 0,
          margin: 0,
          height: 40,
          backgroundColor: "transparent",
        }}
        title={""}
      ></PageHeader>
      <div className="container">
        <Slider />
        </div>
        <>
          <AppFeature/>
        </>
        <>
        


        </>
      </div>
    )
    
}

