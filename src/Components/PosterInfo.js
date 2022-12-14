import { faDeleteLeft, faEdit, faFlag, faGlobe, faSave, faTablet, faTabletAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import LikeShareComment from './LikeShareComment';
import PostDetails from './PostDetails';


const PosterInfo = () => {

    const [posterInfo, setPosterInfo] = useState([]);

    useEffect(() => {

        fetch('posterInfo.json')
            .then(res => res.json())
            .then(data => setPosterInfo(data))

    }, [])

    console.log(posterInfo);
    return (
        <section>
            {
                posterInfo.map(pf => <div key={pf.id} className='bg-white  text-black  rounded-lg'>
                    <div className='p-3 relative flex justify-between mt-5'>

                        <div className='flex'>
                            <div class="avatar placeholder mr-4">
                                <div class="bg-neutral-focus text-neutral-content rounded-full h-12 w-12">
                                    <span>MX</span>
                                </div>
                            </div>
                            <div>
                                <p className='mb-2 font-semibold'>
                                    <span>{pf.name}</span>
                                    {pf.otherInfo && <span> {pf.otherInfo}</span>}
                                </p>
                                <span className='text-gray-500'>{pf.time} ago <FontAwesomeIcon className='mt-1 ml-2' icon={faGlobe}></FontAwesomeIcon></span>
                            </div>
                        </div>
                        <ul class="p-0">

                            <li tabindex="">
                                <a >

                                    <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                                </a>
                                {pf.otherInfo && pf.name === 'Adnan Chowdhury' && <div className='bg-white  h-56 z-10 w-52 absolute top-14 right-3 text-black rounded-lg  shadow-slate-500 shadow-2xl p-5'>
                                    <div className='mb-3'>
                                        <FontAwesomeIcon icon={faSave}></FontAwesomeIcon>
                                        <span className='ml-4 font-semibold'>Save post</span>
                                    </div>
                                    <div className='mb-3'>
                                        <FontAwesomeIcon icon={faFlag}></FontAwesomeIcon>
                                        <span className='ml-4 font-semibold'>Report post</span>
                                    </div>
                                    <div className='mb-3'>
                                        <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>
                                        <span className='ml-4 font-semibold'>Edit post</span>
                                    </div>
                                    <div className='mb-3'>
                                        <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
                                        <span className='ml-4 font-semibold'>Detele post</span>
                                    </div>
                                    <hr />
                                    <div className='mb-3'>
                                        <FontAwesomeIcon icon={faTabletAlt}></FontAwesomeIcon>
                                        <span className='ml-4 font-semibold'>Open post in new tab</span>
                                    </div>

                                </div>}

                            </li>
                        </ul>
                    </div>

                    {/*------------ Post details section -----------------*/}
                    <PostDetails
                        key={pf.id}
                        id={pf.id}
                    ></PostDetails>

                    {/*------------------- Like, comment, and share section ----------------*/}
                    <LikeShareComment
                        key={pf.id}
                        id={pf.id}
                    ></LikeShareComment>
                </div >)
            }
        </section >
    );
};

export default PosterInfo;