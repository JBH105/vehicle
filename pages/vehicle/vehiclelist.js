import GlobalContext from "@/Context/AuthProvider";
import NoItemFound from "@/components/NoItemFound";
import React, { useContext, useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

export default function Vehiclelist() {
  const { handleGetVehicle, user } = useContext(GlobalContext);
  const [vehicleData, setVehicleData] = useState();

  useEffect(() => {
    async function Data() {
      if (user) {
        const { data } = await handleGetVehicle(user?._id);
        setVehicleData(data);
      }
    }
    Data();
  }, [user]);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1">
      {vehicleData?.length > 0 ? (
        vehicleData?.map((items, index) => {
          return (
            <div
              key={index}
              className="px-4 cursor-pointer md:group py-5 border-transparent radius-2 "
            >
              <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="flex justify-between">
                  <div className="flex items-center">
                    <AiOutlineUser className="mr-1.5 w-5 h-5" />
                    <span className="mb-2 text-xl font-medium tracking-tight text-gray-900 dark:text-white">
                      {items?.firstname} {items?.lastname}
                    </span>
                  </div>
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {items?.vehicleno}
                  </h5>
                </div>
                <div className="flex items-center">
                  <BsTelephone className="mr-1.5 w-5 h-5" />
                  <span className="text-bold font-medium text-[19px]">
                    {items?.phonenumber}
                    <br />
                    {items?.phonenumber2}
                  </span>
                </div>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {items?.description}
                </p>
              </div>
            </div>
          );
        })
      ) : (
        <NoItemFound />
      )}
    </div>
  );
}
