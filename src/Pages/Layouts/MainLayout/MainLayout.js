import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// Importing Icons
import Home from '../../../Assets/Icons/Home.png';
import Explore from '../../../Assets/Icons/Explore.png';
import Cart from '../../../Assets/Icons/Cart.png';
import Saved from '../../../Assets/Icons/Saved.png';
import ContactUs from '../../../Assets/Icons/ContactUs.png';
import Selling from '../../../Assets/Icons/Selling.png';
import Profile from '../../../Assets/Icons/Profile.png';
import History from '../../../Assets/Icons/History.png';
import Setting from '../../../Assets/Icons/Setting.png';

// Logo
import SiteLogo from '../../../Assets/Icons/HeadphoneIcon.png';

// Need Help Logo
import NeedHelp from '../../../Assets/Icons/Need_Help_Logo.png';

import '../MainLayout.css'

const MainLayout = () => {
    return (
        <div>
            <div className="drawer drawer-mobile ">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                {/* Main Content Section  */}
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet />
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>

                {/* Side Navbar Links & Logo  */}
                <div className="drawer-side w-[271px] h-[1024px]">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <div className='flex pl-8 align-middle my-10'>
                        <img className='w-[40px] h-[40px]' src={SiteLogo} alt="Logo" />
                        <h1 className='text-2xl pl-[16px]'>MK Sounds</h1>
                    </div>
                    <ul className="menu p-4 bg-base-100 text-base-content">
                        <li><Link className='flex gap-8' to='/'> <img className='w-[25px] h-[25px]' src={Home} alt="" /> Home</Link></li>

                        <li><Link className='flex gap-8' to='/con'> <img className='w-[25px] h-[25px]' src={Explore} alt="" /> Explore</Link></li>

                        <li><Link className='flex gap-8' to='/'> <img className='w-[25px] h-[25px]' src={Saved} alt="" /> Saved</Link></li>

                        <li><Link className='flex gap-8' to='/'> <img className='w-[25px] h-[25px]' src={Cart} alt="" /> Cart</Link></li>

                        <li><Link className='flex gap-8' to='/'> <img className='w-[25px] h-[25px]' src={Selling} alt="" /> Selling</Link></li>

                        <li><Link className='flex gap-8' to='/'> <img className='w-[25px] h-[25px]' src={Profile} alt="" /> Profile</Link></li>

                        <li><Link className='flex gap-8' to='/'> <img className='w-[25px] h-[25px]' src={History} alt="" /> History</Link></li>

                        <li><Link className='flex gap-8' to='/contact'> <img className='w-[25px] h-[25px]' src={ContactUs} alt="" /> Contact us</Link></li>

                        <li><Link className='flex gap-8' to='/'> <img className='w-[25px] h-[25px]' src={Setting} alt="" /> Setting</Link></li>
                    </ul>
                    <div className="card card-compact rounded-sm mx-auto w-[236px] h-[229px] my-8 need-help">
                        
                        <div className="card-body text-center">
                            <h2 className="text-2xl">Need Help</h2>
                            <p className='text-md'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius cupiditate sed facilis, asperiores dolores at.</p>
                            <div className="card-actions justify-center">
                                <button className="btn border-nones bg-[#53e453]">Customer Service</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default MainLayout;