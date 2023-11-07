import React, { useContext, useState } from "react";
import { useRouter } from "next/router";
import { BiSearchAlt } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import GlobalContext from "@/Context/AuthProvider";

const Search = () => {
  const router = useRouter();
  const { handleSearchCertificate, user } = useContext(GlobalContext);
  const [documentData, setDocumentData] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const value = event.target.value;
    const categoryData = {};
    categoryData.documentNumber = value;
    categoryData.apitype = "Certificate";
    try {
      const { data } = await handleSearchCertificate(user?._id, categoryData);
      setDocumentData(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="max-w-7xl w-full px-4  mx-auto">
      <div className="my-5 mx-4 justify-center pt-7 flex items-center relative">
        <h2 className="font-bold text-[24px] text-gray-800 text-center ">
          Search the Vehicle
        </h2>
        {/* <button onClick={() => router.back()} className='outline-none absolute right-0 focus:outline-none'><IoClose className='w-5 h-5 font-bold' /></button> */}
      </div>
      <div className="relative mx-4 max-w-2xl mx-auto">
        <input
          className="shadow-lg w-full transition duration-200 focus:ring-1 ring-orange outline-none rounded-full py-2  pl-[34px] pr-3 border"
          placeholder="Search here"
          onChange={handleSubmit}
        />
        <BiSearchAlt className="absolute top-[14px] left-[14px]" />
      </div>
      <div className="flex items-center">
        {documentData?.length > 0 ? (
          documentData?.map((items, index) => {
            return (
              <div
                key={index}
                className="px-4 cursor-pointer md:group py-12 border-transparent radius-2 "
              >
                <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                  <div className="flex justify-between">
                    <div className="flex items-center">
                      <span className="text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                        {items?.document}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="max-w-[300px] py-20 mx-auto text-center">
            <p className="text-[14px]  block leading-[24px] text-gray-500">
              You can search for <br /> menu item names or description.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
