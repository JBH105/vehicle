import GlobalContext from "@/Context/AuthProvider";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const Login = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({});
  const { handleCreateUser, user } = useContext(GlobalContext);

  const HandleUserData = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };
  useEffect(() => {
    // Check if the user is already authenticated
    if (user) {
      router.push("/vehicle/vehiclelist"); // Redirect to the desired page
    }
  }, [user]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    userData.apitype = "Login";
    try {
      const { data } = await handleCreateUser(userData);
      localStorage.setItem("token", data?.token);
      localStorage.setItem("id", data?.user?._id);
      router.push("/vehicle/vehiclelist");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="flex font-sans min-h-screen flex-1">
      <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6  ">
        <div className="mx-auto w-full bg-white max-w-lg p-2 md:p-[56px] ">
          <div className="flex items-end  justify-center">
            {
              //  <Image
              //   alt="logo"
              //   src="/assets/icons/logo.png"
              //   width={100}
              //   height={100}
              // />
            }
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
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      onChange={(e) => HandleUserData(e)}
                      required
                      className="block w-full px-6 text-[#6e6e6e] rounded-md border border-[#f0f1f5] focus:border-orange transition duration-300 focus:outline-none focus:ring-0  shadow-none rounded-md bg-white "
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
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      onChange={(e) => HandleUserData(e)}
                      autoComplete="current-password"
                      required
                      className="block w-full px-6 text-[#6e6e6e] rounded-md border border-[#f0f1f5] focus:border-orange transition duration-300 focus:outline-none focus:ring-0  shadow-none rounded-md bg-white"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 rounded border-gray-300 text-orange focus:ring-orange"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-3 block text-sm leading-6 text-gray-700"
                    >
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm leading-6">
                    <Link
                      href="/admin/forgotpassword"
                      className="font-medium text-gray-500 hover:text-orange transition duration-200"
                    >
                      Forgot password?
                    </Link>
                  </div>
                </div>
                <div>
                  {/* <Link href="/admin/dashboard"> */}
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-orange px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-darkolivegreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-darkolivegreen"
                  >
                    Sign in
                  </button>
                  {/* </Link> */}
                </div>
              </form>
            </div>
            <div className="mt-5">
              <p className="text-gray500">
                Don't have an account?
                <Link href="/auth/signup" className="text-orange">
                  {" "}
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
