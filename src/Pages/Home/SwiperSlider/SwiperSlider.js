import React from 'react';


const SwiperSlider = ({ products }) => {

    console.log(products);
    return (
        <div>
            {
                products.map((product, i) => (
                    <div key={product._id}>

                    </div>
                ))
            }

        </div>
    );
};

export default SwiperSlider;