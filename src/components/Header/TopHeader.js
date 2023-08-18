import Image from "next/image";
import Link from "next/link";

import { BsFacebook, BsTelephoneInbound, BsYoutube } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import {
  AiFillInstagram,
  AiOutlineLogin,
  AiFillEye,
  AiFillUnlock,
  AiFillEyeInvisible,
} from "react-icons/ai";
import { BiLogOutCircle, BiUser } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

export default function TopHeader() {
  return (
    <div className="hidden md:block bg-primary py-1 border-b text-base-100/80">
      <div className="container mx-auto font-medium">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            <ul className="flex items-center gap-2">
              <li>
                <Link
                  href="https://www.facebook.com/beautyqueen5962"
                  target="_blank"
                  className="hover:text-base-100 duration-200"
                >
                  <BsFacebook />
                </Link>
              </li>
              <li>
                <Link
                  href="https://api.whatsapp.com/send?phone=8801768765962"
                  target="_blank"
                  className="hover:text-base-100 duration-200"
                >
                  <IoLogoWhatsapp className="text-[15px]" />
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-base-100 duration-200">
                  <AiFillInstagram className="text-[15px]" />
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-base-100 duration-200">
                  <BsYoutube className="text-[15px]" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-6">
            <ul className="flex gap-4 items-center font-medium">
              <li className="border-r pr-3">
                <Link
                  href="tel: 01706260994"
                  className="flex items-center gap-1 hover:text-base-100 duration-200"
                >
                  <BsTelephoneInbound className="text-[13px]" />
                  +880 1706260994
                </Link>
              </li>

              <li>
                <Link
                  href="tel: 01706260994"
                  className="flex items-center gap-1 hover:text-base-100 duration-200"
                >
                  <MdOutlineEmail className="text-[17px]" />
                  usnotashop@gmail.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
