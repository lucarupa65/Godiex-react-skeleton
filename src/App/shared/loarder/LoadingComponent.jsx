import React from 'react';
import './css/loading-component.css'

const LoadingComponent = () => {

    return (
        <>
            <div className="lds-default loader">
                <div/><div/><div/><div/>
                <div/><div/><div/><div/>
                <div/><div/><div/><div/>
            </div>
        </>
    );
};

export default LoadingComponent;
