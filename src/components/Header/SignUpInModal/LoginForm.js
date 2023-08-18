import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillUnlock, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

export default function LoginForm() {
  const [showPassword,setShowPassword] = useState(false);
  const [loginError,setLoginError] = useState("");
  const [loading,setLoading] = useState(false);

  const handelLogin = e => {
    e.preventDefault();

    setLoading(true)

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const loginInfo = {
      email,
      password,
    };

    fetch("http://localhost:5000/api/v1/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data?.status === "fail"){
          setLoginError(data.message)
        }
        if (data?.status === "success") {
          localStorage.setItem("usnota_jwt", data?.token);
          form.reset()
        }
      })
      .catch((error) => {
        console.log(error);
      }).finally(()=>{
        setLoading(false)
      })
  }

  return (
    <div>
      <img src="/logo.png" alt="" className="w-32 mx-auto" width="100" height="100" />
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
                type={ `${showPassword ? "text" : "password"}`}
                name="password"
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
          </div>

          {
            loginError && <p className="text-sm text-red-500">{loginError}</p>
          }

          <div className="mb-4 flex justify-between items-center">
            <label className="label gap-2 justify-start items-center cursor-pointer">
              <input
                type="checkbox"
                className="checkbox checkbox-xs"
              />
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
                {
                  loading ? "Loading..." : "Log In"
                }
              </button>
            </div>
          </div>
        </div>
      </form> 

    </div>
  )
}
