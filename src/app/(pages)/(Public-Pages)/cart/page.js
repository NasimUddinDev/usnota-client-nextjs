import CartItems from "./CartItems/CartItems";
import CartDetails from "./CartDetails/CartDetails";

const Cart = () => {
//   window.scroll(0, 0);
//   const { cart } = UseContext();
//   console.log(cart);
const cart = [];

  return (
    <div className="py-5 min-h-[60vh]">
      <div className="w-[90%] xl:w-[1280px] mx-auto">
        <p className="text-center text-xl font-medium mb-8">
          Your Cart - <span>{cart?.length ? cart.length : "0"}</span>{" "}
          {cart?.length ? (cart.length < 2 ? "Item" : "Items") : "Item"}
        </p>
        <div className="lg:flex gap-10">
          <div className="lg:w-[75%] pt-6 shadow-lg border rounded">
            <div className="relative overflow-x-auto">
              <table className="w-full text-left">
                <thead className="uppercase border-b">
                  <tr>
                    <th className="px-6 py-2 text-sm font-semibold">
                      Product
                    </th>
                    <th className="px-6 py-2 text-sm font-semibold">
                      Price
                    </th>
                    <th className="px-6 py-2 text-sm font-semibold">
                      QUANTITY
                    </th>
                    <th className="px-6 py-2 text-sm font-semibold">
                      Total
                    </th>
                    <th className="px-6 py-2 text-sm font-semibold">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cart.length > 0 ? (
                    cart?.map((product, i) => (
                      <CartItems key={i} product={product} />
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center py-10 font-medium">
                        No Product
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="lg:w-[25%]">
            <CartDetails cart={cart} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
