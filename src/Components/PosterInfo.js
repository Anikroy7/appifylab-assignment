import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

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
                posterInfo.map(pf => <div className='bg-white p-3 text-black relative rounded-lg shadow-sm flex justify-between mt-5'>
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
                            {pf.otherInfo && pf.name === 'Adnan Chowdhury' && <div class="p-2 bg-base-100">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </div>}

                        </li>
                    </ul>
                </div>)
            }
        </section>
    );
};

export default PosterInfo;