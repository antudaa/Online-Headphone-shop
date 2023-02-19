import React, { useEffect, useState } from 'react';
import Navbar from '../SharedFolders/Navbar/Navbar';
import add from '../../Assets/Icons/BookIcon.png';
import SummerOffer from './SummerOffer/SummerOffer';
import SwiperSlider from './SwiperSlider/SwiperSlider';

const Home = () => {

    const [products, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://api.hiring.masterkey.tech/api/v1/product/get`)
            .then((res) => res.json())
            .then((data) => setProduct(data.products))
            .catch((err) => console.log(err.message))
    }, []);

    return (
        <div>
            <Navbar />
            <div className='flex gap-10'>
                <div className="card card-side w-[713px] h-[330px] shadow-xl">
                    <figure><img className='w-[417px] h-[254px]' src="https://drive.google.com/uc?export=view&id=1s-uCgFAM0dZCIldCOgb986Uf3ztD7ueV" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className="text-md font-bold">Beats Studio3 Wireless Headphone</h2>
                        <p>Ergonomic or cupe with on-oor controls up to 22 hours of tening time. Apple Wi crip & Closs </p>
                        <p className='text-sky-400'>Price $ 450.55</p>
                        <div className='flex gap-3 justify-evenly'>
                            <p>Color : </p>
                            <div className='flex gap-2 mr-48'>
                                <span className='bg-sky-400 rounded-[50%] p-2'></span>
                                <span className='bg-cyan-400 rounded-[50%] p-2'></span>
                                <span className='bg-purple-400 rounded-[50%] p-2'></span>
                                <span className='bg-indigo-400 rounded-[50%] p-2'></span>
                            </div>

                            <div className='flex p-2 '>
                                <button className=''>-</button>
                                <h1>1</h1>
                                <button className=''>+</button>
                            </div>
                        </div>
                        <div className="card-actions justify-between">
                            <button className="btn bg-white"><img src={add} alt="" /></button>
                            <button className="btn bg-white text-black hover:bg-white">Add to card</button>
                            <button className="btn bg-[#53e453]">Buy Now</button>
                        </div>
                    </div>
                </div>
                <SummerOffer />
            </div>
            <SwiperSlider products={products} />
        </div>
    );
};

export default Home;