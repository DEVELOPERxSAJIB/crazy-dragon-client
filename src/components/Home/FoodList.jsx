import { useState, useMemo } from "react";
import { Plus } from "lucide-react";
import { menuData } from "../../constant/data";
import LocationPopup from "../../utils/LocationPopup";
import { Link } from "react-router-dom";

const getPriceValue = (price) => {
  if (!price && price !== 0) return NaN;

  const str = String(price);

  const cleaned = str
    .replace(/from/gi, "")
    .replace(/[^0-9.,-]/g, "")
    .trim();

  if (!cleaned) return NaN;

  let normalized = cleaned;

  const dotCount = (cleaned.match(/\./g) || []).length;
  const commaCount = (cleaned.match(/,/g) || []).length;

  if (dotCount > 0 && commaCount > 0) {
    normalized = cleaned.replace(/,/g, "");
  } else if (commaCount === 1 && dotCount === 0) {
    normalized = cleaned.replace(",", ".");
  } else {
    normalized = cleaned;
  }

  const num = parseFloat(normalized);
  return Number.isFinite(num) ? num : NaN;
};

const FoodList = () => {
  const categories = ["All", ...menuData.map((c) => c.category)];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filterAndSort = (items) => {
    // filter by search
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );

    // create a copy to sort so we don't mutate input
    const copied = [...filtered];

    const compareByNameAsc = (a, b) => a.name.localeCompare(b.name);
    const compareByNameDesc = (a, b) => b.name.localeCompare(a.name);

    const compareByPriceLow = (a, b) => {
      const pa = getPriceValue(a.price);
      const pb = getPriceValue(b.price);

      const aIsNaN = Number.isNaN(pa);
      const bIsNaN = Number.isNaN(pb);

      // Put items without numeric price at the end for low->high
      if (aIsNaN && bIsNaN) return 0;
      if (aIsNaN) return 1;
      if (bIsNaN) return -1;

      return pa - pb;
    };

    const compareByPriceHigh = (a, b) => {
      const pa = getPriceValue(a.price);
      const pb = getPriceValue(b.price);

      const aIsNaN = Number.isNaN(pa);
      const bIsNaN = Number.isNaN(pb);

      // Put items without numeric price at the end for high->low as well
      if (aIsNaN && bIsNaN) return 0;
      if (aIsNaN) return 1;
      if (bIsNaN) return -1;

      return pb - pa;
    };

    switch (sort) {
      case "az":
        return copied.sort(compareByNameAsc);
      case "za":
        return copied.sort(compareByNameDesc);
      case "low":
        return copied.sort(compareByPriceLow);
      case "high":
        return copied.sort(compareByPriceHigh);
      default:
        return copied;
    }
  };

  // Specific category items (memoized)
  const currentItems = useMemo(() => {
    const items =
      menuData.find((cat) => cat.category === selectedCategory)?.items || [];
    return filterAndSort(items);
  }, [selectedCategory, search, sort]);

  // When "All" → Filter & Sort inside each category
  const allItemsProcessed = useMemo(() => {
    return menuData.map((cat) => ({
      ...cat,
      items: filterAndSort(cat.items),
    }));
  }, [search, sort]);

  return (
    <div className="max-w-7xl mx-auto px-4 mt-12">
      {/* CATEGORY TABS */}
      <div className="flex flex-wrap justify-center gap-3 mb-4">
        {categories.map((category) => (
          <button
            key={category}
            className={`
              cursor-pointer px-3 pb-1 text-[15px] font-semibold transition-all duration-200
              ${
                selectedCategory === category
                  ? "border-b-2 border-[#5A1E5A] text-gray-900"
                  : "border-transparent border-b-2 text-gray-600 hover:text-gray-900 hover:border-gray-300"
              }
            `}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {/* SEARCH + SORT */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        {/* SEARCH */}
        <div className="relative w-full md:w-full">
          {/* Search Icon */}
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
              />
            </svg>
          </span>

          {/* Input */}
          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
      w-full
      px-12 py-3
      rounded-full
      border border-gray-100
      shadow-sm
      focus:outline-none
      focus:ring-2 focus:ring-[#5A1E5A]
      focus:border-transparent
      placeholder-gray-400
      transition-all duration-200
    "
          />
        </div>

        {/* SORT */}
        <div className="relative w-full md:w-auto">
          <select
            className="
              w-full
              md:w-auto
              px-5 py-3
              rounded-full
              border border-gray-100
              shadow-sm
              bg-white
              text-gray-700
              focus:outline-none
              cursor-pointer
              transition-all duration-200
              hover:shadow-md
            "
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Default</option>
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
            <option value="low">Price: Low → High</option>
            <option value="high">Price: High → Low</option>
          </select>
        </div>
      </div>

      {/* =============== ALL CATEGORIES VIEW =============== */}
      {selectedCategory === "All" && (
        <div className="space-y-12">
          {allItemsProcessed.map((cat, idx) =>
            cat.items && cat.items.length > 0 ? (
              <div key={idx}>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  {cat.category}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {cat.items.map((item, index) => (
                    <Link
                    to={`/product/${item?.name}`}
                      key={index}
                      className="
                        flex justify-between items-center
                        bg-white/80 backdrop-blur rounded-2xl border border-stone-50
                        p-5 shadow-sm hover:shadow-md hover:-translate-y-[2px]
                        transition-all duration-300
                      "
                    >
                      {/* LEFT */}
                      <div className="flex flex-col w-[60%]">
                        <h3 className="text-[20px] font-bold text-gray-900 leading-tight">
                          {item.name}
                        </h3>

                        <p className="text-[15px] font-semibold text-[#5A1E5A] mt-1">
                          {item.price}
                        </p>

                        {item.desc && (
                          <p className="text-gray-500 text-[14px] mt-2 leading-relaxed">
                            {item.desc}
                          </p>
                        )}
                      </div>

                      {/* IMAGE */}
                      <div className="relative w-[115px] h-[115px]">
                        <img
                          src={
                            item.img ||
                            "https://via.placeholder.com/150x150?text=No+Image"
                          }
                          alt={item.name}
                          className="w-full h-full object-cover rounded-xl shadow-sm"
                        />

                        <button
                          onClick={() => setIsOpen(true)}
                          className="
                            absolute bottom-2 right-2 bg-[#5A1E5A] text-white
                            rounded-full p-2 shadow-md
                            hover:bg-[#702870] hover:scale-110 transition
                          "
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : null
          )}
        </div>
      )}

      {/* =============== SINGLE CATEGORY VIEW =============== */}
      {selectedCategory !== "All" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentItems.map((item, index) => (
            <Link
            to={`/product/${item?.name}`}
              key={index}
              className="
                flex justify-between items-center
                bg-white/80 backdrop-blur rounded-2xl border border-stone-50
                p-5 shadow-sm hover:shadow-md hover:-translate-y-[2px]
                transition-all duration-300
              "
            >
              <div className="flex flex-col w-[60%]">
                <h3 className="text-[20px] font-bold text-gray-900 leading-tight">
                  {item.name}
                </h3>

                <p className="text-[15px] font-semibold text-[#5A1E5A] mt-1">
                  {item.price}
                </p>

                {item.desc && (
                  <p className="text-gray-500 text-[14px] mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>

              <div className="relative w-[115px] h-[115px]">
                <img
                  src={
                    item.img ||
                    "https://via.placeholder.com/150x150?text=No+Image"
                  }
                  alt={item.name}
                  className="w-full h-full object-cover rounded-xl shadow-sm"
                />

                <button
                  onClick={() => setIsOpen(true)}
                  className="
                    absolute bottom-2 right-2 bg-[#5A1E5A] text-white
                    rounded-full p-2 shadow-md
                    hover:bg-[#702870] hover:scale-110 transition
                  "
                >
                  <Plus size={18} />
                </button>
              </div>
            </Link>
          ))}
        </div>
      )}

      {isOpen && (
        <LocationPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
      )}
    </div>
  );
};

export default FoodList;
