import { RxCross2 } from "react-icons/rx";

const CustomizePopup = ({ isOpen, item, onClose }) => {
  if (!isOpen || !item) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-xl font-semibold text-gray-900">{item.name}</h2>
          <button onClick={onClose} className="text-gray-600 hover:text-gray-900">
            <RxCross2 size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">

          {/* Quantity */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Quantity
            </h3>
            <div className="flex items-center gap-4">
              <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100 text-lg font-bold hover:bg-gray-200">
                -
              </button>
              <span className="text-lg font-semibold">1</span>
              <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100 text-lg font-bold hover:bg-gray-200">
                +
              </button>
            </div>
          </div>

          {/* Sauce / Addons */}
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">
              Add Sauce / Add-ons
            </h3>

            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-gray-700">Extra Cheese (+20৳)</span>
              </label>

              <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-gray-700">Spicy Sauce (+10৳)</span>
              </label>

              <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input type="checkbox" className="w-5 h-5" />
                <span className="text-gray-700">Garlic Mayo (+15৳)</span>
              </label>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 border-t bg-gray-50 rounded-b-2xl flex justify-end">
          <button className="px-5 py-3 bg-[#5a1e5a] hover:bg-[#702870] text-white rounded-lg font-medium">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomizePopup;
