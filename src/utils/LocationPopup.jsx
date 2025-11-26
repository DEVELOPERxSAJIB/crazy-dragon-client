import { RxCross2 } from "react-icons/rx";
import { CiLocationOn } from "react-icons/ci";

const LocationPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 bg-opacity-50 flex items-center justify-center p-4 z-50">
      {/* Close button */}
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-2xl">
        <div className="p-6 md:p-8">
          <div className="flex items-center justify-end mb-12">
            <button className="cursor-pointer" onClick={onClose}>
              <RxCross2 />
            </button>
          </div>
          <div className="relative flex items-center">
            <div className="grow relative border border-gray-300 rounded-lg pr-4">
              <label
                htmlFor="address-input"
                className="absolute -top-3 left-4 text-sm text-gray-500 bg-white px-1 font-medium"
              >
                Enter your address
              </label>

              <input
                id="address-input"
                type="text"
                placeholder="Street, Postal Code"
                className="w-full py-3 pl-4 pr-32 text-gray-800 text-lg focus:outline-none bg-transparent"
              />

              {/* "Locate me" button/icon inside the input field */}
              <button className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#5a1e5a] font-medium hover:text-[#702870] cursor-pointer">
                {/* Location icon (using a placeholder/simple character here) */}
                <span className="text-2xl mr-2">
                  <span style={{ color: "#E91E63" }}>&#x2316;</span>
                  {/* Actual icon would be an SVG for the compass/target */}
                </span>
                Locate me
              </button>
            </div>


            <button className="shrink-0 ml-4 h-12 w-14 rounded-lg bg-[#5a1e5a] hover:bg-[#702870] transition duration-150 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </div>

          
            <div className="mt-10 p-6 border border-red-200 bg-red-50 rounded-xl flex items-start gap-4">
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center rounded-full">
                <svg
                  className="w-7 h-7 text-red-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v4m0 4h.01M4.93 4.93l14.14 14.14M9.17 9.17l5.66 5.66M12 2a10 10 0 100 20 10 10 0 000-20z"
                  />
                </svg>
              </div>

              {/* Text */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Sorry, we’re not operating in your area yet
                </h3>
                <p className="text-gray-600 mt-1">
                  We’re working hard to expand our services. Please check back
                  soon or try another location.
                </p>
              </div>
            </div>

          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4 text-gray-900">
              Suggest locations
            </h3>
            <div className="space-y-3">
              {/* Suggestion Item */}
              <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <CiLocationOn size={25} color="#5a1e5a" />
                </div>

                <div className="ml-4">
                  <p className="font-medium text-gray-900">Mirpur DOHS</p>
                  <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
                </div>
              </div>

              {/* Suggestion Item */}
              <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                <div className="shrink-0 w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <CiLocationOn size={25} color="#5a1e5a" />
                </div>

                <div className="ml-4">
                  <p className="font-medium text-gray-900">Banani 11</p>
                  <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
                </div>
              </div>

              {/* Suggestion Item */}
              <div className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition">
                <div className="shrink-0 w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center">
                  <CiLocationOn size={25} color="#5a1e5a" />
                </div>

                <div className="ml-4">
                  <p className="font-medium text-gray-900">Uttara Sector 10</p>
                  <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-gray-100 bg-gray-50 rounded-b-lg">
          <button className="text-sm text-gray-500 hover:text-gray-700 flex items-center">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationPopup;
