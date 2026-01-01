import React from 'react';
import { FaStar } from 'react-icons/fa';

const TopProvider = ({data}) => {
    const{providerName, rating, providerImage}=data
    // console.log(data);
    return (
        <div className='flex items-center gap-4 bg-base-200 rounded-lg px-3 py-2 shadow-sm'>
             <img className='rounded-full w-15' src={providerImage} alt="" />
             <div>
                <h4 className='text-xl font-medium text-gray-600'>{providerName}</h4>
                <p className='flex items-center gap-2 text-gray-500'><FaStar className='text-orange-400' /> {rating}</p>
             </div>
        </div>
    );
};

export default TopProvider;