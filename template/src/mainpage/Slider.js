import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import '../styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

export default function App() {

      
    return (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={60}
                loop={true}

                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                // className="mySwiper"
                breakpoints={{
                    320: {
                      slidesPerView: 1,
                      spaceBetween: 60,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 70,
                     
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 60,
                    },
                  }}
            >
                <SwiperSlide className='md:w-1/2'>
                    <div class="card">
                        <div class="card-image">
                            <img src="burun.png" alt="Card Image" />
                        </div>
                        <div class="card-content">
                            <h2 class="card-title">Burun Estetiği</h2>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card">
                        <div class="card-image">
                            <img src="yuz.png" alt="Card Image" />
                        </div>
                        <div class="card-content">
                            <h2 class="card-title">Yüz Germe</h2>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card">
                        <div class="card-image">
                            <img src="goz.png" alt="Card Image" />
                        </div>
                        <div class="card-content">
                            <h2 class="card-title">Göz Estetiği</h2>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="card">
                        <div class="card-image">
                            <img src="kas.png" alt="Card Image" />
                        </div>
                        <div class="card-content">
                            <h2 class="card-title">Kaş Estetiği</h2>
                            <p class="card-text">Lorem Ipsum is simply dummy text of the printing and</p>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
