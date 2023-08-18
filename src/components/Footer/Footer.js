import Link from "next/link";

import { BsFacebook, BsYoutube } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { AiFillInstagram} from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="p-10 bg-gray-100">
      <div  className="container">
        <div className="grid grid-cols-4 gap-4">
          <div>
            <Link href="/">
              <img src="/logo.png" className="w-60" alt="logo" />
            </Link>
            <p className="mt-3 text-neutral/50 text-sm">Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat. Pressa fåmoska. Aposkop redelingar nede, sektigt.</p>
          </div>

          <div>
            <h2 className="font-semibold text-[15px]">Need Help?</h2> 
            <ul className="mt-3">
              <li className="text-xl font-medium">(+880) 1706 260 994</li>
              <li><Link href="" className="text-sm text-primary hover:underline">beautyqueen@gmail.com</Link></li>
              <li className="mt-2 text-neutral/50 text-sm">Saturday–Friday: 24 Hour</li>
            </ul>
          </div> 

          <div>
            <h2 className="font-semibold text-[15px]">Quick link</h2> 
            <ul className="mt-2 text-sm text-neutral/70">
              <li>
                <Link href="/" className="hover:text-primary hover:underline duration-200">Home</Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-primary hover:underline duration-200">Shop</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-primary hover:underline duration-200">About Us</Link>
              </li>
              <li>
                <Link href="faq" className="hover:text-primary hover:underline duration-200">FAQ</Link>
              </li>
            </ul>
          </div> 

          <div>
            <h2 className="font-semibold text-[15px]">Legal</h2> 
            <ul className="mt-2 text-sm text-neutral/70">
              <li>
                <Link href="/" className="hover:text-primary hover:underline duration-200">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-primary hover:underline duration-200">Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="faq" className="hover:text-primary hover:underline duration-200">My Account</Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-primary hover:underline duration-200">Order Tracking</Link>
              </li>
              <li>
                <Link href="faq" className="hover:text-primary hover:underline duration-200">My Order</Link>
              </li>
              <li>
                <Link href="faq" className="hover:text-primary hover:underline duration-200">My Wishlist</Link>
              </li>
            </ul>
          </div> 
        </div>

        <div className="mt-6 pt-3 text-sm text-neutral/70 border-t border-gray-300">
          <div className="flex justify-between items-center">
            <p>Copyright © 2023 - All right reserved</p>


            <ul className="flex items-center gap-3">
              <li>
                <Link
                  href="https://www.facebook.com/beautyqueen5962"
                  target="_blank"
                  className="hover:text-primary duration-200"
                >
                  <BsFacebook className="text-lg"/>
                </Link>
              </li>
              <li>
                <Link
                  href="https://api.whatsapp.com/send?phone=8801768765962"
                  target="_blank"
                  className="hover:text-primary duration-200"
                >
                  <IoLogoWhatsapp className="text-xl" />
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-primary duration-200">
                  <AiFillInstagram className="text-xl" />
                </Link>
              </li>
              <li>
                <Link href="" className="hover:text-primary duration-200">
                  <BsYoutube className="text-xl" />
                </Link>
              </li>
            </ul>
          </div>
        </div> 
      </div>
    </footer>
  );
}
