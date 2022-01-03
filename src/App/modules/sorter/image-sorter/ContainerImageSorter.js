import React, {Fragment} from "react";
import ImageSorter from "./components/ImageSorter";
import {PageHeader, Tag} from "antd";
import ModalComponent from "../../../shared/modal/Modal";
import {FileAddOutlined} from "@ant-design/icons";
import FormClassificationType from "../classification-type/components/FormClassificationType";

const ContainerImageSorter = () => {
    return (
        <>
            <Fragment>
                <PageHeader
                    className={"site-page-header"}
                    tags={<Tag color="blue">Clasificando</Tag>}
                    subTitle={"seleccion de imagen a clasificar"}
                    onBack={() => window.history.back()}
                    title={"Clasificar Imagen"}
                />
                <div style={{ margin: 10 }}>
                    <ImageSorter />
                </div>

            </Fragment>
        </>
    );
}

export default ContainerImageSorter;
