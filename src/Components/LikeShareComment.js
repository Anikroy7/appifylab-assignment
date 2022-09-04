import React from 'react';
import { faEllipsis, faGift, faPaperclip, faPaperPlane, faSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../images/user.png'
import meme from '../images/posterImage/meme.jpg'
import ReactionCount from './ReactionCount';
import ReactionField from './ReactionField';
const LikeShareComment = ({ id }) => {

    const mc = <p>view more comments</p>

    const mcLoader = () => {
        if (id === 6 || id === 8 || id === 11 || id === 12 || id === 14) {
            return mc;
        }
    }
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



            {/*------------------ view more comments --------------*/}
            <div className='p-4'>
                {
                    mcLoader()
                }
            </div>


            {/*----------------------- For Comment -------------------------*/}


            <div className='bg-white text-black relative rounded-lg justify-evenly shadow-sm flex items-center '>
                <img className='w-10 h-10 mr-4' src={logo} alt="" />
                <div>
                    <span className='ml-2'><FontAwesomeIcon icon={faSmile}></FontAwesomeIcon></span>
                    <span className='ml-2'><FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon></span>
                    <span className='ml-2'><FontAwesomeIcon icon={faGift}></FontAwesomeIcon></span>
                </div>
                <div class="form-control relative mt-5">
                    <span style={{ left: '288px' }} className='absolute '><FontAwesomeIcon className='text-gray-400' icon={faPaperPlane}></FontAwesomeIcon></span>
                    <input type="text" placeholder="" class="p-1 mb-5 lg:px-16 sm:ml-0 border rounded-full text-gray-500 lg:w-full md:w-full sm:w-44 bg-slate-100" />
                </div>
            </div>


            {/*--------------- first section reply section ------------------*/}



            {
                id === 1 && <>
                    <section className='mt-5 p-3' style={{
                        display: 'grid',
                        gridTemplateColumns: '15% 90%'

                    }}>


                        {/*------------- left section -----------*/}


                        <div className='p-3'>
                            <img className='w-10 h-10 mr-4' src={logo} alt="" />
                        </div>


                        {/*------------- right section ------------*/}
                        <div>
                            <div className='flex items-center'>
                                <div className='h-56 w-56'>
                                    <h2 className='text-[18px] p-3 bg-accent font-bold mb-2'>Adnan Chowdhury</h2>
                                    <img src={meme} alt="" />
                                </div>
                                <div className='ml-7'>
                                    <FontAwesomeIcon className='h-5' icon={faEllipsis}></FontAwesomeIcon>
                                </div>
                            </div>

                            <div className='mt-8'>
                                <span className='font-semibold ml-2'>Like</span>
                                <span className='font-semibold ml-4'>Reply</span>
                                <span className='font-semibold ml-2'>.</span>
                                <span className='font-semibold ml-2'>54 minutes ago</span>

                                <section className='mt-5 p-3' style={{
                                    display: 'grid',
                                    gridTemplateColumns: '15% 90%'

                                }}>


                                    {/*------------- left section -----------*/}


                                    <div>
                                        <img className='w-10 h-10 mr-4' src={logo} alt="" />
                                    </div>


                                    {/*------------- right section ------------*/}
                                    <div>
                                        <div className='flex items-center'>
                                            <div className='rounded-2xl h-24 w-44  bg-accent'>
                                                <h2 className='text-[16px] ml-2 font-bold p-1'>adnan Chowdhury</h2>
                                                <p className='ml-2'>hlo</p>

                                            </div>
                                            <div className='ml-7'>
                                                <FontAwesomeIcon className='h-5' icon={faEllipsis}></FontAwesomeIcon>
                                            </div>
                                        </div>

                                        <div className='mt-3'>
                                            <span className='font-semibold ml-2'>Like</span>
                                            <span className='font-semibold ml-2'>.</span>
                                            <span className='font-semibold ml-2'>1 second ago</span>

                                        </div>
                                    </div>
                                </section>

                            </div>
                            <div className='w-96'>
                                <div className='bg-white  text-black relative rounded-lg justify-evenly shadow-sm flex items-center sm:hidden'>
                                    <img className='w-10 h-10 mr-4' src={logo} alt="" />
                                    <div>
                                        <span className='ml-2'><FontAwesomeIcon icon={faSmile}></FontAwesomeIcon></span>
                                        <span className='ml-2'><FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon></span>
                                        <span className='ml-2'><FontAwesomeIcon icon={faGift}></FontAwesomeIcon></span>
                                    </div>
                                    <div class="form-control relative mt-5">
                                        <span style={{ left: '150px' }} className='absolute '><FontAwesomeIcon className='text-gray-400' icon={faPaperPlane}></FontAwesomeIcon></span>
                                        <input type="text" placeholder="" class="p-1 mb-5 sm:ml-0 border rounded-full text-gray-500 lg:w-full md:w-full  bg-slate-100" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

                </>
            }
        </section>
    );
};

export default LikeShareComment;