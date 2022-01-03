import React from 'react';
import '../../../App.css';
import '../css/welcome-menssage.css';
import {Button} from "antd";
import video from "../../../../Includes/videos/Fondo-IA2.mp4";
import {Link as LinkComponent} from "react-router-dom";

const BannerComponent = () => {
    return (
        <div className='hero-container'>
            <video src={video} autoPlay loop muted />
            <h1>CLASIFICACION DE IMAGENES</h1>
            <p> caracteristicas de la imagen </p>
            <Button
                size={"small"}
                shape={"round"}
                color={"#fff"}
            >
                <LinkComponent to="/Sorter">
                    Presiona Click Para Probar
                </LinkComponent>
            </Button>
        </div>
    );
}

export default BannerComponent;
