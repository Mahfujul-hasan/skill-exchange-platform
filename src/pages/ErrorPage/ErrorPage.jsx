import React from 'react';
import errorPic from '../../assets/page-found-404-error-concept-illustration_270158-294.webp'

const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center '>
            <img className='max-h-screen' src={errorPic} alt="" />
        </div>
    );
};

export default ErrorPage;