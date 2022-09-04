import { faGift, faPaperclip, faPaperPlane, faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../images/user.png'
import ReactionCount from './ReactionCount';
import ReactionField from './ReactionField';
const LikeShareComment = ({ id }) => {
    return (
        <section>



            {/*------------ user Reaction count  --------------*/}

            <ReactionCount
                key={id}
                id={id}
            ></ReactionCount>


            {/*------------- user reaction ------------------*/}

            <ReactionField
                key={id}
                id={id}
            ></ReactionField>


            {/*----------------------- For Comment -------------------------*/}

            <div className='bg-white text-black relative rounded-lg justify-evenly shadow-sm flex items-center '>
                <img className='w-10 h-10 mr-4' src={logo} alt="" />
                <div>
                    <span className='ml-2'><FontAwesomeIcon icon={faSmile}></FontAwesomeIcon></span>
                    <span className='ml-2'><FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon></span>
                    <span className='ml-2'><FontAwesomeIcon icon={faGift}></FontAwesomeIcon></span>
                </div>
                <div class="form-control relative mt-5">
                    <span className='absolute lg:top- lg:left-72 sm:top-2 sm:left-3'><FontAwesomeIcon className='text-gray-400' icon={faPaperPlane}></FontAwesomeIcon></span>
                    <input type="text" placeholder="" class="p-1 mb-5 lg:px-16 sm:ml-0 border rounded-full text-gray-500 lg:w-full md:w-full sm:w-44 bg-slate-100" />
                </div>
            </div>
        </section>
    );
};

export default LikeShareComment;