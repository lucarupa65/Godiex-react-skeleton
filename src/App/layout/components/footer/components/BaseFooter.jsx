import React from 'react'
import { Layout } from "antd";
import  "../css/footer.css";

const { Footer } = Layout;

const BaseFooterComponent = () => {
    return (
        <Footer className = "base-footer">
            © 2021-2021 Proyecto de aula IA - Diego Villa y Angel Casadiegos
        </Footer>
    );
}
export default BaseFooterComponent;
