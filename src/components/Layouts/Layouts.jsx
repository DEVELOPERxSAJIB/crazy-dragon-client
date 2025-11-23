import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import CartSidebar from "../CartSidebar";
import { useState } from "react";

const Layouts = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const initialCartItems = [
    {
      id: 1,
      name: "King meal",
      details: ["Coca-Cola 330ml", "Fanta Orange 330ml"],
      price: 27.64,
      quantity: 1,
    },
  ];

  const mockRecommendations = [
    { id: 2, name: "Garlic Sauce", price: 0.5 },
    { id: 3, name: "Medium Fries", price: 4.5 },
    { id: 4, name: "Coca-Cola 330ml", price: 2.55 },
  ];

  return (
    <>
      <Header
        cartItemCount={initialCartItems.reduce(
          (sum, item) => sum + item.quantity,
          0
        )}
        onCartClick={() => setIsCartOpen(true)}
      />
      <Outlet />
      <Footer />

      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={initialCartItems}
        recommendations={mockRecommendations}
      />
    </>
  );
};

export default Layouts;
