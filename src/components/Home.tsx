"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import Navigation from "./Navigation";

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
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center z-20">

                {/* Heading */}
                <h1 className="text-6xl md:text-8xl font-extrabold 
                 bg-gradient-to-r from-[#D4AF37] via-pink-500 to-purple-700 
                 bg-clip-text text-transparent 
                 drop-shadow-[0_0_25px_rgba(212,175,55,0.7)]">
                    Grandeur <br /> Gatherings
                </h1>

                {/* Tagline */}
                <p className="mt-6 text-xl md:text-3xl italic tracking-wide 
                text-gray-200 drop-shadow-lg">
                    We create the memories you will hold forever
                </p>

                {/* Decorative glow (lighter now) */}
                <div className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-purple-600/20 blur-2xl"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-pink-500/20 blur-2xl"></div>
            </div>

            {/* Navigation on top */}
            <div className="absolute top-0 left-0 right-0 z-30">
                <Navigation />
            </div>
        </Swiper>
    );
};
