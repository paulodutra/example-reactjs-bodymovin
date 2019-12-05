import React from 'react';
import ReactBodyMovin from 'react-bodymovin';
import NotFoundAnimation from './../animations/error-404.json';

const NotFound = () => {

    //constante de configuração do ReactBodyMovin
    const bodyMovinOptions = {
        loop: true,
        autoplay: true,
        prerender: true,
        animationData: NotFoundAnimation
    };

    return (
        <div>
            <ReactBodyMovin options={bodyMovinOptions}/>
        </div>
    )
}

export default NotFound;