import Image from "next/image";
import { useState } from "react";
import { AiFillUnlock, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";

export default function SignupForm() {
  const [showPassword,setShowPassword] = useState(false);

  return (
    <div>
      <img src="/logo.png" alt="" className="w-32 mx-auto" width="100" height="100" />
      <h6 className="text-lg font-medium mt-2 text-center">signup</h6>

      <form>
        <div className="mt-10 text-neutral">
            <div className="relative mb-6">
              <span className="absolute bottom-2 text-neutral/80">
                <FaUserEdit />
              </span>
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light"
                required
              />
            </div>

            <div className="relative mb-6">
              <span className="absolute bottom-2 text-neutral/80">
                <MdEmail />
              </span>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light"
                required
              />
            </div>

            <div className="relative mb-6">
              <span className="absolute bottom-2 text-neutral/80">
                <AiFillUnlock className="text-lg" />
              </span>

              <input
                type={ `${showPassword ? "text" : "password"}`}
                placeholder="Password"
                className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light"
                required
              />

              <div
                className="absolute right-2 bottom-2 cursor-pointer"
                onClick={()=>setShowPassword(!showPassword)}
              >
                <span className={`${showPassword ? "block" : "hidden"}`}>
                  <AiFillEye />
                </span>
                <span className={`${showPassword ? "hidden" : "block"}`}>
                  <AiFillEyeInvisible />
                </span>
              </div>
            </div>

          <div>
            <div className="flex flex-col w-full border-opacity-50">
              <button
                type="submit"
                className="w-full py-2 font-semibold text-base-100 bg-primary rounded hover:bg-opacity-90 duration-300"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </form> 

    </div>
  )
}
