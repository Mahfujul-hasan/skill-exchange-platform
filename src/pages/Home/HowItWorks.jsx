import React from 'react';

const HowItWorks = ({data}) => {
    return (
        <div className='flex flex-col justify-center items-center space-y-3 bg-base-100 p-5 rounded-lg shadow-lg border border-gray-200'>
            <img className='w-20 h-20' src={data.icon} alt="" />
            <h3 className='text-xl font-bold'>{data.title}</h3>
            <p className='text-gray-500 font-medium'>{data.description}</p>
        </div>
    );
};

export default HowItWorks;