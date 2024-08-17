import React from "react";
export default function Card() {
  return (
    <section className="pl-6 pr-6 mb-24 ">
      <div className="grid grid-cols-3  gap-4 w-full h-[45vh]  ">
        <div className=" w-[60] shadow-sm rounded-xl shadow-black">
          <div className="">
            <p className="font-extrabold text-3xl capitalize p-3">01</p>
          </div>
          <div className=" w-full h-full ">
            <div className="flex w-full justify-center ">
              <img className="w-1/4 " src="/uptrend.png" alt=""></img>
            </div>
            <div className="text-center ">
              <p className="font-extrabold capitalize leading-relaxed text-4xl ">
                Event Analytics
              </p>
              <p className="text-lg font-thin leading-relaxed ">
                Keeping track of your revenue and attendance has never been
                easier
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[60] shadow-sm rounded-xl shadow-black">
          <div className="">
            <p className="font-extrabold text-3xl capitalize p-3">02</p>
          </div>
          <div className=" w-full h-full ">
            <div className="flex w-full justify-center ">
              <img className="w-1/4 " src="/link.png" alt=""></img>
            </div>
            <div className="text-center ">
              <p className="font-extrabold capitalize leading-relaxed text-4xl ">
                Assigned Event URL
              </p>
              <p className="text-lg font-thin leading-relaxed ">
                Promote and share your events easily with your very own event
                URL
              </p>
            </div>
          </div>
        </div>
        <div className=" w-[60] shadow-sm rounded-xl shadow-black">
          <div className="">
            <p className="font-extrabold text-3xl capitalize p-3">03</p>
          </div>
          <div className=" w-full h-full ">
            <div className="flex w-full justify-center ">
              <img className="w-1/4 " src="/qr-code.png" alt=""></img>
            </div>
            <div className="text-center ">
              <p className="font-extrabold capitalize leading-relaxed text-4xl ">
                Ticket QR Code
              </p>
              <p className="text-lg font-thin leading-relaxed ">
                Guaranteed safe and easy identification of tickets sold
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
