import Image from "next/image";
import { useState } from "react";
import { AiFillUnlock, AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { BsPhoneFill } from "react-icons/bs";

export default function SignupForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handelSignup = (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const password = form.password.value;

    const newUser = {
      name,
      email,
      number,
      password,
    };

    fetch("https://usnota-server.vercel.app/api/v1/user/process-register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert(data.message);
          form.reset();
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <img
        src="/logo.png"
        alt=""
        className="w-32 mx-auto"
        width="100"
        height="100"
      />
      <h6 className="text-lg font-medium mt-2 text-center">signup</h6>

      <form onSubmit={handelSignup}>
        <div className="mt-10 text-neutral">
          <div className="relative mb-6">
            <span className="absolute bottom-2 text-neutral/80">
              <FaUserEdit />
            </span>
            <input
              type="text"
              name="name"
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
              name="email"
              placeholder="Email"
              className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light"
              required
            />
          </div>

          <div className="relative mb-6">
            <span className="absolute bottom-2 text-neutral/80">
              <BsPhoneFill />
            </span>
            <input
              type="text"
              name="number"
              placeholder="Number"
              className="w-full border-b focus:border-b-primary outline-none pl-8 pb-1 placeholder:font-light"
              required
            />
          </div>

          <div className="relative mb-6">
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

          <div>
            <div className="flex flex-col w-full border-opacity-50">
              <button
                type="submit"
                className="w-full py-2 font-semibold text-base-100 bg-primary rounded hover:bg-opacity-90 duration-300"
                disabled={loading && true}
              >
                {loading ? "Loading..." : "Sign Up"}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
