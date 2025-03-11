import './CarouselSwiper.scss'
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, EffectCoverflow, Pagination} from "swiper/modules";

export const CarouselSwiper = ({clubEvents, title}) => {
  return (
    <div className={'swiper-container'}>
      <h1>{title}</h1>

      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {clubEvents.map(item => (
          <SwiperSlide>
            <img src={item.imageUrl} alt={item.name}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default CarouselSwiper;
