import React, {useState} from "react";
import {Button, Col, Form, Row, Upload} from "antd";
import "../image-sorter.css";
import {validateMessages} from "../../../../utils/ValidateMenssageForm";
import {UploadOutlined} from '@ant-design/icons';
import {Link} from "react-router-dom";
import {success, warning} from "../../../../utils/Notification";
import {useDispatch} from "react-redux";
import { sorterImage} from "../../../../state/actions-reducers/sorter/sorterAction";

const FormFile = () => {

    const [form] = Form.useForm();
    const [image, setImage] = useState(null);
    const dispatch = useDispatch();

    const onFinish = async () => {
        const data = new FormData();
        data.append('image', image);
        dispatch(
            sorterImage(data, (response) => {
                success('la imagen que subio es : ' + response.predictedLabelValue);
            }, (error) => {
                warning(error);
            })
        );
    }

    const propsUpload = {
        beforeUpload: (file) => {
            return false;
        },
        onChange({ file, fileList }) {
            if (file.status !== "uploading") {
                setImage(fileList[0] ? fileList[0].originFileObj : {});
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
                            label="Seleccione la imagen a clasificar"
                            name="file"
                        >
                            <Upload
                                {...propsUpload}
                                maxCount={1}
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
