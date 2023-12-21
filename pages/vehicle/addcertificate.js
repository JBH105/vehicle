import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import GlobalContext from "@/Context/AuthProvider";

const AddCertificate = () => {
  const router = useRouter();
  const { handleCreateCertificate, user } = useContext(GlobalContext);
  const [document, setDocument] = useState("");
  const [inputList, setInputList] = useState([{}]);

  const handleAddClick = () => {
    setInputList([...inputList, {}]);
  };
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleInputTextChange = (e, index) => {
    const { name } = e.target;
    const text = e.target.value;
    const list = [...inputList];
    list[index][name] = text;
    setInputList(list);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newData = inputList.map((item) => {
      item.document = document;
      item.userID = user?._id;
      item.startnumber = parseInt(item.startnumber);
      item.endnumber = parseInt(item.endnumber);
      return item
    });
    const body = {
      data: newData,
      apitype: "CertificateRegister",
    };
    try {
      await handleCreateCertificate(body);
      setInputList([{}]);
      setDocument("");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="px-3 sm:px-10">
      <h4 className="text-[24px] dark:text-white font-medium text-gray-900">
        Add New Certificate
      </h4>
      <div className="bg-white dark:bg-[#0c1a32] grid mt-8 rounded-md shadow-sm align-middle p-4 sm:p-6 lg:p-8">
        <form
          action="#"
          method="POST"
          className="space-y-6 h-full flex flex-col"
          onSubmit={handleSubmit}
        >
          <div className="item-center">
            {inputList.map((item, i) => {
              return (
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 item-center">
                  <div className="mb-2">
                    <label
                      htmlFor="menuname"
                      className="block font-bold text-[14px] md:text-[16px]  leading-6 text-gray500"
                    >
                      Start Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="startnumber"
                        type="number"
                        required
                        value={item?.startnumber}
                        onChange={(e) => handleInputTextChange(e, i)}
                        className="block w-full px-6 text-[#6e6e6e] max-w-[500px] dark:text-gray-300 dark:bg-[#20304c] rounded-md border border-[#f0f1f5] focus:border-orange transition duration-300 focus:outline-none focus:ring-0  shadow-none rounded-md bg-white"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="menuname"
                      className="block font-bold text-[14px] md:text-[16px]  leading-6 text-gray500"
                    >
                      End Number
                    </label>
                    <div className="mt-2">
                      <input
                        id="name"
                        name="endnumber"
                        type="number"
                        required
                        value={item?.endnumber}
                        onChange={(e) => handleInputTextChange(e, i)}
                        className="block w-full px-6 text-[#6e6e6e] max-w-[500px] dark:text-gray-300 dark:bg-[#20304c] rounded-md border border-[#f0f1f5] focus:border-orange transition duration-300 focus:outline-none focus:ring-0  shadow-none rounded-md bg-white"
                      />
                    </div>
                  </div>
                  <div className="mt-[31px] flex items-center justify-center ">
                    <button
                      className="mr-4 rounded group cursor-pointer hover:bg-cyan-600 bg-white"
                      onClick={handleAddClick}
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
                          clipRule="evenodd"
                          fill="#fff"
                          className="group-hover:fill-white fill-cyan-600"
                        />
                      </svg>
                    </button>
                    <button
                      className="rounded group cursor-pointer hover:bg-white bg-cyan-600"
                      disabled={inputList.length === 1}
                      onClick={() => handleRemoveClick(i)}
                      type="button"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
                          clipRule="evenodd"
                          fill="#fff"
                          className="group-hover:fill-cyan-600"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="sm:col-span-2 mt-4">
            <label
              htmlFor="menuname"
              className="block font-bold text-[14px] md:text-[16px] leading-6 text-gray500"
            >
              Document Link
            </label>
            <div className="mt-2">
              <input
                id="description"
                name="document"
                required
                type="text"
                value={document}
                onChange={(e) => setDocument(e.target.value)}
                className="block w-full px-6 text-[#6e6e6e] rounded-md border border-[#f0f1f5] focus:border-orange dark:text-gray-300 dark:bg-[#20304c] transition duration-300 focus:outline-none focus:ring-0  shadow-none rounded-md bg-white"
              />
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

export default AddCertificate;
