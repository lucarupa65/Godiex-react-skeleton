import React from "react";
import {Button, Form, Input} from "antd";
import "../classification-type.css";
import {validateMessages} from "../../../../utils/ValidateMenssageForm";
import {success, warning} from "../../../../utils/Notification";
import {useDispatch} from "react-redux";
import {createClassificationType} from "../../../../state/actions-reducers/classification-type/classificationTypeAction";

const FormClassificationType = () => {

    const [form] = Form.useForm();
    const dispatch = useDispatch();

    const onFinish = async () =>{
        const data = await form.validateFields();
        dispatch(
            createClassificationType(data, (response) => {
                success('el tipo de clasificacion fue registrado con exito');
                form.resetFields();
            }, (error) => {
                warning('ha sucedido un errror al registrar el tipo de clasificacion');
            })
        );
    }

    return (
        <>
            <Form
                validateMessages={validateMessages}
                form={form}
                onFinish={onFinish}
            >
                <Form.Item
                    label={'Nombre'}
                    name='name'
                    rules={[
                        {
                            required: true
                        }
                    ]}
                >
                    <Input
                        placeholder="Nombre tipo clasificacion"
                        width={100}
                    />
                </Form.Item>
                {<Form.Item>
                    <Button  htmlType="submit">
                        Registrar
                    </Button>
                </Form.Item>}
            </Form>
        </>
    );
}

export default FormClassificationType;
