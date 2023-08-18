import { TbTruckDelivery } from "react-icons/tb";
import { MdVerified } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

const Services = () => {
  return (
    <div className="my-5">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="shadow-lg border border-gray-300 rounded p-4 flex gap-4 justify-center items-center">
            <div>
              <TbTruckDelivery className="text-4xl text-primary" />
            </div>
            <div>
              <h6 className="text-lg">Cash On Delivery</h6>
              <p className="text-[13px] text-neutral/90">
                Lorem ipsum dolor, sit amet
              </p>
            </div>
          </div>

          <div className="shadow-lg border border-gray-300 rounded p-4 flex gap-4 justify-center items-center">
            <div>
              <MdVerified className="text-3xl  text-secondary" />
            </div>
            <div>
              <h6 className="text-lg">100% Authentic Product</h6>
              <p className="text-[13px] text-neutral/90">
                Our all product 100% Authentic
              </p>
            </div>
          </div>

          <div className="shadow-lg border border-gray-300 rounded p-4 flex gap-4 justify-center items-center">
            <div>
              <BiSupport className="text-3xl text-green-500" />
            </div>
            <div>
              <h6 className="text-lg">Support 24/7</h6>
              <p className="text-[13px] text-neutral/90">
                Contact us 24 hours a day
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
