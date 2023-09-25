"use client";
import Link from "next/link";
import { useState } from "react";

import { AiFillUnlock, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";

import Head from "next/head";
import { UseContext } from "@/app/context/context";
import Header from "@/components/Header/Header";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const { login, loginError, loading } = UseContext();

  const handelLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const loginInfo = {
      email,
      password,
    };

    login(loginInfo);

    form.reset();
  };

  return (
    <>
      <Head>
        <title>Join - Instantkaj</title>
      </Head>
      {/* <Header/>    */}
      <div className="flex justify-center items-center h-screen">
        <div className="w-[95%] sm:w-96 shadow-lg p-6 rounded">
          <img
            src="/logo.png"
            alt=""
            className="w-32 mx-auto"
            width="100"
            height="100"
          />
          <h6 className="text-lg font-medium mt-2 text-center">Login</h6>

          <form onSubmit={handelLogin}>
            <div className="mt-10 text-neutral">
              <div className="mb-6">
                <div className="relative">
                  <span className="absolute bottom-2 text-neutral/80">
                    <MdEmail />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light"
                    required
                  />
                </div>
              </div>

              <div className="mb-2">
                <div className="relative">
                  <span className="absolute bottom-2 text-neutral/80">
                    <AiFillUnlock className="text-lg" />
                  </span>

                  <input
                    type={`${showPassword ? "text" : "password"}`}
                    name="password"
                    placeholder="Password"
                    className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light"
                    required
                  />

                  <div
                    className="absolute right-2 bottom-2 cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <span className={`${showPassword ? "block" : "hidden"}`}>
                      <AiFillEye />
                    </span>
                    <span className={`${showPassword ? "hidden" : "block"}`}>
                      <AiFillEyeInvisible />
                    </span>
                  </div>
                </div>
              </div>

              {loginError && (
                <p className="text-sm text-red-500">{loginError}</p>
              )}

              <div className="mb-4 flex justify-between items-center">
                <label className="label gap-2 justify-start items-center cursor-pointer">
                  <input type="checkbox" className="checkbox checkbox-xs" />
                  <span className="label-text">Remember me</span>
                </label>

                <div>
                  <Link
                    href="/forgot-password"
                    className="text-[13px] text-neutral/70 underline hover:text-primary duration-300"
                  >
                    Forgot Password?
                  </Link>
                </div>
              </div>

              <div>
                <div className="flex flex-col w-full border-opacity-50">
                  <button
                    type="submit"
                    className="w-full py-2 font-semibold text-base-100 bg-primary rounded hover:bg-opacity-90 duration-300"
                    disabled={loading && true}
                  >
                    {loading ? "Loading..." : "Log In"}
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div>
            <div className="divider text-neutral/50">OR</div>
            <button className="mt-4 w-full py-2 font-medium text-neutral border border-neutral/50 rounded hover:bg-opacity-90 duration-300 flex gap-4 justify-center items-center">
              <FcGoogle className="text-xl" /> Continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
