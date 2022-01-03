import React, { Fragment} from "react";
import TableClassificationType from "./components/TableClassificationType";
import {PageHeader, Tag} from "antd";
import "./classification-type.css";
import ModalComponent from "../../../shared/modal/Modal";
import {FileAddOutlined} from "@ant-design/icons";
import FormClassificationType from "./components/FormClassificationType";

const ClassificationType = () => {
    return (
        <>
            <Fragment>
                <PageHeader
                    className={"site-page-header"}
                    tags={<Tag color="green">Consultado</Tag>}
                    subTitle={"gestion de tipo de clasificacion"}
                    onBack={() => window.history.back()}
                    title={"Tipo de clasificaciones"}
                    extra={
                        <ModalComponent
                            modalTitle={"Registrar tipo clasificacion"}
                            textButton={"Agrear Tipo Clasificacion"}
                            iconButton={<FileAddOutlined />}
                            form={<FormClassificationType />}
                        />
                    }
                />
                <div className={"site-page-header"} >
                    <TableClassificationType />
                </div>

            </Fragment>

        </>
    );
}

export default ClassificationType;
