import './imagesSlider.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ImagesSlider = () => {
    const imagesArr = [
      "https://scontent.fevn9-1.fna.fbcdn.net/v/t39.30808-6/325609470_510956964469681_7651072959295625087_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=2qN-oacnWQkAX-sC5b7&_nc_ht=scontent.fevn9-1.fna&oh=00_AfD3NJegwZMKTdb7gRIYPPH4CnF16erOGpuAb24nF_bmjQ&oe=65E57CAA",
      "https://scontent.fevn9-1.fna.fbcdn.net/v/t39.30808-6/325588853_1613814892399625_5490278931059284768_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=IKypy2en9LAAX84DxRP&_nc_ht=scontent.fevn9-1.fna&oh=00_AfBtwX1z_333cMC5YplWMdzTldR78sqVaIDt2P2w9JgnJg&oe=65E64F13",
      "https://scontent.fevn9-1.fna.fbcdn.net/v/t39.30808-6/312854212_525403176266042_8821968554750688835_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=O_IY5jo82bAAX_Kf-QW&_nc_ht=scontent.fevn9-1.fna&oh=00_AfCWNHqqQUFTABGHu1C0GFcpm_760XBmE8f240Wj-1PSWw&oe=65E5A372",
      "https://scontent.fevn9-1.fna.fbcdn.net/v/t39.30808-6/312823288_525403159599377_3693668841535388560_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=uALJ-YZEt44AX-D7wx7&_nc_ht=scontent.fevn9-1.fna&oh=00_AfAui1gzhqFaAnR0xyDe0oyA868vNq0VXxl7Bb7zwNg3MQ&oe=65E4DFAD"
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