import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import slide1 from "../../assets/slide/slide_home_3.jpg";
import slide2 from "../../assets/slide/Pasja_Restaurant.mp4";

const HomeSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 15000,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <>
          <SwiperSlide>
            <a href={"#"}>
              <img
                style={{
                  height: "600px",
                  width: "100vw",
                  objectFit: "cover",
                }}
                src={slide1}
                alt=""
              />
            </a>
          </SwiperSlide>
          <SwiperSlide>
            <video
              style={{
                height: "600px",
                width: "100vw",
                objectFit: "cover",
              }}
              src={slide2}
              autoPlay
              loop
              muted
              playsInline
            />
          </SwiperSlide>
        </>
      </Swiper>
    </>
  );
};

export default HomeSlider;
