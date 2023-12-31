"use client";
import Tabs, { Tab } from "react-best-tabs";
import "react-best-tabs/dist/index.css";
import { BsBag } from "react-icons/bs";

export default function Orders() {
  return (
    <div className="p-2 rounded shadow-lg min-h-[65vh]">
        <Tabs activeTab="1" className="text-sm text-start">
            <Tab title="ALL ORDERS" className="mr-4">
                <div className="overflow-x-auto w-full mt-5">
                    <table className="w-full">
                        <tbody>
                        {/* row 1 */}
                        <tr>
                            <td className="py-2 px-4">
                            <div className="w-max flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img
                                    src="https://static-01.daraz.com.bd/p/51bbf8f46780bc334a79dbc386dd35f3.jpg"
                                    alt=""
                                    className="w-14 h-14"
                                    />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">Hart Hagerty</div>
                                <div className="text-sm opacity-50">
                                    United States
                                </div>
                                </div>
                            </div>
                            </td>
                            <td className="py-2 px-4">
                            <div className="w-max">
                                <p>
                                Order{" "}
                                <span className="text-primary">#600734770046582</span>
                                </p>
                                <p className="text-xs text-neutral/70">
                                Placed on 29 Jan 2019 00:35:39
                                </p>
                            </div>
                            </td>
                            <td className="py-2 px-4">
                            <p className="w-max">Qty: 1</p>
                            </td>
                            <td className="py-2 px-4">
                            <p className=" bg-error w-max px-4 py-1 rounded-md text-xs">
                                Cancelled
                            </p>
                            </td>
                        </tr>

                        {/* row 2 */}
                        <tr>
                            <td className="py-2 px-4">
                            <div className="w-max flex items-center space-x-3">
                                <div className="avatar">
                                <div className="mask mask-squircle w-12 h-12">
                                    <img
                                    src="https://static-01.daraz.com.bd/p/51bbf8f46780bc334a79dbc386dd35f3.jpg"
                                    alt=""
                                    className="w-14 h-14"
                                    />
                                </div>
                                </div>
                                <div>
                                <div className="font-bold">Hart Hagerty</div>
                                <div className="text-sm opacity-50">
                                    United States
                                </div>
                                </div>
                            </div>
                            </td>
                            <td className="py-2 px-4">
                            <div className="w-max">
                                <p>
                                Order{" "}
                                <span className="text-primary">#600734770046582</span>
                                </p>
                                <p className="text-xs text-neutral/70">
                                Placed on 29 Jan 2019 00:35:39
                                </p>
                            </div>
                            </td>
                            <td className="py-2 px-4">
                            <p className="w-max">Qty: 1</p>
                            </td>
                            <td className="py-2 px-4">
                            <p className=" bg-success w-max px-4 py-1 rounded-md text-xs">
                                Delivered
                            </p>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </Tab>
            <Tab title="PENDING" className="mr-4">
                <div className="mt-3 flex justify-center items-center h-60">
                <div className="text-center">
                    <div className="border border-neutral border-dashed w-20 h-20 flex justify-center items-center rounded-full mx-auto">
                    <BsBag className="text-xl" />
                    </div>
                    <h2 className="text-xl font-semibold mt-4">No orders found</h2>
                    <p>Place order & get back here to see your orders</p>
                </div>
                </div>
            </Tab>
            <Tab title="CANCELLED">
                <div className="overflow-x-auto w-full mt-5">
                <table className="w-full">
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <td className="py-2 px-4">
                        <div className="w-max flex items-center space-x-3">
                            <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img
                                src="https://static-01.daraz.com.bd/p/51bbf8f46780bc334a79dbc386dd35f3.jpg"
                                alt=""
                                className="w-14 h-14"
                                />
                            </div>
                            </div>
                            <div>
                            <div className="font-bold">Hart Hagerty</div>
                            <div className="text-sm opacity-50">
                                United States
                            </div>
                            </div>
                        </div>
                        </td>
                        <td className="py-2 px-4">
                        <div className="w-max">
                            <p>
                            Order{" "}
                            <span className="text-primary">#600734770046582</span>
                            </p>
                            <p className="text-xs text-neutral/70">
                            Placed on 29 Jan 2019 00:35:39
                            </p>
                        </div>
                        </td>
                        <td className="py-2 px-4">
                        <p className="w-max">Qty: 1</p>
                        </td>
                        <td className="py-2 px-4">
                        <p className=" bg-error w-max px-4 py-1 rounded-md text-xs">
                            Cancelled
                        </p>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
            </Tab>
        </Tabs>
    </div>
  )
}
