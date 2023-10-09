import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import GlobalContext from "@/Context/AuthProvider";

const AddCategories = () => {
  const router = useRouter();
  const [categoryData, setCategoryData] = useState({});
  const { id } = router.query;
  const { handleCreateVehicle, user } = useContext(GlobalContext);

  const handleCategories = (e) => {
    setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    categoryData.apitype = "VehicleRegister";
    categoryData.userID = user?._id;
    try {
      await handleCreateVehicle(categoryData);
      setCategoryData({});
      router.push("/vehicle/vehiclelist");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="px-3 sm:px-10">
      <h4 className="text-[24px] dark:text-white font-medium text-gray-900">
        Add New Vehicle
      </h4>
      <div className="bg-white dark:bg-[#0c1a32] grid mt-8 rounded-md shadow-sm align-middle p-4 sm:p-6 lg:p-8 min-h-[77vh]">
        <form
          action="#"
          method="POST"
          className="space-y-6 h-full flex flex-col"
          onSubmit={handleSubmit}
        >
          <div className="flex-1">
            <div className="sm:grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="menuname"
                  className="block font-bold text-[14px] md:text-[16px]  leading-6 text-gray500"
                >
                  First Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="firstname"
                    type="text"
                    required
                    value={categoryData?.firstname}
                    onChange={(e) => handleCategories(e)}
                    className="block w-full px-6 text-[#6e6e6e] max-w-[500px] dark:text-gray-300 dark:bg-[#20304c] rounded-md border border-[#f0f1f5] focus:border-orange transition duration-300 focus:outline-none focus:ring-0  shadow-none rounded-md bg-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="menuname"
                  className="block font-bold text-[14px] md:text-[16px]  leading-6 text-gray500"
                >
                  Last Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="lastname"
                    type="text"
                    required
                    value={categoryData?.lastname}
                    onChange={(e) => handleCategories(e)}
                    className="block w-full px-6 text-[#6e6e6e] max-w-[500px] dark:text-gray-300 dark:bg-[#20304c] rounded-md border border-[#f0f1f5] focus:border-orange transition duration-300 focus:outline-none focus:ring-0  shadow-none rounded-md bg-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="menuname"
                  className="block font-bold text-[14px] md:text-[16px]  leading-6 text-gray500"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="phonenumber"
                    type="number"
                    required
                    value={categoryData?.phonenumber}
                    onChange={(e) => handleCategories(e)}
                    className="block w-full px-6 text-[#6e6e6e] max-w-[500px] dark:text-gray-300 dark:bg-[#20304c] rounded-md border border-[#f0f1f5] focus:border-orange transition duration-300 focus:outline-none focus:ring-0  shadow-none rounded-md bg-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="menuname"
                  className="block font-bold text-[14px] md:text-[16px]  leading-6 text-gray500"
                >
                  Phone Number 2
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="phonenumber2"
                    type="number"
                    // required
                    value={categoryData?.phonenumber2}
                    onChange={(e) => handleCategories(e)}
                    className="block w-full px-6 text-[#6e6e6e] max-w-[500px] dark:text-gray-300 dark:bg-[#20304c] rounded-md border border-[#f0f1f5] focus:border-orange transition duration-300 focus:outline-none focus:ring-0  shadow-none rounded-md bg-white"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="menuname"
                  className="block font-bold text-[14px] md:text-[16px]  leading-6 text-gray500"
                >
                  Vehicle Number
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="vehicleno"
                    type="text"
                    required
                    value={categoryData?.vehicleno}
                    onChange={(e) => handleCategories(e)}
                    className="block w-full px-6 text-[#6e6e6e] max-w-[500px] dark:text-gray-300 dark:bg-[#20304c] rounded-md border border-[#f0f1f5] focus:border-orange transition duration-300 focus:outline-none focus:ring-0  shadow-none rounded-md bg-white"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="menuname"
                  className="block font-bold text-[14px] md:text-[16px]  leading-6 text-gray500"
                >
                  Ingredients and Description
                </label>
                <div className="mt-2">
                  <textarea
                    id="description"
                    name="description"
                    required
                    value={categoryData?.description}
                    onChange={(e) => handleCategories(e)}
                    className="block w-full px-6 text-[#6e6e6e] rounded-md border border-[#f0f1f5] focus:border-orange dark:text-gray-300 dark:bg-[#20304c] transition duration-300 focus:outline-none focus:ring-0  shadow-none rounded-md bg-white"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full mt-12 flex gap-4">
            <button
              type="submit"
              className="rounded outline-none shadow-sm bg-green-700 hover:bg-green-800 trnasition duration-200  ease-in text-white px-6 py-2"
            >
              Save
            </button>
            <button
              type="button"
              className="outline-none trnasition duration-200 hover:text-red-600 ease-in"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
// export async function getServerSideProps(ctx) {
//   const myCookie = ctx.req?.cookies || "";

//   if (!myCookie.authorization) {
//     return {
//       redirect: {
//         destination: "/admin/login",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// }

export default AddCategories;
