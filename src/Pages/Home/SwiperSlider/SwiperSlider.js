import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';


const SwiperSlider = ({ products }) => {

    console.log(products);
    return (
        <div>
            <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
            >
                {
                    products.map((product, i) => (
                        <div>
                            
                        </div>
                    ))
                }
            </Swiper>

        </div>
    );
};

export default SwiperSlider;