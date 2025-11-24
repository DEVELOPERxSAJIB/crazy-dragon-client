import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import HomeSlider from "../components/Home/HomeSlider";

// import required modules
import slide1 from "../assets/slide/slide_home_3.jpg";
import slide2 from "../assets//slide/Pasja_Restaurant.mp4";

import {
  Utensils,
  Bike,
  Timer,
  Star,
  Truck,
  ClockPlus,
  Handbag,
} from "lucide-react";
import { useState } from "react";
import FoodList from "../components/Home/FoodList";
import CategoryCard from "../components/Home/CategoryCard";
import VideoSlide from "../components/Home/VideoSlide";

const categories = [
  "All",
  "Grilled Sandwiches",
  "Beef Burgers",
  "Wraps",
  "Pasta",
  "Rice & Sides",
  "Chicken Wings",
  "Fish",
  "Kids Menu",
  "Sauces",
  "Drinks",
];

const popularDishes = [
  {
    name: "Cheese Pizza",
    img: "/images/foods/f1.jpg",
    price: "$12.50",
  },
  {
    name: "Beef Burger",
    img: "/images/foods/f2.jpg",
    price: "$9.20",
  },
  {
    name: "Chicken Biryani",
    img: "/images/foods/f3.jpg",
    price: "$7.80",
  },
];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle category button click
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
      {/* HERO SLIDER */}
      <HomeSlider />

      <div className="slider-card">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto max-w-7xl px-4 my-16">
          {/* Home Delivery */}
          <div className="flex flex-col md:flex-row flex-1 items-center gap-6 bg-stone-200 py-2 px-6 rounded-3xl shadow-md">
            <Truck size={80} color="#480A4C" />
            <div className="flex flex-col justify-between md:p-4 leading-normal">
              <h5 className="text-[20px] font-semibold py-2">Home Delivery</h5>
              <p className="text-body">
                Order online to get the food at your doorstep
              </p>
            </div>
          </div>

          {/* Dine-in */}
          <div className="flex flex-col md:flex-row flex-1 items-center gap-6 bg-[#480A4C] py-2 px-6 rounded-3xl shadow-md">
            <ClockPlus size={70} color="#fff" />
            <div className="flex flex-col justify-between md:p-4 leading-normal">
              <h5 className="text-[20px] text-white font-semibold py-2">
                Dine-in
              </h5>
              <p className="text-white">
                Everything you order will be served hot & fresh
              </p>
            </div>
          </div>

          {/* Take Away */}
          <div className="flex flex-col md:flex-row flex-1 items-center gap-6 bg-[#292D35] py-2 px-6 rounded-3xl shadow-md">
            <Handbag size={80} color="#fff" />
            <div className="flex flex-col justify-between md:p-4 leading-normal">
              <h5 className="text-[20px] font-semibold py-2 text-white">
                Take Away
              </h5>
              <p className="text-white">
                Take away your favorite dishes when you are on the move
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-16 md:pt-12">
        <div className="max-w-7xl mx-auto px-4">
          {/* Section Title */}
          <div className="text-center">
            {/* <span className="inline-block bg-[#28D5F3] text-[#fff] px-4 py-1 rounded-md text-sm tracking-wide font-semibold">
                Category
              </span> */}

            <h2 className="text-[24px] md:text-4xl font-bold mt-4 text-gray-900">
              Discover our categories
            </h2>
          </div>

          <section className="mt-8">
            <div className="card bg-transparent border-0 shadow-none">
              <div className="card-body">
                <div className="flex flex-wrap justify-center gap-1">
                  {categories?.map((category) => (
                    <button
                      key={category}
                      className={`cursor-pointer mr-5 text-[16px] font-medium text-bold ${
                        selectedCategory === category
                          ? "border-b-2 border-[#491648] text-gray-900"
                          : "border-transparent border-b-2  text-gray-600 hover:text-gray-900"
                      }`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <FoodList />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:pt-20">
        <CategoryCard />
      </div>

      <div className="max-w-full mx-auto pt-8 md:pt-20">
       <VideoSlide src={slide2} />

        {/* WHY CHOose US */}
        <section className="my-20">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <Bike size={50} className="text-[#491648] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">
                Fast Delivery
              </h3>
              <p className="text-gray-600 mt-2">
                Get your food delivered in minutes.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Utensils size={50} className="text-[#491648] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">
                Fresh Food
              </h3>
              <p className="text-gray-600 mt-2">
                Best quality meals from top restaurants.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Star size={50} className="text-[#491648] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Top Rated</h3>
              <p className="text-gray-600 mt-2">
                Trusted by thousands of happy customers.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* POPULAR DISHES */}
        <section className="mb-14">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Popular Dishes
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularDishes.map((food) => (
              <div
                key={food.name}
                className="bg-white rounded-xl border shadow hover:shadow-lg transition overflow-hidden"
              >
                <img src={food.img} className="w-full h-40 object-cover" />

                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {food.name}
                  </h3>
                  <p className="text-[#491648] font-semibold mt-1">
                    {food.price}
                  </p>

                  <button className="mt-3 w-full py-2 rounded-lg bg-[#491648] text-white font-medium hover:bg-[#341034] transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* WHY CHOose US */}
        <section className="my-20">
          <div className="grid md:grid-cols-3 gap-10 text-center">
            <div className="flex flex-col items-center">
              <Bike size={50} className="text-[#491648] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">
                Fast Delivery
              </h3>
              <p className="text-gray-600 mt-2">
                Get your food delivered in minutes.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Utensils size={50} className="text-[#491648] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">
                Fresh Food
              </h3>
              <p className="text-gray-600 mt-2">
                Best quality meals from top restaurants.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Star size={50} className="text-[#491648] mb-4" />
              <h3 className="text-xl font-semibold text-gray-900">Top Rated</h3>
              <p className="text-gray-600 mt-2">
                Trusted by thousands of happy customers.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#491648] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-bold mb-3 text-lg">Foodie</h3>
            <p className="text-sm text-gray-200">
              Your favorite food delivered fast at your door.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>Home</li>
              <li>Restaurants</li>
              <li>About Us</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Support</h4>
            <ul className="space-y-2 text-gray-200 text-sm">
              <li>Help Center</li>
              <li>FAQ</li>
              <li>Terms</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-3">Get in Touch</h4>
            <p className="text-gray-200 text-sm">email@foodie.com</p>
            <p className="text-gray-200 text-sm">+1 234 567 890</p>
          </div>
        </div>
        <p className="text-center text-gray-300 mt-10 text-sm">
          © {new Date().getFullYear()} Foodie — All Rights Reserved.
        </p>
      </footer>
    </>
  );
};

export default Home;
