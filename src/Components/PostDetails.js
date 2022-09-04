import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgOne from '../images/posterImage/image_1.jpg';
import imgTwo from '../images/posterImage/image_2.jpg';
import imgThree from '../images/posterImage/image_3.jpg';
import imgFour from '../images/posterImage/image_4.jpg';
import imgFive from '../images/posterImage/image_5.jpg';
import imgSix from '../images/posterImage/image_6.jpg';
import imgSeven from '../images/posterImage/image_7.jpg';
import imgEight from '../images/posterImage/image_8.jpg';
import React from 'react';

const PostDetails = ({ id }) => {
    return (
        <section className='bg-white text-black '>


            {/*------------------- section __one ------------------*/}


            {id === 1 && <section className='p-3'>
                <h1>your favourite game</h1>
                <div className='flex items-center mt-5 mb-5 '>
                    <input className='h-5 w-8' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" checked />
                    <div className='bg-gray-100 p-2 w-72 rounded-md'>
                        <span>Added by you</span><br />
                        <span className='text-xl'>Football</span>
                    </div>
                    <div className='ml-3'>
                        <div class="avatar placeholder ml-5">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-8">
                                <span class="text-xs">AA</span>
                            </div>
                        </div>
                        <h2 className='ml-2'>1 Vote</h2>
                    </div>
                    <div className='ml-16'>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </div>
                </div>
                <div className='flex items-center mt-5 mb-5'>
                    <input className='h-5 w-8' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <div className='bg-gray-100 p-2 w-72 rounded-md'>
                        <span>Added by you</span><br />
                        <span className='text-xl'>Cricket</span>
                    </div>
                    <div className='ml-32'>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </div>
                </div>
                <div className='flex items-center mt-5 mb-5'>
                    <input className='h-5 w-8' type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                    <div className='bg-gray-100 p-2 w-72 rounded-md'>
                        <span>Added by you</span><br />
                        <span className='text-xl'>Badminton</span>
                    </div>
                    <div className='ml-32'>
                        <FontAwesomeIcon icon={faCircleXmark}></FontAwesomeIcon>
                    </div>
                </div>

            </section>}




            {/*------------------- section __two ------------------*/}

            {
                id === 2 && <section className='pr-2'>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: '50% 50%',
                        gap: '5px',

                    }}>
                        <img className='' src={imgOne} alt="" />
                        <img className='' src={imgTwo} alt="" />
                    </div>
                    <div className='mt-2' style={{
                        display: "grid",
                        gridTemplateColumns: '33% 33% 33%',
                        gap: '5px'
                    }}>
                        <img src={imgThree} alt="" />
                        <img src={imgFour} alt="" />
                        <img className='relative' src={imgFive} alt="" />
                    </div>
                    <div style={{ height: "110px", width: "157px", opacity: 0.5 }} className='bg-blue-100 flex justify-center items-center absolute right-[281px] lg:top-[2030px] sm:right-[28  0px] '>
                        <h2 className='font-bold text-xl text-blue-800'>+1</h2>
                    </div>
                </section>
            }


            {/*------------------- section __three ------------------*/}


            {
                id === 3 && <section>
                    <div>
                        <img className='w-full' src={imgSix} alt="" />
                    </div>
                </section>
            }

            {/*------------------- section __three ------------------*/}


            {
                id === 4 && <section >
                    <h2 className='font-semibold p-4'>Hi everyone</h2>
                </section>
            }

            {/*------------------- section __five ------------------*/}


            {
                id === 5 && <section>
                    <p className='font-semibold p-4'>
                        Since im detoxing and my head is becoming clearer, it's time for me to dive into this book!. It's a self-reflective book!. You write into it with all honesty about yourself and the people around you and the ways you cloud chage or help certain sitations!. It's a book of self-control or discipline!. I highly recomended. 💪💪
                    </p>
                    <img className='w-full' src={imgSeven} alt="" />
                </section>
            }


            {/*------------------- section __six ------------------*/}


            {
                id === 6 && <section>

                    <img className='w-full h-96' src={imgEight} alt="" />
                </section>
            }

            {/*------------------- section __seven ------------------*/}



            {
                id === 7 && <section>
                    <p className='font-semibold p-4'>
                        Stop confusing temporary happiness for long-team connections!!. There are some people come into your life that is just there for the moments.Not everyone deserve your inside story or all of your commitment and loyality and not everyone is meant to be placed in first, some are literally in your life just for good vibes on a channel to heal through! #LearnYourPlace in peoples life and place people where they should be in yours and don't force anything extra!!💯💓🤞
                    </p>


                </section>
            }
            {/*------------------- section __eight ------------------*/}



            {
                id === 8 && <section>
                    <p className='font-semibold p-4'>

                        Without trust in a relationship, is there even a relationship?
                    </p>

                </section>
            }


            {/*------------------- section __nine ------------------*/}



            {
                id === 9 && <section>
                    <p className='font-semibold p-4'>
                        The fact we are letting love die sickens me!!😔
                    </p>



                </section>
            }


            {/*------------------- section __ten ------------------*/}



            {
                id === 10 && <section>

                    <p className='font-semibold p-4'>
                        I never seeked validation so your opinion of my opinion is something really could've kept to yourself!!🤷‍♂‍
                    </p>

                </section>
            }



            {/*------------------- section __eleven ------------------*/}


            {
                id === 11 && <section>


                    <div className='w-full h-72 p-5 text-white flex items-center' style={{
                        background: "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)"
                    }}>
                        <h2 className='text-3xl font-bold'>Click your home icon to refresh feed</h2>
                    </div>

                </section>
            }

            {/*------------------- section __twelve ------------------*/}


            {
                id === 12 && <section>
                    <p className='font-semibold p-4'>
                        jhe‍
                    </p>
                </section>
            }


            {/*------------------- section __thirteen ------------------*/}


            {
                id === 13 && <section>
                    <p className='font-semibold p-4'>
                        #Grandrising 👮&👮‍♀‍!! Remember it is not a "mistake" for someone to treat you in a way they wouldn't want to be threated!. If they cared about you enough that action would've never even crossed their minds!!.🤞💯
                    </p>
                </section>
            }

            {/*------------------- section __fourteen ------------------*/}


            {
                id === 14 && <section>
                    <p className='font-semibold p-4'>
                        hello
                    </p>
                </section>
            }

        </section>
    );
};

export default PostDetails;