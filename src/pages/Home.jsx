import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import HomeSlider from "../components/Home/HomeSlider";

const Home = () => {
  return (
    <>
      <HomeSlider />
    </>
  );
};

export default Home;
