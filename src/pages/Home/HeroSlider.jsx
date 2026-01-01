import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useLoadData from "../../hooks/useLoadData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Link } from "react-router";

const HeroSlider = () => {
  const { skillData } = useLoadData();

  // console.log(skillData);
  return (
    <div>
      {skillData.length > 0 && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          speed={2000}
        >
          {skillData.map((data) => (
            <SwiperSlide>
              <div className="hero lg:px-12 lg:h-[350px] rounded-lg  bg-[#dcf0f0] my-10">
                <div className="hero-content flex-col lg:flex-row-reverse">
                  <img className="lg:h-[300px] rounded-lg" src={data.image} />
                  <div>
                    <h1 className="text-2xl lg:text-5xl font-bold">{data.skillName}</h1>
                    <p className="py-6">{data.description}</p>
                    <Link
                      to={`/skill_details/${data.skillId}`}
                      className="btn btn-primary  bg-[#70B2B2] border-none text-white "
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default HeroSlider;
