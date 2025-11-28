import React, { useEffect, useState } from "react";
import { ShoppingCart, Menu, X, Utensils, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOutUser } from "../../features/auth/authApiSlice";
import AlertMessage from "../../utils/AlertMessage";
import { setMessageEmpty } from "../../features/auth/authSlice";
import LogoMain from "../../assets/logo/crazy.png";
import ScrollToTop from "../../utils/ScrollToTop";

const Header = ({ cartItemCount = 0, onCartClick }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isAuthenticated, message, error } = useSelector(
    (state) => state.auth
  );

  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Orders", to: "/orders" },
    { name: "Contact Us", to: "/contact" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const bgColor = "bg-stone-50";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const getInitials = (fullName) => {
    if (!fullName) return "";
    const names = fullName.split(" ");
    let initials = names[0].charAt(0);
    if (names.length > 1) {
      initials += names[1].charAt(0);
    }
    return initials.toUpperCase();
  };

  const handleLogout = () => {
    dispatch(logOutUser());
    setOpen(false);
  };

  useEffect(() => {
    if (message) {
      AlertMessage({ type: "success", msg: message });
      dispatch(setMessageEmpty());
      navigate("/signin");
    }

    if (error) {
      AlertMessage({ type: "error", msg: error });
      dispatch(setMessageEmpty());
    }
  }, [error, isAuthenticated, navigate, user, message, dispatch]);

  return (
    <header className={`${bgColor} shadow-md w-full sticky top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 md:py-2">
          {/* Logo Section */}
          <Link to={"/"} className="h-12 md:h-20">
            <img src={LogoMain} alt="Brand Logo" className="w-full h-full" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex flex-1 justify-center space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#480A4C] text-[16px] hover:text-[#D9017E] transition duration-150"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Action Icons and Button */}
          <div className="flex items-center space-x-4">
            {/* Cart Icon */}
            <div
              onClick={onCartClick}
              className="relative p-2 cursor-pointer hover:text-red-600 transition"
            >
              <ShoppingCart size={24} className="text-gray-800" />
              <span className="absolute -top-1 -right-1.5 w-5 h-5 flex items-center justify-center text-xs font-bold text-white bg-[#480A4C] rounded-full ring-2 ring-stone-50">
                {cartItemCount}
              </span>
            </div>

            {/* Sign In Button */}
            <div className="relative hidden md:block">
              {user ? (
                <>
                  {/* Trigger */}
                  <button
                    onClick={() => setOpen(!open)}
                    className="flex justify-between items-center gap-1.5"
                  >
                    {user.avatar ? (
                      <div className="h-8 w-8 rounded-full overflow-hidden shadow-sm">
                        <img
                          className="h-full w-full object-cover"
                          src={user.avatar.url}
                          alt="Avatar"
                        />
                      </div>
                    ) : (
                      <div className="h-8 w-8 flex items-center justify-center rounded-full shadow-sm bg-[#D7A3FF] font-semibold text-[#480A4C] text-[14px]">
                        {getInitials(user.name)}
                      </div>
                    )}
                    <h3 className="text-gray-900 text-[14px] cursor-pointer font-semibold flex items-center gap-0.5">
                      {user.name}{" "}
                      <ChevronDown
                        className={`${
                          open ? "rotate-180" : "rotate-360"
                        } transition-all duration-300`}
                        size={20}
                        color="#480A4C"
                      />
                    </h3>
                  </button>

                  {/* Dropdown */}
                  {open && (
                    <div className="absolute right-0 mt-2 z-10 bg-white border border-gray-200 rounded-lg shadow-lg w-44">
                      <ul className="p-2 text-sm font-medium">
                        {user?.role === "admin" && (
                          <li>
                            <Link
                              to="/dashboard"
                              onClick={() => setOpen(!open)}
                              className="inline-flex items-center w-full p-2 hover:bg-gray-100 hover:text-gray-900 rounded"
                            >
                              Dashboard
                            </Link>
                          </li>
                        )}

                        <li>
                          <Link
                            to="/profile"
                            onClick={() => setOpen(!open)}
                            className="inline-flex items-center w-full p-2 hover:bg-gray-100 hover:text-gray-900 rounded"
                          >
                            Profile
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/orders"
                            onClick={() => setOpen(!open)}
                            className="inline-flex items-center w-full p-2 hover:bg-gray-100 hover:text-gray-900 rounded"
                          >
                            Orders
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={() => handleLogout()}
                            className="inline-flex text-red-900 items-center w-full p-2 hover:bg-gray-100 hover:text-red-800 rounded cursor-pointer"
                          >
                            Sign out
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to="/signin"
                  className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-[#480A4C] hover:bg-[#6E3B72] transition duration-150"
                >
                  Sign In
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="p-2 lg:hidden text-gray-800 hover:text-red-600 transition"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 lg:hidden transform transition-transform duration-300 ease-in-out z-40 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            isMobileMenuOpen ? "opacity-50" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleMobileMenu}
        ></div>

        {/* Menu Content */}
        <div
          className={`absolute right-0 top-0 h-full w-64 ${bgColor} shadow-2xl p-6 flex flex-col space-y-4`}
        >
          <div className="flex justify-end">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-800 hover:text-red-600"
            >
              <X size={28} />
            </button>
          </div>

          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="block text-lg font-medium text-gray-800 hover:text-red-600"
              onClick={toggleMobileMenu}
            >
              {item.name}
            </Link>
          ))}

          {user && (
            <Link
              className="block text-lg font-medium text-red-900 hover:text-red-500"
              onClick={() => {
                toggleMobileMenu();
                handleLogout();
              }}
            >
              Sign Out
            </Link>
          )}

          {user ? (
            <div className="block absolute bottom-6 w-full">
              {/* Trigger */}
              <Link
                to="/profile"
                onClick={() => {
                  setOpen(!open), toggleMobileMenu();
                }}
                className="flex items-center gap-1.5"
              >
                {user.avatar ? (
                  <div className="h-8 w-8 rounded-full overflow-hidden shadow-sm">
                    <img
                      className="h-full w-full object-cover"
                      src={user.avatar?.url}
                      alt="Avatar"
                    />
                  </div>
                ) : (
                  <div className="h-8 w-8 flex items-center justify-center rounded-full shadow-sm bg-[#D7A3FF] font-semibold text-[#480A4C] text-[14px]">
                    {getInitials(user?.name)}
                  </div>
                )}
                <h3 className="text-gray-900 text-[14px] cursor-pointer font-semibold flex items-center gap-0.5">
                  {user?.name}{" "}
                </h3>
              </Link>
            </div>
          ) : (
            <Link
              to="/signin"
              onClick={toggleMobileMenu}
              className="w-full flex sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-xl shadow-sm text-white bg-[#480A4C] hover:bg-[#6E3B72] transition duration-150"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
