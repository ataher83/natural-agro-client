// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
      <div className='container mx-auto '>
        <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide><img className='w-full h-96' src="https://i.postimg.cc/tTYYTc1m/14.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-96' src="https://i.postimg.cc/pXqgFmmX/15.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-96' src="https://i.postimg.cc/0QY42jgv/19.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className='w-full h-96' src="https://i.postimg.cc/85Q3SW0w/20.jpg" alt="" /></SwiperSlide>
        </Swiper>
      </div>
    );
};

export default Banner;