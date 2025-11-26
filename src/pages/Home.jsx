import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HomeSlider from "../components/Home/HomeSlider";

// import required modules
import slide2 from "../assets//slide/Pasja_Restaurant.mp4";

import { Truck, ClockPlus, Handbag } from "lucide-react";
import FoodList from "../components/Home/FoodList";
import CategoryCard from "../components/Home/CategoryCard";
import VideoSlide from "../components/Home/VideoSlide";
import Ratings from "../components/Ratings/Ratings";
import { Link } from "react-router-dom";

const popularDishes = [
  {
    name: "Cheese Pizza",
    img: "https://joyfoodsunshine.com/wp-content/uploads/2023/04/best-cheese-pizza-recipe-1.jpg",
    regularPrice: "$15.00",
    offerPrice: "$12.50",
    desc: "Delicious cheese pizza with a crispy crust and gooey cheese topping.",
  },
  {
    name: "Beef Burger",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgU-Y-luDvhVbxIwWPait2BvhXAwZz1NoVtg&s",
    price: "$9.20",
    regularPrice: "$12.00",
    offerPrice: "",
  },
  {
    name: "Beef Burger",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgU-Y-luDvhVbxIwWPait2BvhXAwZz1NoVtg&s",
    price: "$9.20",
    regularPrice: "$12.00",
    offerPrice: "",
  },
  {
    name: "Chicken Biryani",
    img: "https://burmawalakitchen.com/wp-content/uploads/2024/05/Chicken-65-Biryani-3-768x1024.jpg",
    price: "$7.80",
  },
  {
    name: "Beef Burger",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgU-Y-luDvhVbxIwWPait2BvhXAwZz1NoVtg&s",
    price: "$9.20",
    regularPrice: "$12.00",
    offerPrice: "",
  },
  {
    name: "Chicken Biryani",
    img: "https://burmawalakitchen.com/wp-content/uploads/2024/05/Chicken-65-Biryani-3-768x1024.jpg",
    price: "$7.80",
  },
  {
    name: "Beef Burger",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgU-Y-luDvhVbxIwWPait2BvhXAwZz1NoVtg&s",
    price: "$9.20",
    regularPrice: "$12.00",
    offerPrice: "",
  },
  {
    name: "Chicken Biryani",
    img: "https://burmawalakitchen.com/wp-content/uploads/2024/05/Chicken-65-Biryani-3-768x1024.jpg",
    price: "$7.80",
  },
  {
    name: "Cheese Pizza",
    img: "https://joyfoodsunshine.com/wp-content/uploads/2023/04/best-cheese-pizza-recipe-1.jpg",
    regularPrice: "$15.00",
    offerPrice: "$12.50",
    desc: "Delicious cheese pizza with a crispy crust and gooey cheese topping.",
  },
  {
    name: "Beef Burger",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgU-Y-luDvhVbxIwWPait2BvhXAwZz1NoVtg&s",
    price: "$9.20",
    regularPrice: "$12.00",
    offerPrice: "",
  },
];

const Home = () => {
  return (
    <>
      {/* HERO SLIDER */}
      <HomeSlider />

      <div className="slider-card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto max-w-7xl px-4 my-16">
          {/* Home Delivery */}
          <div className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-purple-100 via-purple-50 to-purple-100 py-6 px-8 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <Truck size={80} color="#5A1E5A" />
            <div className="flex flex-col justify-center md:p-4">
              <h5 className="text-[22px] font-bold text-gray-900 mb-2">
                Home Delivery
              </h5>
              <p className="text-gray-700 text-[15px]">
                Order online to get the food at your doorstep
              </p>
            </div>
          </div>

          {/* Dine-in */}
          <div className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-[#5A1E5A] via-[#702870] to-[#480A4C] py-6 px-8 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <ClockPlus size={70} color="#fff" />
            <div className="flex flex-col justify-center md:p-4">
              <h5 className="text-[22px] text-white font-bold mb-2">Dine-in</h5>
              <p className="text-gray-200 text-[15px]">
                Everything you order will be served hot & fresh
              </p>
            </div>
          </div>

          {/* Take Away */}
          <div className="flex flex-col md:flex-row items-center gap-6 bg-gradient-to-r from-gray-800 via-gray-900 to-black py-6 px-8 rounded-2xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <Handbag size={80} color="#fff" />
            <div className="flex flex-col justify-center md:p-4">
              <h5 className="text-[22px] font-bold text-white mb-2">
                Take Away
              </h5>
              <p className="text-gray-300 text-[15px]">
                Take away your favorite dishes when you are on the move
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="max-w-full mx-auto pt-8 md:pt-20">
        <VideoSlide src={slide2} />
      </div> */}

      <div id="order-section" className="pt-16 md:pt-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center">
            <h2 className="text-[24px] md:text-4xl font-bold text-gray-900">
              Discover Our Categories
            </h2>
          </div>
          <FoodList />
        </div>
      </div>

      <div className="pt-16 md:pt-12">
        <div className="max-w-full mx-auto">
          <section className="mt-6 md:mt-12">
            <div
              className="relative bg-cover bg-center py-24 md:py-48"
              style={{
                backgroundImage: `url('https://btthemesele.wpengine.com/kudil-elementor/wp-content/uploads/sites/5/2025/03/Menu-parallax-1.jpg')`,
                backgroundAttachment: "",
              }}
            >
              {/* Dark Overlay for contrast and mood (matches the image) */}
              <div className="absolute inset-0 bg-black/0 opacity-80"></div>

              {/* Content Container (centered) */}
              <div className="relative z-10 container mx-auto text-center px-4">
                <h2 className="text-white text-4xl md:text-[32px] font-extrabold uppercase">
                  Prepared On Site With
                </h2>
                <h2 className="dancing-script text-[#f9f9f9] text-4xl md:text-[46px] font-bold">
                  Halal Ingredients
                </h2>
                {/* Steps Layout (Flexbox for easy centering and responsiveness) */}
                <div className="flex flex-col md:flex-row justify-center items-start space-y-12 md:space-y-0 md:space-x-10"></div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* <div className="max-w-7xl mx-auto px-4">
        <CategoryCard />
      </div> */}

      {/* <div className="pt-16 md:pt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-[24px] md:text-4xl font-bold mt-4 text-gray-900">
              Our Popular Dishes
            </h2>
          </div>

          <section className="mt-6 md:my-12">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {popularDishes?.slice?.(0, 8).map((food) => (
                <Link
                to={`/product/${food?.name}`}
                  key={food.name}
                  className="group bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative">
                    <img
                      src={food.img}
                      className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                      alt={food.name}
                    />

                    {food?.offerPrice ? (
                      <div className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-lg">
                        <span
                          style={{ textDecoration: "line-through" }}
                          className="text-gray-500 text-sm font-medium"
                        >
                          {food.regularPrice}
                        </span>
                        <span className="text-[#491648] text-sm font-bold">
                          {food.offerPrice}
                        </span>
                      </div>
                    ) : (
                      <span className="absolute bottom-3 left-3 bg-[#491648] text-white text-sm font-semibold px-3 py-1 rounded-full shadow-lg">
                        {food.regularPrice}
                      </span>
                    )}
                  </div>

                  <div className="p-5">
                    <h3 className="text-[16px] font-semibold text-gray-900 hover:text-[#491648] hover:cursor-pointer leading-snug">
                      {food.name}
                    </h3>

                    <div className="flex items-center gap-3 mt-3">
                      <Ratings size="md" />
                      <p className="text-gray-500 text-[16px] font-normal line-clamp-2 p-0 mt-1">
                        (03)
                      </p>
                    </div>

                    <button className="mt-3 w-full py-2.5 rounded-xl bg-[#491648] text-white font-semibold hover:bg-[#371236] transition-all duration-200 active:scale-95 shadow-md">
                      Add to Cart
                    </button>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div> */}

      <div className="">
        <div className="bg-[#faf5ef72] rounded-lg overflow-hidden flex items-end justify-center h-96 relative pb-4">
          <iframe
            width="100%"
            height="100%"
            className="absolute inset-0"
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2450.807220580942!2d4.2706967127671716!3d52.101439971837436!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5b0bd6e75a3e7%3A0xc6af5d9379bcead2!2sZeesluisweg%2018%2C%202583%20DR%20Den%20Haag%2C%20Netherlands!5e0!3m2!1sen!2sbd!4v1738283117384!5m2!1sen!2sbd"
            style={{ filter: "grayscale(0) contrast(1) opacity(0.9)" }}
          />
        </div>
      </div>
    </>
  );
};

export default Home;
