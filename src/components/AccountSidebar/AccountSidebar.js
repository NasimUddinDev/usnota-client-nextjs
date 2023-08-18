import ActiveLink from "@/components/ActiveLink/ActiveLink";
import { FaRegUser } from "react-icons/fa";
import { AiOutlineUnorderedList,AiOutlineHeart } from "react-icons/ai";
import { BiLike } from "react-icons/bi";

export default function AccountSidebar() {
    return (
      <div className="accountSidebar w-60 h-[65vh] overflow-auto shadow-lg p-3">
        <p className="text-sm text-neutral/70">Hello, Nasim Uddin</p>

        <h2 className="font-medium border-b pb-1 mt-3 mb-2">Manage Account</h2>
        <ul className="text-[15px] text-neutral/80">
            <li>
                <ActiveLink href="/account/profile" className="block px-2 py-[2px] hover:bg-gray-100 hover:text-primary duration-200 flex items-center gap-[6px]">
                    <FaRegUser className="text-sm"/>
                    My Profile
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/account/orders" className="block px-2 py-[2px] hover:bg-gray-100 hover:text-primary duration-200 flex items-center gap-[6px]">
                    <AiOutlineUnorderedList />
                    My Order List
                </ActiveLink>
            </li>
            <li>
                <ActiveLink href="/account/wishlist" className="block px-2 py-[2px] hover:bg-gray-100 hover:text-primary duration-200 flex items-center gap-[6px]">
                    <AiOutlineHeart />
                    My Wishlist
                </ActiveLink>
            </li>
        </ul>
      </div>
    )
  }