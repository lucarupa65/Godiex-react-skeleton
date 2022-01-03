import React, {Fragment} from "react";
import TrainNetworkForm from "./components/TrainNetworkForm";
import {Col, PageHeader, Row, Tag} from "antd";
import Card from "../../../common/card/Card";

const ContainerTrainNetwork = () => {
    return (
        <>
            <Fragment>
                <PageHeader
                    className={"site-page-header"}
                    tags={<Tag color="red">Entrenando</Tag>}
                    subTitle={"cargue todas las imagenes a entrenar"}
                    onBack={() => window.history.back()}
                    title={"Entrenar Modelo"}
                />
                <Row style={{padding: 10}} gutter={16}>
                    <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                        <Card content={<TrainNetworkForm />} title={"Formulario entrenar modelo"}/>
                    </Col >
                </Row>
            </Fragment>
        </>
    );
}

export default ContainerTrainNetwork;
