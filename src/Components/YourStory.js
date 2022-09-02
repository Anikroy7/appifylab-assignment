import React from 'react';
import logo from '../images/icons8-user-60.png';
import storyImage from '../images/story-img.jpg';
import storyLogo from '../images/user.png'

const YourStory = () => {
    return (
        <section className='flex'>
            <div className='bg-neutral w-40 h-52 flex items-center justify-center rounded-lg'>
                <div>
                    <img className='w-36 h-36 ml-2' src={logo} alt="" />
                    <div className='w-40 relative h-16 rounded-lg rounded-t-2xl bg-black'>
                        <h3 className='text-center absolute font-bold left-11 top-6'>Your Story</h3>
                        <div className='w-9 h-9 border border-slate-900 absolute left-16 top-[-20px] rounded-[36px] bg-blue-600 text-center'>
                            <span className='absolute top- right-2 text-2xl'>+</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-stone-400 relative w-40 h-52 flex items-center justify-center rounded-lg ml-4'>
                <img className='w-40 h-32 absolute top-[40px]' src={storyImage} alt="" />
                <img className='w-11 h-11 absolute top-[10px] right-[10px]' src={storyLogo} alt="" />
                <h3 className='absolute top-44'>Adnan chowdhury</h3>
            </div>
        </section >
    );
};

export default YourStory;