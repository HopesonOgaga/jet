import React from "react";

export default function App() {
  return (
    <div className="text-body">
      <Header />
      <Welcome />
    </div>
  );
}

function Header() {
  return (
    <section className="flex justify-between  pl-10 pr-10  shadow-sm h-16 py-3 mb-20 ">
      <div className=" ">
        <img
          className="w-32  "
          src="/image/jetronticket-logo-combo-compact.webp"
          alt="jetimage"
        ></img>
      </div>
      <div className="flex gap-8 h-full">
        <label class="inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer"></input>
          <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
        <div>
          <button className="w-36 h-10 bg-orange-600 rounded-md shadow-md text-white font-semibold capitalize hover:bg-orange-500 hover:text-gray-200  ">
            create event
          </button>
        </div>
      </div>
    </section>
  );
}

function Welcome() {
  return (
    <section className="pl-6 pr-6 ">
      <div className="grid grid-cols-2 gap-4  w-full h-screen  ">
        {" "}
        <div>
          <div className="w-full h-full  flex flex-col gap-6">
            <p className="text-5xl  font-extrabold capitalize  text-black leading-tight">welcome 👋 <br></br> to the ticket admin <br></br> page</p>
            <p className="text-2xl font-semibold capitalize leading-snug  ">You're about to go backstage! Here, you become an admin to create and manage your events</p>
            <button className="w-1/2 h-14 bg-orange-600 rounded-md shadow-md text-center text-lg  text-white font-semibold capitalize hover:bg-orange-500 hover:text-gray-200  ">
            create event
          </button>
          </div>
        </div>
        <div>
          <img src="/image/dashboard-light.webp" alt="dashboardimage"></img>
        </div>
      </div>
    </section>
  );
}
