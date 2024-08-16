import React from "react";
export default function Welcome() {
    return (
      <section className="pl-6 pr-6 mb-28 ">
        <div className="grid grid-cols-2 gap-4  w-full h-full ">
          {" "}
          <div>
            <div className="w-full h-full  flex flex-col gap-6">
              <p className="text-5xl  font-extrabold capitalize  text-black leading-tight">
                welcome 👋 <br></br> to the ticket admin <br></br> page
              </p>
              <p className="text-xl font-thin capitalize leading-snug  ">
                You're about to go backstage! Here, you become an admin to create
                and manage your events
              </p>
              <button className="w-1/2 h-14 bg-orange-600 rounded-md shadow-md text-center text-lg  text-white font-semibold capitalize hover:bg-orange-500 hover:text-gray-200  ">
                create event
              </button>
            </div>
          </div>
          <div className="shadow-md shadow-black ">
            <img src="/image/dashboard-light.webp" alt="dashboardimage"></img>
          </div>
        </div>
      </section>
    );
  }