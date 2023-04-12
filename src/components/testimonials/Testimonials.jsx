import React from 'react'
import './testimonials.css'
import AVTR1 from '../../images/avatar1.jpg'
import AVTR2 from '../../images/avatar2.jpg'
import AVTR3 from '../../images/avatar3.jpg'
import AVTR4 from '../../images/avatar4.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';


const data = [
    {
        avatar: AVTR1,
        name: 'Tina Snow',
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quam, explicabo qui cupiditate recusandae in minima quo culpa facilis alias quae ab dicta voluptatibus? Pariatur ratione velit praesentium nam architecto."
    },
    {
        avatar: AVTR2,
        name: 'Shatta Wale',
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quam, explicabo qui cupiditate recusandae in minima quo culpa facilis alias quae ab dicta voluptatibus? Pariatur ratione velit praesentium nam architecto."
    },
    {
        avatar: AVTR3,
        name: 'Kwame Despite',
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quam, explicabo qui cupiditate recusandae in minima quo culpa facilis alias quae ab dicta voluptatibus? Pariatur ratione velit praesentium nam architecto."
    },
    {
        avatar: AVTR4,
        name: 'John snow',
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est quam, explicabo qui cupiditate recusandae in minima quo culpa facilis alias quae ab dicta voluptatibus? Pariatur ratione velit praesentium nam architecto."
    }
]


export default function Testimonials() {
    return (
        <section id='testimonials'>
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>
            <div className='testimonial_sec'>
                <Swiper className='container testimonial_cnt'
                    // modules={[Pagination, Navigation]}
                    modules={[Pagination]}
                    spaceBetween={40}
                    slidesPerView={1}
                    // navigation
                    autoplay={{ delay: 1000 }}
                    pagination={{ clickable: true }}>
                    {/* scrollbar={{ draggable: true }} */}
                    {/* onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')} */}
                    {
                        data.map(({ avatar, name, review }, index) => {
                            return (
                                <SwiperSlide key={index} className='testimonial'>
                                    <div className='client_avatar'>
                                        <img src={avatar} alt='avatar' />
                                    </div>
                                    <h5 className='client_name'>{name}</h5>
                                    <small className='client_review'>{review}</small>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </section>
    )
}
