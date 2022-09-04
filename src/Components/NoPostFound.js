import React from 'react';

const NoPostFound = () => {
    return (
        <div className='bg-white text-black relative rounded-lg  shadow-sm mt-9 p-6'>
            <h1 className='text-4xl font-bold'>There are No Posts Found!</h1>
            <p className='font-semibold text-center mt-2'>keep checking back later or refresh to get more feeds!</p>
        </div>
    );
};

export default NoPostFound;