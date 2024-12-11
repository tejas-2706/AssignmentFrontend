import wave from '../assets/wave.svg'
import meeting from '../assets/meeting.png'
// export const NavBar = () => {
//     return (
//         <div>
//             <div className="">
//                 <img src={wave} alt="" />
//             </div>
//         </div>
//     )
// }

import React from "react";

export const NavBar = () => {
    return (
        <div>
            <section className="bg-gradient-to-r from-blue-400 to-blue-500 text-white relative">
                <div className='flex p-4 px-16 justify-between items-center'>
                    <div>
                        Upraiser
                    </div>
                    <div className='flex list-none gap-4'>
                        <li>Products</li>
                        <li>OKR</li>
                        <li>Resources</li>
                        <li>Pricing</li>
                        <li>Support</li>
                    </div>
                    <div className='border p-1'>
                        <button>Free Trial</button>
                    </div>
                </div>

                <div className='grid grid-cols-2 px-20'>
                <div className="container mx-auto py-16">
                    <h1 className="text-4xl font-bold">Don't just solve issues</h1>
                    <p className="text-sm mt-4 flex-wrap">Modern products to manage employee performance &
                        streamline popies management in jira
                    </p>
                    {/* Buttons */}
                    <div className='flex mt-8 gap-4'>
                    <button className='text-lg bg-green-500 p-2' >Book a free demo</button>
                    <button className='text-lg bg-yellow-500 p-2' >Attension marketplace</button>
                    </div>
                </div>
                <div>
                    <img className='opacity-65 rounded-2xl' src={meeting} alt="" />
                </div>
                </div>

                {/* <img src={wave} alt="" /> */}
                <div className="absolute bottom- w-full">
                    <img
                        src={wave}
                        alt="Wave"
                        className="w-full h-auto"
                    />
                </div>
            </section>
        </div>
    );
};
