import ImageGallery from "../components/SingleProduct/ImageGallery";
import ProductInfo from "../components/SingleProduct/ProductInfo";

const productData = {
  id: "674556fb1e50e4320e5150",
  name: "Beef Special Steak",
  price: 390,
  rating: 4.5,
  reviews: 1,
  status: "In Stock",
  category: "Beef",
  description:
    "The HP Smart Tank 670 is one of kind Wi-Fi Duplexer All-in-One Color Printer. This liquid ink printer comes with print, scan, copy, and wireless functions. This printer features faster self-healing dual-band Wi-Fi 2.4 and the convenient HP Smart app, as well as outstanding print quality, automatic two-sided printing, and shortcuts in the best-in-class HP Smart app. This inkjet multifunction printer has the capability for high-volume, low-cost printing up to 6,000 color or 6,000 black pages of original HP ink.",
  soldBy: "Watson",
  images: [
    "https://i.ytimg.com/vi/SQoaszSmk80/maxresdefault.jpg",
    "https://kitchenconfidante.com/wp-content/uploads/2022/05/Angus-Beef-Steak-Recipe-with-Garlic-Herb-Compound-Butter-kitchenconfidante.com-2745-FEATURED-IMAGE.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkrpiu6NYPN9t3TTLNY-F-RHzIkD_T8c7SYQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFxtJkzkJOrStZv_7KKoXqexeGbhL2ra7FPw&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmiyxmpKiaeV6K4RCCnyB7sMZ9GlL4SJ4KNw&s",
  ],
};

const SingleProduct = () => {
  return (
    <div className="bg-gray-100 min-h-screen pt-12 md:pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Product Layout: Grid for Image and Details */}
        <div className="rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side: Image Gallery */}
          <div className="lg:sticky lg:top-0 h-min">
            <ImageGallery
              images={productData.images}
              productName={productData.name}
            />
          </div>

          {/* Right Side: Product Information and Purchase */}
          <div className="flex flex-col space-y-6">
            <ProductInfo data={productData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
