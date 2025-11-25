import { FaInstagram, FaFacebookF, FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-900">
      {/* Top Section */}
      <div className="bg-pink-50 py-10">
        <div className="max-w-7xl mx-auto px-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-2 text-lg">We Accept</h4>
            <div className="flex gap-3 items-center">
              <img
                src="https://wallpapercat.com/w/full/b/4/2/1252531-3840x2160-desktop-4k-visa-card-wallpaper.jpg"
                alt="Visa"
                className="h-6 w-auto"
              />
              <img
                src="https://wallpapercat.com/w/full/b/1/4/1254803-3840x2160-desktop-4k-mastercard-background.jpg"
                alt="MasterCard"
                className="h-6 w-auto"
              />
              <img
                src="https://www.davisanddavislaw.com/wp-content/uploads/2024/11/card-3.png"
                alt="American Express"
                className="h-6 w-auto"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/9/96/Logo_Ideal_Indonesia.png"
                alt="iDEAL"
                className="h-6 w-auto bg-white rounded-sm p-1"
              />
            </div>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold mb-2 text-lg">Opening Hours</h4>
            <p className="text-gray-600 text-[14px] font-normal">Everyday: 11:00 — 23:00</p>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold mb-2 text-lg">Contact</h4>
            <p className="text-gray-600 text-[14px] font-normal">+31 6 1234 5678</p>
          </div>

          {/* Social Media & Payments */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold mb-1 text-md">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 bg-white shadow-sm rounded-full hover:bg-[#491648] hover:text-white transition-all duration-200"
                aria-label="Instagram"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="#"
                className="p-2 bg-white shadow-sm rounded-full hover:bg-[#491648] hover:text-white transition-all duration-200"
                aria-label="Facebook"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="#"
                className="p-2 bg-white shadow-sm rounded-full hover:bg-[#491648] hover:text-white transition-all duration-200"
                aria-label="TikTok"
              >
                <FaTiktok size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#491648] text-white py-4">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Crazy Dragon — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
