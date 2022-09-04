import { faAdjust, faFaceSmile, faPhotoVideo, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import userLogo from '../images/user.png'

const CreatePost = () => {
    return (
        <section className='bg-white rounded-lg shadow-sm'>
            <div className=' relative p-3 mt-5  shadow-sm flex items-center '>
                <img className='w-12 h-12 mr-4' src={userLogo} alt="" />
                <div class="form-control relative mt-5">
                    <span className='absolute lg:top-2 sm:top-2 sm:left-3'><FontAwesomeIcon className='text-gray-400' icon={faSearch}></FontAwesomeIcon></span>
                    <input type="text" placeholder="" class="p-1 mb-5 lg:px-36 sm:ml-0 border rounded-full text-gray-500 lg:w-full md:w-full sm:w-44 bg-slate-100" />
                </div>
            </div>
            <div className='h-[2px] w-[460px] ml-5 bg-slate-300'></div>
            <div className='bg-white text-black relative p-3 shadow-sm flex items-center '>
                <div className='w-90 mx-auto'>
                    <FontAwesomeIcon icon={faAdjust}></FontAwesomeIcon>
                    <span className='ml-2 mr-4 font-semibold'>Background</span>
                    <FontAwesomeIcon icon={faPhotoVideo}></FontAwesomeIcon>
                    <span className='ml-2 mr-4 font-semibold'>Photo/Video</span>
                    <FontAwesomeIcon icon={faFaceSmile}></FontAwesomeIcon>
                    <span className='ml-2 mr-4 font-semibold'>Feelings/Activity</span>
                </div>
            </div>

            <div className='h-[16px] w-full bg-accent'></div>
            <div className='bg-white text-black relative rounded-lg  shadow-sm flex items-center '>
                <span className='font-semibold text-error ml-6'> Public Post</span>
                <span className='font-semibold m-6'> Friend Post</span>
            </div>
        </section>
    );
};

export default CreatePost;