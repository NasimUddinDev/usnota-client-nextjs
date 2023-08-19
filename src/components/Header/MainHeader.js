"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

import { BsSearch } from "react-icons/bs";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import {
  AiOutlineLogin,
  AiOutlineUnorderedList,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { BiUser, BiLogOutCircle } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";

import SignUpInModal from "./SignUpInModal/SignUpInModal";
import { UseContext } from "@/app/context/context";

export default function MainHeader() {
  const [formToggle, setFormToggle] = useState("login");
  const [accountDropdown, setAccountDropdown] = useState(false);
  const { loggedUser, setLoggedUser } = UseContext();
  console.log(loggedUser);

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (
        !e.target.closest(".accountDropdownBtn") &&
        !e.target.closest(".userInfo")
      ) {
        setAccountDropdown(false);
      }
    });
  }, []);

  const handelLogout = () => {
    localStorage.removeItem("usnota_jwt");
    setLoggedUser(null);
  };

  return (
    <div className="py-2 text-neutral border-b sticky top-0 z-40 bg-[#ffffffcc] lg:backdrop-blur-[30px] backdrop-saturate-[200%]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between gap-4">
          <div className="hidden md:block">
            <Link href="/">
              <img src="/logo.png" className="w-32" alt="logo" />
            </Link>
          </div>

          <div className="w-full md:w-3/6">
            <div className="relative flex">
              <input
                type="text"
                placeholder="search Product..."
                className="searchInput border w-full px-3 py-1.5 rounded outline-none rounded-r-0 border-r-0"
              />
              <div className="px-3 text-lg text-base-100 bg-primary flex justify-center items-center rounded-r">
                <BsSearch />
              </div>
            </div>
          </div>

          <div className="hidden md:flex gap-2 lg:gap-4 items-center text-sm lg:text-base">
            <Link
              href="/account/wishlist"
              className="flex gap-1 items-center text-neutral hover:text-primary duration-300"
            >
              <FiHeart className="text-xl" />
              <h1 className="font-medium">wishlist</h1>
            </Link>

            <Link
              href="/cart"
              className="flex gap-3 items-end hover:text-primary duration-300"
            >
              <div className="relative ">
                <RiShoppingCartLine className="text-2xl" />
                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold bg-primary text-base-100 border-base-100 rounded-full -top-3 -right-3">
                  0
                </div>
              </div>
              <h1 className="font-medium">৳00</h1>
            </Link>

            {loggedUser?.status === "success" ? (
              <div className="relative">
                <button
                  onClick={() => setAccountDropdown(!accountDropdown)}
                  className="accountDropdownBtn flex gap-1 items-center hover:text-primary duration-200"
                >
                  <img
                    src="https://media.licdn.com/dms/image/D5603AQEIFcE9pxKiAg/profile-displayphoto-shrink_800_800/0/1667554978281?e=2147483647&v=beta&t=6qjppzr7fOdgk5I5VRgx1lQJVHpBtu--X1dr3vl88YY"
                    alt=""
                    className="w-6 h-6 rounded-full"
                  />
                  <h2>{loggedUser?.data?.name}</h2>
                </button>

                {accountDropdown && (
                  <ul className="absolute min-w-52 w-max bg-base-100 right-0 top-[41px] shadow-lg rounded z-50 overflow-hidden text-neutral">
                    <li className="border-b p-2 userInfo">
                      <div className="flex gap-2 items-center">
                        <img
                          src="https://media.licdn.com/dms/image/D5603AQEIFcE9pxKiAg/profile-displayphoto-shrink_800_800/0/1667554978281?e=2147483647&v=beta&t=6qjppzr7fOdgk5I5VRgx1lQJVHpBtu--X1dr3vl88YY"
                          alt=""
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h2>{loggedUser?.data?.name}</h2>
                          <p className="text-sm text-neutral/80">
                            {loggedUser?.data?.email}
                          </p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <Link
                        href="/dashboard"
                        className="border-b px-3 py-1.5 flex items-center gap-1 hover:bg-gray-200 hover:text-primary duration-300"
                      >
                        <RxDashboard className="text-base" /> Dashboard
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/account/profile"
                        className="border-b px-3 py-1.5 flex items-center gap-1 hover:bg-gray-200 hover:text-primary duration-300"
                      >
                        <BiUser className="text-base" /> Profile
                      </Link>
                    </li>

                    <li>
                      <Link
                        href="/account/orders"
                        className="border-b px-3 py-1.5 flex items-center gap-1 hover:bg-gray-200 hover:text-primary duration-300"
                      >
                        <AiOutlineUnorderedList className="text-base" /> My
                        Order
                      </Link>
                    </li>

                    <li>
                      <button
                        className="duration-200 px-3 py-1.5 flex items-center gap-1 hover:bg-gray-200 w-full text-primary"
                        onClick={handelLogout}
                      >
                        <BiLogOutCircle className="text-base" />
                        Logout
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            ) : (
              <div>
                <button
                  className="flex items-center gap-1 hover:text-primary duration-200"
                  onClick={() => {
                    setFormToggle("login");
                    window.my_modal_2.showModal();
                  }}
                >
                  <AiOutlineLogin className="text-lg" />
                  <h1 className="font-medium">Login</h1>
                </button>

                <SignUpInModal
                  setFormToggle={setFormToggle}
                  formToggle={formToggle}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
