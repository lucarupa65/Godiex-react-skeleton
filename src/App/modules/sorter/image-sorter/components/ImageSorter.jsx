import React from "react";
import "../image-sorter.css";
import FormFile from "./FormFile";
import Card from "../../../../common/card/Card";
import {Col, Row} from "antd";

const ImageSorter = () => {

    let titleCard = "Red Neuronal";

    return (
        <>
            <Row style={{padding: 30}} gutter={16}>
                <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                    <Card content={<FormFile />} title={titleCard}/>
                </Col >
            </Row>
        </>
    );
}

export default ImageSorter;
