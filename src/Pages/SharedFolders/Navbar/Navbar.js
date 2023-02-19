import React from 'react';
import { Link } from 'react-router-dom';
import searchLogo from '../../../Assets/Icons/SearchLogo.png';
import filter from '../../../Assets/Icons/Filter.png';
import email from '../../../Assets/Icons/Eamil.png';
import bell from '../../../Assets/Icons/Bell.png';
import user from '../../../Assets/Icons/User.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="grid grid-cols-1 text-center">
                <h1><Link to='/' className="btn btn-ghost normal-case text-3xl">Headphone</Link></h1>
                <p>For the top band</p>
            </div>
            <div className="flex-none gap-2">
                <div className="group w-72 md:w-80 lg:w-96">

                    {/* Search Bar */}
                    <div className="relative flex items-center">
                        <input id="5" type="text" placeholder='Search Product' className="peer text-center relative h-10 w-full rounded-md bg-gray-50 pl-4 pr-10 font-thin outline-none drop-shadow-sm transition-all duration-200 ease-in-out focus:bg-white focus:ring-2 " />
                        <span className="material-symbols-outlined absolute left-2 transition-all duration-200 ease-in-out"><img className='w-[28px] ' src={searchLogo} alt="" /></span>
                        <span className="material-symbols-outlined absolute right-2 transition-all duration-200 ease-in-out"><img className='w-[28px] ' src={filter} alt="" /></span>
                    </div>
                </div>


                <div className="flex gap-2">
                    <div className="w-[37px] h-[37px] bg-[#53e453] ">
                        <img className='mx-auto' src={email} alt='' />
                    </div>
                    <div className="w-[37px] h-[37px] bg-[#53e453] ">
                        <img className='mx-auto' src={bell} alt='' />
                    </div>
                    <div className="w-[37px] h-[37px] bg-[#53e453] ">
                        <img className='mx-auto' src={user} alt='' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;