"use client"
import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import HeroImg from "../../../../../public/heroImage.jpg"
import HeroImg2 from '../../../../../public/images/heroImg2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination,  Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Hero = () => {

  const customPagination = {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
       
      <Swiper
      spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false,
        }}
        pagination={customPagination}
        modules={[Autoplay, Pagination, Navigation]}
        
    >
      <SwiperSlide>
      <div className="h-[50vh] md:h-[90vh] w-full relative">
        <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl font-semibold md:text-3xl-semi drop-shadow-md shadow-black">
          Explore Our Collection
        </h1>
        <p className="text-sm md:text-lg-regular max-w-[30ch] md:max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          Unlock the Canvas of Collection: Where Artistry Finds its Home!
        </p>
        <UnderlineLink href="/store">
          <p className="font-semibold">Explore products</p>
        </UnderlineLink>
      </div>
      <Image
        // src="https://images.pexels.com/photos/4464822/pexels-photo-4464822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        src={HeroImg}
        loading="eager"
        priority={true}
        quality={90}
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0 object-cover z-0 brightness-50"
        draggable="false"
        fill
        sizes="100vw"
      />
      </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="h-[50vh] md:h-[90vh] w-full relative">
      <div className="text-white h-full absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl font-semibold md:text-3xl-semi drop-shadow-md shadow-black">
          Explore Our Collection
        </h1>
        <p className="text-sm md:text-lg-regular max-w-[30ch] md:max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          Unlock the Canvas of Collection: Where Artistry Finds its Home!
        </p>
        <UnderlineLink href="/store">
          <p className="font-semibold">Explore products</p>
        </UnderlineLink>
      </div>
      <Image
        // src="https://images.pexels.com/photos/4464822/pexels-photo-4464822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        src={HeroImg2}
        loading="eager"
        priority={true}
        quality={90}
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0 object-cover z-0 brightness-50"
        draggable="false"
        fill
        sizes="100vw"
      />
      </div>
      </SwiperSlide>
      
    </Swiper>
      
    
  )
}

export default Hero
