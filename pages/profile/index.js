import GlobalContext from "@/Context/AuthProvider";
import React, { useContext, useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(GlobalContext);
  const [userData, setUserData] = useState();
  console.log("🚀 ~ file: index.js:8 ~ Profile ~ userData:", userData)

  useEffect(() => {
    setUserData(user);
  }, [user]);

  return (
    <div className=" max-w-2xl mx-auto h-full flex flex-col">
      <div className="bg-orange/[30%] h-36 flex p-5   justify-center mb-[40px] relative">
        <h3 className="text-gray-700 font-semibold my-4 text-lg">Profile</h3>
        <div className="w-[80px] h-[80px] bg-white border-4 border-white absolute -bottom-[40px] rounded-full">
          <FaUserCircle className="w-full h-full text-gray-500" />
        </div>
      </div>

      <form
        action="#"
        method="POST"
        className="space-y-4 flex-1 p-5 flex flex-col"
        // onSubmit={handleSubmit}
      >
        <div className="flex-1 space-y-3">
          <div>
            <label
              htmlFor="email"
              className="block font-bold text-[14px] md:text-[16px]  leading-6 text-gray500"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                defaultValue={userData?.fullname}
                id="name"
                name="fullname"
                type="text"
                placeholder="Name"
                //   onChange={(e) => HandleUserData(e)}
                required
                className="block w-full text-[14px] px-6 text-[#6e6e6e] rounded-md border border-[#f0f1f5] focus:border-orange transition duration-300 focus:outline-none focus:ring-0  shadow-none rounded-md bg-white "
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block font-bold text-[14px] md:text-[16px]  leading-6 text-gray500"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                defaultValue={userData?.email}
                name="email"
                type="email"
                placeholder="Email"
                required
                //   onChange={(e) => HandleUserData(e)}
                className="block w-full text-[14px] px-6 text-[#6e6e6e] rounded-md border border-[#f0f1f5] focus:border-orange transition duration-300 focus:outline-none focus:ring-0  shadow-none rounded-md bg-white "
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="password"
              className="block font-bold text-[14px] md:text-[16px]  leading-6 text-gray500"
            >
              Change Password
            </label>
            <div className="mt-2 relative">
              <input
                id="password"
                name="password"
                type="text"
                placeholder="Password"
                required
                //   onChange={(e) => HandleUserData(e)}
                className="block w-full text-[14px] pr-[42px] pl-6 text-[#6e6e6e] rounded-md border border-[#f0f1f5] focus:border-orange transition duration-300 focus:outline-none focus:ring-0  shadow-none rounded-md bg-white"
              />
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="flex w-full  justify-center rounded-md bg-orange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-darkolivegreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkolivegreen"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
