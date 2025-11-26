import { Link } from "react-router-dom";

const categories = [
  {
    name: "Grilled Sandwiches",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0gijivH1t0emtvA5nz6zjV3Si16R5P164Cg&s",
  },
  {
    name: "Beef Burgers",
    image:
      "https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg",
  },
  {
    name: "Wraps",
    image:
      "https://valentinascorner.com/wp-content/uploads/2023/06/Chicken-Wrap-Recipe-4.jpg",
  },
  {
    name: "Pasta",
    image:
      "https://www.recipetineats.com/tachyon/2025/08/Penne-alla-vodka_2.jpg",
  },
  {
    name: "Rice & Sides",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgdmlB1H9A8-ogZFv_6T1QvVfE6HhxByZ17g&s",
  },
  {
    name: "Chicken Wings",
    image:
      "https://www.recipetineats.com/tachyon/2024/11/New-Oreleans-chicken-wings_1.jpg",
  },
  {
    name: "Fish",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRII35kUKRlMl0EW2TC7nhNZbhvjjLbnz5lA&s",
  },
  {
    name: "Kids Menu",
    image:
      "https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg",
  },
  {
    name: "Sauces",
    image:
      "https://www.acouplecooks.com/wp-content/uploads/2022/12/Tomato-Sauce-011.jpg",
  },
  {
    name: "Drinks",
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2023/10/GF01115BackPagePSOCocktailspreview-829355e.jpg?quality=90&resize=708,643",
  },
];

const CardDesign = ({ category }) => {
  return (
    <Link to={`/category/${category?.name}`}
      className="group relative block w-full aspect-square overflow-hidden
      rounded-lg shadow-md transition duration-300 hover:shadow-xl h-56"
      aria-label={`View ${category.name} menu`}
      >
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="z-10 absolute inset-0 bg-black opacity-30 transition duration-300 group-hover:opacity-30"></div>
      <div className="z-30 absolute inset-0 flex items-center justify-center p-4">
        <span className="text-white text-[20px] sm:text-2xl font-medium uppercase tracking-wider pointer-events-none drop-shadow-lg">
          {category.name}
        </span>
      </div>
    </Link>
  );
};

const CategoryCard = () => {
  return (
    <div className="p-4 sm:p-8 flex items-center justify-center">
      {" "}
      <div className="max-w-7xl mx-auto w-full">
        <div className="text-center">
          <h2 className="text-[24px] md:text-4xl font-bold mt-4 mb-12 text-gray-900">
            Discover Our Menu
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories?.slice(0).map((category, index) => (
            <CardDesign key={index} category={category} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
