import React from 'react'
import { Row, Col } from 'antd';



function AppFeature() {
    return (
        <div className="block FeatureBlock BgGray">
            <div className="container">
               <Row gutter={[16, 16]}>
                <Col span={8}> colom </Col>
                <Col span={8}> colom </Col>  
                <Col span={8}> colom </Col>  

                <Col span={8}></Col>  
                <Col span={8}></Col>  
                <Col span={8}></Col>  
                </Row>
            </div>
        </div>

     
    );
}

export default AppFeature;

