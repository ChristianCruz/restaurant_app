import Image from "next/image";
import React from "react";

const CartPage = () => {
  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-red-500 lg:flex-row">
      {/* PRODUCTS CONTAINER */}
      <div className="h-1/2 p-4 flex flex-col justify-center overflow-hidden lg:h-full lg:w-2/3 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span className="text-slate-900">Large</span>
          </div>
          <h2 className="font-bold text-2xl">$19.99</h2>
          <span className="cursor-pointer">
            <Image src="/delete.png" alt="" width={20} height={20} />
          </span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span className="text-slate-900">Large</span>
          </div>
          <h2 className="font-bold text-2xl">$19.99</h2>
          <span className="cursor-pointer">
            <Image src="/delete.png" alt="" width={20} height={20} />
          </span>
        </div>
        {/* SINGLE ITEM */}
        <div className="flex items-center justify-between mb-4">
          <Image src="/temporary/p1.png" alt="" width={100} height={100} />
          <div className="">
            <h1 className="uppercase text-xl font-bold">sicilian</h1>
            <span className="text-slate-900">Large</span>
          </div>
          <h2 className="font-bold text-2xl">$19.99</h2>
          <span className="cursor-pointer">
            <Image src="/delete.png" alt="" width={20} height={20} />
          </span>
        </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className="h-1/2 p-4 bg-orange-50 flex flex-col gap-4 justify-center lg:h-full lg:w-1/3 2xl:w-1/2 lg:px-20 xl:px-40 2xl:text-xl 2xl:gap-6">
        <div className="flex justify-between">
          <span className="text-slate-900">Subtotal (3 items)</span>
          <span className="text-slate-900">$60.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-900">Service Cost</span>
          <span className="text-slate-900">$4.70</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-900">Delivery Cost</span>
          <span className="bg-green-500 text-white text-sm font-bold p-2">
            FREE!
          </span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="font-bold">TOTAL(INCL. VAT)</span>
          <span className="font-bold">$64.70</span>
        </div>
        <button className="bg-red-500 text-white p-3 rounded w-1/2 self-end">
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CartPage;
