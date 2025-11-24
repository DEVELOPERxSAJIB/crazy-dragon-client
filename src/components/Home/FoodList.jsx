import { Plus } from "lucide-react";

const foods = [
  {
    name: "French Fries",
    price: "BDT 80",
    desc: "Finely cut deep fried potatoes",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ae8p5fO5SDVCFj-xEWTJaECdaCkzSx0jsA&s",
  },
  {
    name: "Smokey BBQ Chicken Cheese Burger",
    price: "from Tk 295",
    desc: "1:1 – Prepared with chicken patty, bbq sauce & cheese",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ae8p5fO5SDVCFj-xEWTJaECdaCkzSx0jsA&s",
  },
  {
    name: "Chicken Fingers",
    price: "from Tk 195",
    desc: "Mixed with proper sauces & deep fried in hot oil",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ae8p5fO5SDVCFj-xEWTJaECdaCkzSx0jsA&s",
  },
  {
    name: "Pankha Wings",
    price: "Tk 270",
    desc: "6 pcs – Choose any 3 from 5 flavors",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ae8p5fO5SDVCFj-xEWTJaECdaCkzSx0jsA&s",
  },
  {
    name: "Chicken Cheese Burger",
    price: "from Tk 270",
    desc: "1:1 – Prepared with chicken patty, cheese & special sauce",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ae8p5fO5SDVCFj-xEWTJaECdaCkzSx0jsA&s",
  },
  {
    name: "Pan Asian Mashup",
    price: "Tk 325",
    desc: "1:1 – Tom Yum Rice, Kung Pao Chicken & Poached Egg…",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8ae8p5fO5SDVCFj-xEWTJaECdaCkzSx0jsA&s",
  },
];

const FoodList = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-12">
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {foods.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >
            {/* LEFT SIDE TEXT */}
            <div className="flex flex-col w-[60%]">
              <h3 className="text-[20px] font-semibold text-gray-900">{item.name}</h3>
              <p className="font-bold text-[14px] text-gray-900 mt-1">{item.price}</p>
              <p className="text-gray-500 text-sm mt-2">{item.desc}</p>
            </div>

            {/* IMAGE + BUTTON */}
            <div className="relative w-[110px] h-[110px]">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Add Button */}
              <button className="absolute bottom-1 right-1 bg-white rounded-full p-1 shadow-md hover:scale-105 transition">
                <Plus size={20} className="text-gray-800" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
