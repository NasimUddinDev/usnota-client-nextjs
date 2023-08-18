import { TbEdit } from "react-icons/tb";
import { MdOutlineFileUpload } from "react-icons/md";

export default function Profile() {
  return (
    <div>
       <div>
        <div className="bg-accent/70 rounded-md lg:grid grid-cols-3 gap-6">
          <div className="bg-primary/70 rounded-md flex flex-col justify-center items-center py-4 text-base-100 font-medium">
            <img
              src="https://www.gannett-cdn.com/presto/2018/09/10/USAT/8ac92bec-3802-41a7-aa7a-39c3fec5d79c-EPA_FILE_BELGIUM_ALIBABA_GROUP_COMPANY_INFORMATION_PEOPLE.JPG"
              alt=""
              className="w-28 h-28 rounded-full"
            />
            <h1 className="mt-2 text-xl">Jack Ma</h1>
          </div>

          <div className="col-span-2 grid grid-cols-2 lg:grid-cols-4 gap-4 items-center text-center text-neutral py-5">
            <div className="border-r border-neutral/50">
              <h1 className="font-medium">My Order</h1>
              <p className="font-medium">৳00</p>
            </div>
            <div className="lg:border-r border-neutral/50">
              <h1 className="font-medium">My Wishlist</h1>
              <p className="font-medium">৳00</p>
            </div>
            <div className="border-r border-neutral/50">
              <h1 className="font-medium">Followed Store</h1>
              <p className="font-medium">৳00</p>
            </div>
            <div>
              <h1 className="font-medium">Voucher</h1>
              <p className="font-medium">৳00</p>
            </div>
          </div>
        </div>

        {/* Input Profile */}

        <div className="grid lg:grid-cols-3 gap-4 bg-base-100 mt-6 p-4 rounded-md">
          <div className="border rounded-md p-4 col-span-2">
            <div>
              <div>
                <input
                  type="text"
                  className="w-full border outline-none rounded px-3 py-1.5 mb-4 "
                  defaultValue="Jack Ma"
                  placeholder="Full Name"
                  disabled
                />
              </div>
              <div>
                <input
                  type="text"
                  className="w-full border outline-none rounded px-3 py-1.5 mb-4 bg-gray-100"
                  defaultValue="01618004406"
                  disabled
                />
              </div>

              <div>
                <input
                  type="email"
                  className="w-full border outline-none rounded px-3 py-1.5 mb-4"
                  defaultValue="jackma@gmail.com"
                  placeholder="Email"
                  disabled
                />
              </div>
              <div>
                <button className="text-center w-full bg-primary text-base-100 py-2 rounded scale-[1] hover:scale-[.99] duration-300">
                  Edit Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
