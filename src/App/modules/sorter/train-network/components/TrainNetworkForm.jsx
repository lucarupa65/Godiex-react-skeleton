import React, {useState} from "react";
import {Button, Col, Form, Row, Select, Upload} from "antd";
import {success, warning} from "../../../../utils/Notification";
import {useDispatch, useSelector} from "react-redux";
import {validateMessages} from "../../../../utils/ValidateMenssageForm";
import {UploadOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import sorterImage from "../../../../state/actions-reducers/sorter/sorterReducer";
import {trainModel} from "../../../../state/actions-reducers/train/trainAction";

const FormFile = () => {

    const classificationsTypes = useSelector(state => state?.classificationsTypes);
    const [form] = Form.useForm();
    const [images, setImages] = useState(null);
    const [name, setName] = useState(null);
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        const formData = new FormData();
        formData.append('name', name);
        for (let i = 0; i < images.length; i++) {
            formData.append('data',images[i].originFileObj);
        }
        dispatch(
            trainModel(formData, () => {
                success('modelo entrenado con exito');
            }, (error) => {
                warning("ha sucedido un error al entrenar el modelo");
            })
        );
    }

    const propsUpload = {
        beforeUpload: (file) => {
            return false;
        },
        onChange({ file, fileList }) {
            if (file.status !== "uploading") {
                setImages(fileList);
            }
        },
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Form
                validateMessages={validateMessages}
                form={form}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                style={{height: '100%', width: "100%"}}
            >
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Form.Item
                            label="Seleccione el tipo de clasificacion de imagen"
                            name="file"
                        >
                            <select
                                placeholder="Por favor elegir la compañía asociada"
                                style={{width: "100%"}}
                                onChange={(e) => setName(e.target.value )}
                            >
                                <option value="">Seleccione...</option>
                                {
                                    classificationsTypes.map((item) => (
                                        <option value={item.name}>{item.name}</option>
                                    ))
                                }
                            </select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                        <Form.Item
                            label="Seleccione la imagen a clasificar"
                            name="file"
                        >
                            <Upload
                                {...propsUpload}
                                listType="picture-card"
                                key={"1"}
                            >
                                <UploadOutlined />
                            </Upload>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Form.Item>
                        <Button
                            type={"primary"}
                            htmlType="submit"
                            style={{marginRight: 8}}
                        >
                            Clasificar Imagen
                        </Button>
                    </Form.Item>

                    <Form.Item>
                        <Button >
                            <Link to={"/Home"}>
                                Volver
                            </Link>
                        </Button>
                    </Form.Item>
                </Row>
            </Form>
        </>
    );
}

export default FormFile;
