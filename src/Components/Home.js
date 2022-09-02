import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faUser, faUserGroup, faPager, faCalendar } from '@fortawesome/free-solid-svg-icons';
import googleAndApple from '../images/download.png'

const Home = () => {
    return (
        <main style={{
            display: "grid",
            gridTemplateColumns: "25% 50% 25%",
            gap: '6px'

        }} className='bg-home mt-2 px-1 mr-3'>
            <section className=''>

                {/*------------------- Explore Div ---------------------*/}

                <div className='bg-white  px-5 m-2 p-3 rounded-lg shadow-sm'>
                    <h3 className='font-bold'>Explore</h3>
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
                </div>

                {/* --------------------------------Download app div------------------------ */}

                <div className='bg-white relative px-5 m-2 mt-4 rounded-lg shadow-sm'>
                    <h2 className='font-bold absolute lg:top-5  sm:top-1'>Download App</h2>
                    <div className='lg:flex'>
                        <img src={googleAndApple} alt="" />
                    </div>

                </div>

                {/*-------------------------- Suggested people---------------------------- */}

                <div className='bg-white relative p-3 px-5 m-2 mt-4 rounded-lg shadow-sm'>
                    <h2 className='font-bold'>Suggested people</h2>
                    <div className='lg:flex items-center mt-3'>
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                                <span>MX</span>
                            </div>
                        </div>
                        <h2 className='font-bold ml-2'>Sadek Hossain</h2>
                        <button class="btn btn-outline btn-xs ">Add +</button>

                    </div>

                </div>

            </section>
            <section className='bg-red-500 text-white'>2</section>
            <section className='bg-green-600 text-white'>3</section>
        </main>
    );
};

export default Home;