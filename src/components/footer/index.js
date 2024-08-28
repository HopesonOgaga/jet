import React, { useState } from "react";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  return (
    <section className="bg-orange-600 w-full h-[60vh]  pl-6 pr-6">
      <div className="w-full flex ">
        <div className=" p-4 flex w-full h-full  justify-around">
          <div className="flex flex-col gap-6 ">
            <div>
              <p className="text-2xl text-white font-semibold capitalize ">
                content
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <a
                href="#"
                target="_blank"
                className=" text-white capitalize text-sm font-thin hover:text-gray-300 "
              >
                trending events
              </a>
              <a
                href="#"
                target="_blank"
                className=" text-white capitalize text-sm font-thin hover:text-gray-300 "
              >
                Sponsored event
              </a>
              <a
                href="#"
                target="_blank"
                className=" text-white capitalize text-sm font-thin hover:text-gray-300 "
              >
                Featured event
              </a>
              <a
                href="#"
                target="_blank"
                className=" text-white capitalize text-sm font-thin hover:text-gray-300 "
              >
                Join Jetronmall
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 ">
            <div>
              <p className="text-2xl text-white font-semibold capitalize ">
                our company
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <a
                href="#"
                target="_blank"
                className=" text-white capitalize text-sm font-thin hover:text-gray-300 "
              >
                About us
              </a>
              <a
                href="#"
                target="_blank"
                className=" text-white capitalize text-sm font-thin hover:text-gray-300 "
              >
                Contact us
              </a>
              <a
                href="#"
                target="_blank"
                className=" text-white capitalize text-sm font-thin hover:text-gray-300 "
              >
                FAQ
              </a>
              <a
                href="#"
                target="_blank"
                className=" text-white capitalize text-sm font-thin hover:text-gray-300 "
              >
                support
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-6 ">
            <div>
              <p className="text-2xl text-white font-semibold capitalize ">
                services
              </p>
            </div>
            <div className="flex flex-col gap-2 ">
              <a
                href="#"
                target="_blank"
                className=" text-white capitalize text-sm font-thin hover:text-gray-300 "
              >
                Discover Events
              </a>
              <a
                href="#"
                target="_blank"
                className=" text-white capitalize text-sm font-thin hover:text-gray-300 "
              >
                Terms and conditions
              </a>
              <a
                href="#"
                target="_blank"
                className=" text-white capitalize text-sm font-thin hover:text-gray-300 "
              >
                Report an event
              </a>
            </div>
          </div>
        </div>

        {/* form  */}
        <div className="bg-orange-700 rounded-md shadow-sm p-4  h-full mt-4">
          <form onSubmit={subscribe}>
            <p className="text-2xl capitalize font-semibold text-white ">
              Subscribe
            </p>

            <label htmlFor="name"></label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-orange-200 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-orange-500"
              placeholder="Your name"
            />
            <br />
            <label htmlFor="email"></label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-orange-200 border border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-orange-500"
              placeholder="hopesonogaga@gmail.com"
            />
            <button
              type="submit"
              className="mt-3 bg-orange-500 text-white rounded-lg px-4 py-2"
            >
              Subscribe
            </button>
            <p className="text-white font-normal text-sm py-2">
              Want to be the first to know about new events 💃🏾, exclusive offers
              and possible discounts? Subscribe to our newsletter
            </p>
          </form>
        </div>
      </div>

      {/* line */}
      <hr class="h-px my-8 bg-white border-0 dark:bg-white"></hr>
      <div className="w-full flex justify-between ">
        <div className=" h-full">
          <img
            className="w-40"
            src="/jetronticket-logo-combo-white.webp"
            alt=""
          ></img>
        </div>
        <div className="gap-6 flex ">
          <a
            className=" text-white capitalize text-sm font-thin hover:text-gray-300 "
            href="#"
            target="_blank"
          >
            home
          </a>
          <a
            className=" text-white capitalize text-sm font-thin hover:text-gray-300 "
            href="#"
            target="_blank"
          >
            terms
          </a>
        </div>
        <div className="flex gap-4 ">
          <div className="w-4 h-4 border-white border-2 rounded-full flex flex-col items-center justify-center">
            <a href="#" target="_blank">
              <img className="w-4 " src="/instagram.png" alt=""></img>
            </a>
          </div>
          <div className="w-4 h-4 border-white border-2 rounded-full flex flex-col items-center justify-center">
            {" "}
            <a href="#" target="_blank">
              <img className="w-4" src="/facebook.png" alt=""></img>
            </a>
          </div>
          <div className="w-4 h-4 border-white border-2 rounded-full flex flex-col items-center justify-center">
            <a href="#" target="_blank">
              <img className="w-4" src="/twitter.png" alt=""></img>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
  function subscribe(e) {
    e.preventDefault();
    const info = {
      name,
      email,
    };

    console.log(info);

    setName("");
    setEmail("");
  }
}
