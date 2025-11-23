import React, { useState } from "react";

const EditProfile = () => {
  const [name, setName] = useState("Md Sajib Shikder");
  const [email, setEmail] = useState("sajibshikder78971@gmail.com");
  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(
    "https://placehold.co/40x40/cccccc/ffffff?text="
  );

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatarFile(file);
      setAvatarPreview(URL.createObjectURL(file));
    } else {
      setAvatarFile(null);
      setAvatarPreview("https://placehold.co/40x40/cccccc/ffffff?text=");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Profile Updated:", { name, email, avatarFile });
    alert("Profile updated successfully!");
  };

  return (
    <div className="min-h-[calc(100vh-84px)] flex items-center justify-center p-4 bg-gray-100">
      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <h1 className="text-2xl font-semibold text-gray-800 mb-8">
          Update Profile
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-base font-medium text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 outline-0 border border-gray-300 rounded-xl focus:border-[#491648] focus:ring-1 focus:ring-[#491648] transition duration-150"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-base font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 outline-0 border border-gray-300 rounded-xl focus:border-[#491648] focus:ring-1 focus:ring-[#491648] transition duration-150"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-base font-medium text-gray-700 mb-2">
              Avatar
            </label>
            <div className="flex items-center space-x-4">
              <img
                className="h-12 w-12 rounded-full object-cover shadow-sm"
                src={avatarPreview}
                alt="Avatar Preview"
              />
              <input
                type="text"
                className="grow hidden md:block px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none bg-gray-50 text-gray-700 cursor-default"
                value={avatarFile ? avatarFile.name : "Choose Avatar"}
                readOnly
              />
              <label className="relative w-full md:w-auto cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-md md:rounded-l-none md:rounded-r-lg shadow-sm transition duration-150 -ml-1">
                <span>Browse</span>
                <input
                  type="file"
                  className="sr-only"
                  accept="image/*"
                  onChange={handleAvatarChange}
                />
              </label>
            </div>
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

export default EditProfile;
