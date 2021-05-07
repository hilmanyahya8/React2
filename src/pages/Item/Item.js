import React from "react";
import { Row, Col, Image, Typography,  Button } from "antd";
import {Link} from "react-router-dom";
import img1 from "../Item/img/18.jpg";

const { Title, Paragraph } = Typography;
export const Item = () => {
  return (
    <div>
      <Row gutter={24}>
        <Col span={12}>
          <Image
            style={{
              width: "100%",
            }}
            src={img1}
          />
        </Col>
        <Col span={12}>
          <Title style= {{fontWeight: "Bold"}}>Detail Produk</Title>
          <Paragraph style= {{marginLeft: "20px" }}>
            Patung adalah benda tiga dimensi karya manusia yang diakui secara
            khusus sebagai suatu karya seni. Orang yang menciptakan patung
            disebut pematung. Tujuan penciptaan patung adalah untuk menghasilkan
            karya seni yang dapat bertahan selama mungkin. Karenanya, patung
            biasanya dibuat dengan menggunakan bahan yang tahan lama dan sering
            kali mahal, terutama dari perunggu dan batu seperti marmer, kapur,
            dan granit. Kadang, walaupun sangat jarang, digunakan pula bahan
            berharga seperti emas, perak, jade, dan gading. Bahan yang lebih
            umum dan tidak terlalu mahal digunakan untuk tujuan yang lebih luar,
            termasuk kayu, keramik, dan logam. Bahan manufaktur seperti resin
            juga kerap kali digunakan karena durabilitas dan harganya yang
            relatif murah. Pada masa lalu patung dijadikan sebagai berhala,
            simbol Tuhan atau Dewa yang disembah. Tapi seiring dengan makin
            rasionalnya cara berpikir manusia, maka patung tidak lagi dijadikan
            berhala melainkan hanya sebagai karya seni belaka. Fenomena
            pemberhalaan patung ini terjadi pada agama-agama atau
            kepercayaan-kepercayaan yang politeisme seperti terjadi di Arab
            sebelum munculnya agama samawi.
          </Paragraph>
          <Link to={"/app/item"}>
            <Button
              className="button"
              style={{ display: "flex", alignItems: "center"}}
              type="primary"
            >
              Tambah Cart
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default Item;
