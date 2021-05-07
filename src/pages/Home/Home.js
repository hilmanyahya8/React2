import React from "react";
import { PageHeader, Card, Avatar, } from "antd";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import "./Home.css";
import { Slider } from "./slider";
import  img1  from '../Item/img/img5.png';
import img2 from '../Item/img/img6.jpg';
import img3 from '../Item/img/img7.jpg';
import { AppFeature } from "./Feature";

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
      < div className="container">
        <Slider /> 
      </div>
        <br>

          
        </br>
      <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src={img1}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="" />}
          title="Card title"
          description="This is the description"
        />
      </Card>,
      </div> 
      <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src={img2}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="message" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="" />}
          title="Card title"
          description="This is the description"
        />
      </Card>,
      </div>
      <div>
      <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src={img3}
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="message" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="../Item/img/img7.jpg" />}
          title="Card title"
          description="This is the description"
        />
      </Card>,
      </div>
    </div>
  )
};

