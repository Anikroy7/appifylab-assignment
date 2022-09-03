import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgOne from '../images/posterImage/image_1.jpg'
import imgTwo from '../images/posterImage/image_2.jpg'
import imgThree from '../images/posterImage/image_3.jpg'
import imgFour from '../images/posterImage/image_4.jpg'
import imgFive from '../images/posterImage/image_5.jpg'
import React from 'react';

const PostDetails = ({ id }) => {
    return (
        <section className='bg-white text-black p-3'>



            {/*------------------- section __one ------------------*/}


            {id === 1 && <section>
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
                id === 2 && <section>
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: '50% 50%',
                        gap: '5px'
                    }}>
                        <img src={imgOne} alt="" />
                        <img src={imgTwo} alt="" />
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
                    <div style={{ height: "108px", width: "157px", opacity: 0.5 }} className='bg-blue-100 flex justify-center items-center absolute right-[282px] top-[1283px]'>
                        <h2 className='font-bold text-xl text-blue-800'>+1</h2>
                    </div>
                </section>
            }

        </section>
    );
};

export default PostDetails;