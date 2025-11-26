import { useParams } from "react-router-dom";
import Ratings from "../components/Ratings/Ratings";

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

const ProductByCategory = () => {
  const params = useParams();

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-start">
          <h2 className="text-[24px] md:text-4xl font-bold mt-4 text-gray-900">
            {params?.id}
          </h2>
        </div>

        <section className="mt-6 md:my-12">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {popularDishes?.slice?.(0, 8).map((food) => (
              <div
                key={food.name}
                className="group bg-white rounded-2xl border border-gray-200 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Image */}
                <div className="relative">
                  <img
                    src={food.img}
                    className="w-full h-48 object-cover group-hover:scale-105 transition duration-500"
                    alt={food.name}
                  />

                  {/* Price badge */}
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

                {/* Content */}
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

                  {/* Add to cart button */}
                  <button className="mt-3 w-full py-2.5 rounded-xl bg-[#491648] text-white font-semibold hover:bg-[#371236] transition-all duration-200 active:scale-95 shadow-md">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ProductByCategory;
