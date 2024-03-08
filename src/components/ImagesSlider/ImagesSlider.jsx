import './imagesSlider.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ImagesSlider = () => {
    const imagesArr = [
      "https://scontent.fevn1-3.fna.fbcdn.net/v/t39.30808-6/325588853_1613814892399625_5490278931059284768_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=NGZvrGaA4WAAX8nKZbw&_nc_ht=scontent.fevn1-3.fna&oh=00_AfDbxoaOS4--0brNdk7nLWD1mlvMKnep-LpOU_1eKxNkpg&oe=65EC3DD3",
      "https://scontent.fevn1-3.fna.fbcdn.net/v/t39.30808-6/325609470_510956964469681_7651072959295625087_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=hvTSAtdSrv8AX8NWnzD&_nc_ht=scontent.fevn1-3.fna&oh=00_AfATTgbhhYV1UJypH-AiTcFFu9Sc1ZlToVRIuwjuPydjvA&oe=65EB6B6A",
      "https://scontent.fevn1-1.fna.fbcdn.net/v/t39.30808-6/312823288_525403159599377_3693668841535388560_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=vYjUYjtMyZ0AX-z72Ox&_nc_ht=scontent.fevn1-1.fna&oh=00_AfCRQdidwksOZSCkW3rrUhpSeKgtrzDNhrwr3Nk4CVa23w&oe=65ECC8AD"
    ]
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <section>
            <div className="container">
                <div className="secSliderImages">
                    <h6>անցած ուղին</h6>
                    
                    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        {
          imagesArr.map((el, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img src={el}/>
              </SwiperSlide>
            )
          })
        }
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
                </div>
            </div>
        </section>
    )
}

export default ImagesSlider;