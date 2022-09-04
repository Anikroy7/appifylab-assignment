import { faAngry, faFaceFlushed, faFaceLaugh, faHeart, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const ReactionCount = ({ id }) => {
    const reaction = () => {
        switch (id) {
            case 1:
                return <p className='text-right px-5 mb-2'>1 comment</p>
            case 2:
                return <p className='p-5'>
                    <FontAwesomeIcon className='text-error font-bold' icon={faHeart}></FontAwesomeIcon>
                    <span className='ml-2 font-bold'>You</span>
                </p>
            case 3:
                return <p className='p-5'>
                    <FontAwesomeIcon className='text-blue-500 font-bold' icon={faThumbsUp}></FontAwesomeIcon>
                    <span className='ml-2 font-bold'>3</span>
                </p>
            case 4:
                return <div className='p-5 flex justify-between'>
                    <p><FontAwesomeIcon className='text-blue-500 font-bold' icon={faThumbsUp}></FontAwesomeIcon> <FontAwesomeIcon className='text-error font-bold ml-[-10px]' icon={faHeart}></FontAwesomeIcon>
                        <span className='ml-3 font-bold'>6</span></p>
                    <p className='px-5 mb-2'>1 comment</p>
                </div>
            case 5:
                return <div className='p-5 flex justify-between'>
                    <p><FontAwesomeIcon className='text-blue-500 font-bold' icon={faThumbsUp}></FontAwesomeIcon> <FontAwesomeIcon className='text-error font-bold ml-[-10px]' icon={faHeart}></FontAwesomeIcon> <FontAwesomeIcon className='text-orange-500 font-bold ml-[-10px]' icon={faAngry}></FontAwesomeIcon>
                        <span className='ml-3 font-bold underline'>You and 2 Others</span></p>
                </div>
            case 6:
                return <div className='p-5 flex justify-between'>
                    <p><FontAwesomeIcon className='text-blue-500 font-bold' icon={faThumbsUp}></FontAwesomeIcon> <FontAwesomeIcon className='text-error font-bold ml-[-10px]' icon={faHeart}></FontAwesomeIcon>
                        <span className='ml-3 font-bold underline'>You and 1 Others</span></p>
                    <p className='px-5 mb-2'>1 comment</p>
                </div>
            case 7:
                return <div className='p-5 flex justify-between'>
                    <p><FontAwesomeIcon className='text-blue-500 font-bold' icon={faThumbsUp}></FontAwesomeIcon> <FontAwesomeIcon className='text-yellow-300 font-bold ml-[-10px]' icon={faFaceFlushed}></FontAwesomeIcon> <FontAwesomeIcon className='text-error font-bold ml-[-10px]' icon={faHeart}></FontAwesomeIcon>
                        <span className='ml-3 font-bold'>9</span></p>

                </div>
            case 8:
                return <div className='p-5 flex justify-between'>
                    <p><FontAwesomeIcon className='text-blue-500 font-bold' icon={faThumbsUp}></FontAwesomeIcon>
                        <span className='ml-3 font-bold'>3</span></p>
                    <p className='px-5 mb-2'>3 comment</p>
                </div>
            case 9:
                return <div className='p-5 flex justify-between'>
                    <p><FontAwesomeIcon className='text-blue-500 font-bold' icon={faThumbsUp}></FontAwesomeIcon>
                        <span className='ml-3 font-bold'>2</span></p>

                </div>
            case 10:
                return <p className='p-5'>
                    <FontAwesomeIcon className='text-blue-500 font-bold' icon={faThumbsUp}></FontAwesomeIcon> <FontAwesomeIcon className='text-error font-bold ml-[-10px]' icon={faHeart}></FontAwesomeIcon>
                    <span className='ml-2 font-bold'>3</span>
                </p>
            case 11:
                return <div className='p-5 flex justify-between'>
                    <p><FontAwesomeIcon className='text-blue-500 font-bold' icon={faThumbsUp}></FontAwesomeIcon> <FontAwesomeIcon className='text-yellow-600 font-bold ml-[-10px]' icon={faFaceLaugh}></FontAwesomeIcon>
                        <span className='ml-3 font-bold'>3</span></p>
                    <p className='px-5 mb-2'>3 comment</p>

                </div>
            case 12:
                return <div className='p-5 flex justify-between'>
                    <p><FontAwesomeIcon className='text-yellow-600 font-bold ' icon={faFaceLaugh}></FontAwesomeIcon> <FontAwesomeIcon className='text-blue-500 font-bold ml-[-10px]' icon={faThumbsUp}></FontAwesomeIcon>
                        <span className='ml-3 font-bold'>2</span></p>
                    <p className='px-5 mb-2'>1 comment</p>

                </div>
            case 13:
                return <div className='p-5 flex justify-between'>
                    <p> <FontAwesomeIcon className='text-error font-bold' icon={faHeart}></FontAwesomeIcon> <FontAwesomeIcon className='text-blue-500 font-bold  ml-[-10px]' icon={faThumbsUp}></FontAwesomeIcon> <FontAwesomeIcon className='text-yellow-300 font-bold ml-[-10px]' icon={faFaceFlushed}></FontAwesomeIcon>
                        <span className='ml-3 font-bold'>6</span></p>

                </div>
            case 14:
                return <div className='p-5 flex justify-between'>
                    <p> <FontAwesomeIcon className='text-blue-500 font-bold' icon={faThumbsUp}></FontAwesomeIcon>
                        <span className='ml-3 font-bold'>2</span></p>
                    <p className='px-5 mb-2'>2 comment</p>

                </div>
            default:
                // code block
                return <></>
        }
    }
    return (
        <div>
            {reaction()}
        </div>
    );
};

export default ReactionCount;