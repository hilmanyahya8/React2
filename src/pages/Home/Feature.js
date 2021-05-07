import React from "react";
import {Link} from "react-router-dom";
import './Home.css';
import { Row, Col, Card, Button } from "antd";
import img from "../Item/img/img5.png";
import img1 from "../Item/img/img7.jpg";
import img2 from "../Item/img/6.jpg";
import img3 from "../Item/img/11.jpg";
import img4 from "../Item/img/13.png";
import img5 from "../Item/img/14.png";
import img6 from "../Item/img/15.jpg";
import img7 from "../Item/img/18.jpg";
import img8 from "../Item/img/17.jpeg";



const { Meta } = Card;
export const AppFeature = () => {
    const CardComponent = [
        {
            key: 1,
            img: img3,
            tittle: "Baju Muslimah",
            desc: "Makin Keren dan kece"
        },
        {
            key: 2,
            img: img4,
            tittle: "Baju Muslim",
            desc: "Gak Kalah cucok dengan produk luar"
        },
        {
            key: 3,
            img: img5,
            tittle: "Trendy",
            desc: "Bergaya tanpa membuka Aurat"
        },
        {
            key: 4,
            img: img,
            tittle: "Kecap Bango",
            desc: "Enak terasa Kecapnya"
        },
        {
            key: 5,
            img: img1,
            tittle: "Beras",
            desc: "Langsung dari Petani"
        },
        {
            key: 6,
            img: img2,
            tittle: "Minyak",
            desc: "5x Penyaringan"
        },
        {
            key: 7,
            img: img6,
            tittle: "Kerajinan Tangan",
            desc: "Menarik Sekali Cantik"
        },
        {
            key: 8,
            img: img7,
            tittle: "Patung Ukir",
            desc: "Mengukir Apapun Bisa, jadi kado unik buat temen mu"
        },
        {
            key: 6,
            img: img8,
            tittle: "Batik",
            desc: "Batik itu bagus"
        },
    ]
  return (
    <div className="block FeatureBlock BgGray">
      <div className="container">
        <Row
          style={{
            marginTop: "20px",
            justifyContent: "center",
          }}
          gutter={24}
        >
          {
            CardComponent.map(card=>{
                return(
          <Col  style= {{marginTop: "20px"}}>

                    <Card
                    hoverable
                    style={{ width: 305 }}
                    cover={
                        <img
                        alt="example"
                        src={card.img}
                        />
                    }
                    >
                    <Meta
                        title={card.tittle}
                        description={card.desc}
                    />
                    <Link to={"/app/item"}>
                        <Button className="button" style= {{display:"flex"}} type="primary">Detail Produk</Button>
                    </Link>
                    </Card>
            </Col>
                )
            })
          }
        </Row>
      </div>
    </div>
  );
};

export default AppFeature;
