import React from 'react';
import ReactBodyMovin from 'react-bodymovin';
import ErrorServerAnimation from './../animations/error-500.json';

const ErrorServer = () => {

    //constante de configuração do ReactBodyMovin
    const bodyMovinOptions = {
        loop: true,
        autoplay: true, 
        prerender: true,
        animationData: ErrorServerAnimation
    };

    return (
        <div>
            <ReactBodyMovin options={bodyMovinOptions} />
        </div>
    )
}

export default ErrorServer;