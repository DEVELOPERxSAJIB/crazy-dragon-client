import { X, Minus, Plus } from "lucide-react";

// --- Cart Item Component ---
const CartItem = ({ item }) => (
  <div className="py-4 border-b border-gray-100">
    <h3 className="font-semibold text-gray-900">{item.name}</h3>
    <div className="text-sm text-gray-600 mt-1 space-y-0.5">
      {item.details.map((detail, i) => (
        <p key={i}>{detail}</p>
      ))}
    </div>
    <p className="text-sm font-medium text-red-600 mt-2 cursor-pointer">
      Add note
    </p>
    <div className="flex items-center justify-between mt-3">
      <p className="text-lg font-bold text-gray-900">
        €{item.price.toFixed(2)}
      </p>
      <div className="flex items-center space-x-2 border border-gray-300 rounded-full px-1 py-0.5">
        <button className="text-gray-600 hover:text-red-600 p-1">
          <Minus size={14} />
        </button>
        <span className="font-medium text-sm">{item.quantity}</span>
        <button className="text-gray-600 hover:text-red-600 p-1">
          <Plus size={14} />
        </button>
      </div>
    </div>
  </div>
);

// --- Recommendation Card ---
const RecommendationCard = ({ item }) => (
  <div className="flex items-center justify-between bg-white p-3 rounded-xl shadow-sm border border-gray-200">
    <div className="text-sm font-medium">
      <p className="text-gray-800">{item.name}</p>
      <p className="text-gray-500">€{item.price.toFixed(2)}</p>
    </div>
    <button className="text-red-600 border border-red-600 rounded-full p-1 hover:bg-red-50 transition">
      <Plus size={16} />
    </button>
  </div>
);

const CartSidebar = ({ isOpen, onClose, items = [], recommendations = [] }) => {
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 1.49;
  const serviceFee = subtotal * 0.025;
  const total = subtotal + deliveryFee + serviceFee;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-[99] ${
          isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-2xl z-[100] transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center p-5 border-b border-gray-100 sticky top-0 bg-white">
            <h2 className="text-xl font-bold text-gray-900">Basket</h2>
            <button
              onClick={onClose}
              className="p-2 text-gray-500 hover:text-red-600 rounded-full hover:bg-gray-100 transition"
            >
              <X size={24} />
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto px-5 py-4">
            <div className="divide-y divide-gray-100">
              {items.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>

            <div className="mt-6 pb-4">
              <h3 className="text-md font-semibold text-gray-800 mb-3">
                Have you seen...
              </h3>
              <div className="space-y-3">
                {recommendations.map((rec) => (
                  <RecommendationCard key={rec.id} item={rec} />
                ))}
              </div>
            </div>
          </div>

          {/* Totals & Checkout */}
          <div className="p-5 border-t border-gray-200 bg-white sticky bottom-0 shadow-lg">
            <div className="space-y-2 text-sm text-gray-700 font-medium">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery fee</span>
                <span>€{deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-dashed border-gray-300">
                <span>
                  Service fee{" "}
                  <span className="text-xs text-gray-500">
                    (2.5% max €0.99)
                  </span>
                </span>
                <span>€{Math.min(serviceFee, 0.99).toFixed(2)}</span>
              </div>
              <div className="flex justify-between pt-2 text-lg font-bold text-gray-900">
                <span>Total</span>
                <span>€{total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full mt-4 flex items-center justify-center px-4 py-3 text-lg font-bold rounded-xl shadow-lg text-white bg-red-600 hover:bg-red-700 transition duration-150">
              Checkout (€{total.toFixed(2)})
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSidebar;
