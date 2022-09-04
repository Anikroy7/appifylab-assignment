import { faAngry, faHeart, faMessage, faShare, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const ReactionField = ({ id }) => {




    function userReaction() {

        if (id === 2) {
            return <>
                <span className='mr-3 text-error'><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></span>
                <span className='font-bold text-error'>Love</span>
            </>
        }
        else if (id === 5) {
            return <>
                <span className='mr-3 text-orange-600'><FontAwesomeIcon icon={faAngry}></FontAwesomeIcon></span>
                <span className='font-bold text-orange-600'>Angry</span>
            </>
        }
        else if (id === 6) {
            return <>
                <span className='mr-3 text-error'><FontAwesomeIcon icon={faHeart}></FontAwesomeIcon></span>
                <span className='font-bold text-error'>Love</span>
            </>
        }
        else {
            return <>
                <span className='mr-3'><FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon></span>
                <span>Like</span>
            </>
        }

    }


    return (
        <div className='mx-4 bg-gray-50 justify-evenly text-black relative w-auto p-3 shadow-sm flex items-center'>
            <div>
                {
                    userReaction()
                }
            </div>
            <div>
                <span className='mr-3'><FontAwesomeIcon icon={faMessage}></FontAwesomeIcon></span>
                <span>Comment</span>
            </div>
            <div>
                <span className='mr-3'><FontAwesomeIcon icon={faShare}></FontAwesomeIcon></span>
                <span>Share</span>
            </div>

        </div>
    );
};

export default ReactionField;