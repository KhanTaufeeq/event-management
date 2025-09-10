"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";

export const Home = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            modules={[Autoplay]}
            speed={1000}
        >
            <SwiperSlide>
                <div className="relative w-full h-[100vh]">
                    <Image
                        src="/images/indian-wedding.jpg"
                        alt="indian-wedding"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-full h-[100vh]">
                    <Image
                        src="/images/wedding-deco.jpg"
                        alt="wedding-deco"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-full h-[100vh]">
                    <Image
                        src="/images/diwali-party.jpg"
                        alt="diwali-party"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-full h-[100vh]">
                    <Image
                        src="/images/corporate-night.jpg"
                        alt="corporate-night"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="relative w-full h-[100vh]">
                    <Image
                        src="/images/eid.jpg"
                        alt="iftar party"
                        fill
                        style={{ objectFit: "cover" }}
                        priority
                    />
                </div>
            </SwiperSlide>
            <div className="absolute inset-0 bg-black/70 z-1">
                <h1 className="absolute top-50 left-50 text-9xl text-[#D4AF37]/70">Grandeur <br /> Gatherings</h1>
                <p className="absolute bottom-45 left-55 text-5xl italic">We create the memories you will hold forever</p>
            </div>
        </Swiper>
    );
};
