import React from "react";

export default function SecondCard() {
    return (
      <section className="pl-6 pr-6 mb-20 ">
        <div className="grid grid-cols-2 gap-10  w-full h-[60vh]">
          <div className=" w-[40vw]">
            <p className="text-orange-500 font-medium text-xl capitalize leading-relaxed ">
              why choose us{" "}
            </p>
  
            <p className="font-extrabold capitalize leading-relaxed text-4xl">
              Diverse Currency
            </p>
  
            <p className="text-lg font-thin leading-relaxed mb-6 ">
              Hosts now have the ability to choose what region their events will
              be taking place. This feature automatically sets the ticket prices
              to the corresponding currency.
            </p>
            <div className="h-px my-8 w-4/5 bg-gray-200 border-0 dark:bg-gray-700"></div>
            {/* rememeber horizontal line */}
            <div className="flex gap-4 flex-col  h-full w-full">
              <div className="flex gap-4 ">
                <img className="w-6 " src="/image/check.png" alt=""></img>
                <p className="capitalize font-thin text-base ">naira</p>
              </div>
              <div className="flex gap-4 ">
                <img className="w-6 " src="/image/check.png" alt=""></img>
                <p className="capitalize font-thin text-base ">cedis</p>
              </div>
            </div>
          </div>
  
          {/* image  */}
          <div className="place-items-center w-full">
            <img
              className="w-[70vw] h-[50vh]"
              src="/image/country-light.webp"
              alt=""
            ></img>
          </div>
        </div>
  
        {/* second */}
  
        <div className="grid justify-between grid-cols-2 gap-6  w-full h-[60vh]">
          <div className="  order-2 ">
            <p className="text-orange-500 font-medium text-xl capitalize leading-relaxed ">
              why choose us{" "}
            </p>
            <p className="font-extrabold capitalize leading-relaxed text-4xl">
              Featured Events
            </p>
            <p className="text-lg font-thin leading-relaxed mb-6 ">
              Enjoy top tier management features to ensure a trouble free
              ticketing experience.
            </p>
            <div className="h-px my-8 w-4/5 bg-gray-200 border-0 dark:bg-gray-700"></div>
            {/* rememeber horizontal line */}
            <div className="flex gap-4 flex-col  h-full w-full">
              <div className="flex gap-4 ">
                <img className="w-6 " src="/image/check.png" alt=""></img>
                <p className="capitalize font-thin text-base ">Export Data</p>
              </div>
              <div className="flex gap-4 ">
                <img className="w-6 " src="/image/check.png" alt=""></img>
                <p className="capitalize font-thin text-base ">event media</p>
              </div>
              <div className="flex gap-4 ">
                <img className="w-6 " src="/image/check.png" alt=""></img>
                <p className="capitalize font-thin text-base ">
                  Recurring events
                </p>
              </div>
            </div>
          </div>
  
          {/* image  */}
          <div className="place-items-center w-full order-1">
            <img
              className="w-[40vw] h-[50vh]"
              src="/image/export-light.webp"
              alt=""
            ></img>
          </div>
        </div>
  
        {/* third  */}
  
        <div className="grid justify-between grid-cols-2 gap-6  w-full h-[60vh]">
          <div className=" w-[40vw] ">
            <p className="text-orange-500 font-medium text-xl capitalize leading-relaxed ">
              why choose us{" "}
            </p>
            <p className="font-extrabold capitalize leading-relaxed text-4xl">
              Event Promotion
            </p>
            <p className="text-lg font-thin leading-relaxed mb-6 ">
              Events are promoted on the site through discover events and business
              strategies.
            </p>
            <div className="h-px my-8 w-4/5 bg-gray-200 border-0 dark:bg-gray-700"></div>
            {/* rememeber horizontal line */}
            <div className="flex gap-4 flex-col  h-full w-full">
              <div className="flex gap-4 ">
                <img className="w-6 " src="/image/check.png" alt=""></img>
                <p className="capitalize font-thin text-base ">Email marketing</p>
              </div>
              <div className="flex gap-4 ">
                <img className="w-6 " src="/image/check.png" alt=""></img>
                <p className="capitalize font-thin text-base ">
                  Onsite ticketing services
                </p>
              </div>
              <div className="flex gap-4 ">
                <img className="w-6 " src="/image/check.png" alt=""></img>
                <p className="capitalize font-thin text-base ">Media Coverage</p>
              </div>
            </div>
          </div>
  
          {/* image  */}
          <div className="place-items-center w-full">
            <img
              className="w-[70vw] h-[50vh]"
              src="/image/revenue-light.webp"
              alt=""
            ></img>
          </div>
        </div>
      </section>
    );
  }