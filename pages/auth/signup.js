import GlobalContext from "@/Context/AuthProvider";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";

const Register = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({});
  const { handleCreateUser } = useContext(GlobalContext);
  const [passwordType, setPasswordType] = useState("password");

  const HandleUserData = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    userData.apitype = "Register";
    try {
      const { data } = await handleCreateUser(userData);
      localStorage.setItem("token", data?.token);
      localStorage.setItem("id", data?.user?._id);
      router.push("/vehicle/vehiclelist");
    } catch (err) {
      console.error(err);
    }
  };

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <div className="flex font-sans min-h-screen flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6  ">
        <div className="mx-auto w-full bg-white max-w-lg p-2 md:p-[56px]">
          <div className="flex items-end  justify-center">
            <h1 className="text-xl md:text-2xl font-semibold text-darkolivegreen ">
              Vehicle
            </h1>
          </div>
          <div>
            <h2 className="mt-10 text-lg font-sans text-center text-black/[70%] font-bold leading-9 tracking-tight ">
              Sign in to your account
            </h2>
          </div>
          <div className="mt-6">
            <div>
              <form
                action="#"
                method="POST"
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block font-bold text-[14px] md:text-[16px]  leading-6 text-gray500"
                  >
                    Username
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="fullname"
                      type="text"
                      placeholder="Name"
                      onChange={(e) => HandleUserData(e)}
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
                      name="email"
                      type="email"
                      placeholder="Email"
                      required
                      onChange={(e) => HandleUserData(e)}
                      className="block w-full text-[14px] px-6 text-[#6e6e6e] rounded-md border border-[#f0f1f5] focus:border-orange transition duration-300 focus:outline-none focus:ring-0  shadow-none rounded-md bg-white "
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="block font-bold text-[14px] md:text-[16px]  leading-6 text-gray500"
                  >
                    Password
                  </label>
                  <div className="mt-2 relative">
                    <input
                      id="password"
                      name="password"
                      type={passwordType}
                      placeholder="Password"
                      required
                      onChange={(e) => HandleUserData(e)}
                      className="block w-full text-[14px] pr-[42px] pl-6 text-[#6e6e6e] rounded-md border border-[#f0f1f5] focus:border-orange transition duration-300 focus:outline-none focus:ring-0  shadow-none rounded-md bg-white"
                    />
                    <button
                      type="button"
                      className="absolute flex items-center justify-center right-0 text-gray-600 top-0 w-[42px] h-[42px]"
                      onClick={togglePassword}
                    >
                      <FontAwesomeIcon
                        icon={passwordType === "password" ? faEyeSlash : faEye}
                      />
                    </button>
                  </div>
                </div>

                <div>
                  {/* <Link href="/admin/register/verification"> */}
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-orange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-darkolivegreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkolivegreen"
                  >
                    Sign up
                  </button>
                  {/* </Link> */}
                </div>
              </form>
            </div>
            <div className="mt-5">
              <p className="text-gray500">
                Already have an account?
                <Link href="/auth/login" className="text-orange">
                  {" "}
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
