import React, { useState } from "react";

const ChangePassword = () => {
  const [input, setInput] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
  };

  return (
    <div className="min-h-[calc(100vh-84px)] flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800 mb-8">
          Change Password
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="oldPassword"
              className="block text-base font-medium text-gray-700 mb-2"
            >
              Old Password
            </label>
            <input
              type="password"
              id="oldPassword"
              name="oldPassword"
              className="w-full px-4 py-3 outline-0 border border-gray-300 rounded-xl focus:border-[#491648] focus:ring-1 focus:ring-[#491648] transition duration-150"
              value={input.oldPassword}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              htmlFor="newPassword"
              className="block text-base font-medium text-gray-700 mb-2"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className="w-full px-4 py-3 outline-0 border border-gray-300 rounded-xl focus:border-[#491648] focus:ring-1 focus:ring-[#491648] transition duration-150"
              value={input.newPassword}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label
              htmlFor="confirmNewPassword"
              className="block text-base font-medium text-gray-700 mb-2"
            >
              New Password
            </label>
            <input
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              className="w-full px-4 py-3 outline-0 border border-gray-300 rounded-xl focus:border-[#491648] focus:ring-1 focus:ring-[#491648] transition duration-150"
              value={input.confirmNewPassword}
              onChange={handleInputChange}
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 px-6 bg-[#491648] hover:bg-[#6E3B72] text-white font-semibold rounded-lg shadow-md transition duration-200 active:scale-[0.99]"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
