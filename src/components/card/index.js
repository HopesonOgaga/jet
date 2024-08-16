import React from "react";
export default function Card() {
    return (
      <section className="pl-6 pr-6 mb-24 ">
        <div className="grid grid-cols-3  gap-4 w-full h-[35vh]  ">
          <div className=" w-[90] shadow-sm rounded-xl shadow-black h-full">
            <div className="">
              <p className="font-extrabold text-3xl capitalize p-3">01</p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center w-full h-full ">
              <di>
                <img src="" alt=""></img>
              </di>
              <div className="text-center ">
                <p className="font-extrabold capitalize leading-relaxed text-4xl ">
                  Event Analytics
                </p>
                <p className="text-sm font-thin leading-relaxed ">
                  Keeping track of your revenue and attendance has never been
                  easier
                </p>
              </div>
            </div>
          </div>
          <div className=" shadow-sm rounded-md shadow-black  h-full ">
            <div>
              <p className="font-extrabold text-3xl capitalize p-3 ">02</p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center w-full h-full ">
              <di>
                <img src="" alt=""></img>
              </di>
              <div className="text-center">
                <p className="font-extrabold capitalize leading-relaxed text-4xl ">
                  Assigned Event URL
                </p>
                <p className="text-sm font-thin leading-relaxed ">
                  Promote and share your events easily with your very own event
                  URL
                </p>
              </div>
            </div>
          </div>
          <div className=" shadow-sm rounded-md shadow-black  h-full ">
            <div>
              <p className="font-extrabold text-3xl capitalize p-3 ">03</p>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center w-full h-full ">
              <di>
                <img src="" alt=""></img>
              </di>
              <div className="text-center">
                <p className="font-extrabold capitalize leading-relaxed text-4xl ">
                  Ticket QR Code
                </p>
                <p className="text-sm font-thin leading-relaxed ">
                  Guaranteed safe and easy identification of tickets sold
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }