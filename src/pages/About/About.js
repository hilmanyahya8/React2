import React from "react";
import { Card } from "antd";
import img1 from "../Item/img/yh.jpg";

export const About = () => {
  return (
    <div>
      <div className="site-card-border-less-wrapper">
        <Card title="Sekilas Tentang CEO Kelongan" bordered={false} style={{ width: "100%" }}>
          <img width={"100%"} height={"50%"} src={img1} />
          <p style= {{marginTop:"20px", fontFamily: "sans-serif"}}>
            <h4>Kelongan ini dibuat bersama 3 Rekan</h4>
            <ul>
                <li>yahya</li>
                <li>Rapi</li>
                <li>Lingga</li>
            </ul>
          </p>
          <h4>Deskripsi</h4>
          <h6>kelongan ini sendiri berawal dari inisiatif kita melihat banyaknya toko-toko di indonesia yang 
          menjual berbagai produk yang tidak menjamin kehalallnya diindonesia.

          </h6>

          <p>Tujuan</p>
        </Card>
      </div>
    </div>
  );
};
