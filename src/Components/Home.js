import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faUser, faUserGroup, faPager, faCalendar, faSearch } from '@fortawesome/free-solid-svg-icons';
import googleAndApple from '../images/download.png'
import YourStory from './YourStory';
import CreatePost from './CreatePost';
import PosterInfo from './PosterInfo';
import PostDetails from './PostDetails';



const Home = () => {
    return (
        <main style={{
            display: "grid",
            gridTemplateColumns: "25% 50% 25%",
            gap: '6px',


        }} className='bg-home mt-2 px-1 mr-3' >

            {/*---------------- left section ----------------*/}

            < section >

                {/*------------------- Explore Div ---------------------*/}

                < div className='bg-white px-5 p-3 rounded-lg shadow-sm' >
                    < h3 className='font-bold' > Explore</ h3>
                    <div className='flex mt-5 mb-4'>
                        <span className='mr-3 font-semibold'><FontAwesomeIcon icon={faSave} /></span>
                        <span>Saved Posts</span>
                    </div>
                    <div className='flex mt-5 mb-4'>
                        <span className='mr-3 font-semibold'><FontAwesomeIcon icon={faUser} /></span>
                        <span>People</span>
                    </div>
                    <div className='flex mt-5 mb-4'>
                        <span className='mr-2 font-semibold'><FontAwesomeIcon icon={faUserGroup} /></span>
                        <span>Groups</span>
                    </div>
                    <div className='flex mt-5 mb-4'>
                        <span className='mr-3 font-semibold'><FontAwesomeIcon icon={faPager} /></span>
                        <span>Pages</span>
                    </div>
                    <div className='flex mt-5 mb-4'>
                        <span className='mr-3 font-semibold'><FontAwesomeIcon icon={faCalendar} /></span>
                        <span>Events</span>
                    </div>
                </ div >

                {/* --------------------------------Download app div------------------------ */}

                <div className='bg-white relative px-5  mt-4 rounded-lg shadow-sm' >
                    <h2 className='font-bold absolute lg:top-5  sm:top-1'>Download App</h2>
                    <div className='lg:flex'>
                        <img src={googleAndApple} alt="" />
                    </div>

                </div >

                {/*-------------------------- Suggested people---------------------------- */}

                <div className='bg-white relative p-3 sm:order-3 px-5 mt-4 rounded-lg shadow-sm' >
                    <h2 className='font-bold'>Suggested people</h2>
                    <div className='lg:flex items-center mt-3'>
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <span>MX</span>
                            </div>
                        </div>
                        <h2 className='font-bold lg:ml-2'>Sadek Hossain</h2>
                        <button class="btn btn-outline btn-xs">Add +</button>
                    </div>

                </div >

            </section >



            <section className=' text-white m-2'>
                <YourStory></YourStory>
                <CreatePost></CreatePost>
                <PosterInfo></PosterInfo>


            </section>

            {/*---------------- Right Section -----------------*/}

            <section>

                {/*------------ You Might Like ---------*/}

                <div className='bg-white relative p-5 py-8  rounded-lg shadow-sm'>
                    <h2 className='font-bold text-xl'>You Might Like</h2>
                    <div className='lg:flex items-center mt-6'>
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <span>MX</span>
                            </div>
                        </div>
                        <h2 className='font-bold lg:ml-2'>
                            <span>Sadia</span><br />
                            <span>user</span>
                        </h2>
                    </div>
                    <div className='mt-6'>
                        <button className='border border-slate-200 mr-5 sm:mb-4 btn-outline rounded-md px-5 p-2 font-bold'>Ignore</button>
                        <button className='btn-error rounded-md px-5 p-2 text-white font-bold' >Follow</button>
                    </div>
                </div>

                <div className='bg-white relative p-5 py-8 mt-4 rounded-lg shadow-sm'>
                    <h2 className='font-bold text-xl'>Your Friends</h2>
                    <div class="form-control relative mt-5">
                        <span className='absolute lg:top-2 sm:top-2 sm:left-3'><FontAwesomeIcon className='text-gray-400' icon={faSearch}></FontAwesomeIcon></span>
                        <input type="text" placeholder="" class="p-1 px-10 sm:ml-0 border rounded-full text-gray-500 lg:w-full md:w-full sm:w-44 bg-slate-100" />
                    </div>
                    <div className='lg:flex items-center mt-5'>
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <span>MX</span>
                            </div>
                        </div>
                        <h2 className='font-bold lg:ml-2'>Admin</h2>
                    </div>
                    <div className='lg:flex items-center mt-5'>
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <span>MX</span>
                            </div>
                        </div>
                        <h2 className='font-bold lg:ml-2'>Kazi Musharrar Shishir</h2>
                    </div>
                </div>
            </section>
        </main >
    );
};

export default Home;