import React from "react";

export default function App() {
  return (
    <div className="font-body">
      <Header />
      <Welcome />
      <Platform />
      <Card />
      <SecondCard />
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

function Platform() {
  return (
    <section className="pl-6 pr-6 mb-24">
      <div className="grid grid-cols-3  w-full h-full">
        <div className=" col-span-2  flex flex-col gap-3 ">
          <p className="text-5xl font-bold capitalize ">
            {" "}
            <span className="font-extrabold ">"</span> a new generatiom Platform{" "}
            <span className="font-extrabold">"</span>
          </p>
          <p className="font-light text-xl capitalize ">
            Discover a better way to create and upload events online
          </p>
        </div>
        <div className=" w-5/6   h-28 shadow-md bg-white  rounded-md p-4 flex flex-col gap-4 justify-center item-left ">
          <p className="font-medium  text-xl leading-relaxed  text-black">
            Amazing interface first of all, love the orange vibe, easy to
            manoeuvre
          </p>
          <p className="capitalize font-light text-sm ">-Agboola</p>
        </div>
      </div>
    </section>
  );
}

function Card() {
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

function SecondCard() {
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

function Review (){

}
