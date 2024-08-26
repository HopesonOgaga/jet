import React from "react";
import Header from "../header";
import Footer from "../footer";

export default function Login() {
  return (
    <section>
      <Header />
      <div className="grid grid-cols-2  gap-4 pl-6 pr-6">
        <div className="col-span-1 bg-red-300  w-full ">
          <img
            className="h-[80vh] w-full "
            src="/image/login.jpeg"
            alt="img"
          ></img>
        </div>
        <div className="col-span-1 w-full h-full">
          <div className="flex gap-1 flex-col mb-6  ">
            <p className=" font-bold text-2xl capitalize ">login</p>
            <p>Please fill your information below</p>
          </div>
          <div>
            <form className="flex flex-col gap-6 w-full h-full">
              <div>
                <label for="email" class="block mb-2  text-gray-900 capitalize">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-3/4 p-2.5 bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white   hover:outline-none focus:border-orange-500 hover:ring-orange-500 hover:ring-2"
                  placeholder="name@company.com"
                  required=""
                ></input>
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2  text-gray-900 capitalize "
                >
                  password
                </label>
                <input
                  type="password"
                  name="email"
                  id="email"
                  className=" border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-3/4 p-2.5 bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white hover:outline-none focus:border-orange-500 hover:ring-orange-500 hover:ring-2"
                  required=""
                ></input>
              </div>
              <button className="w-36 h-12 bg-orange-600 rounded-lg shadow-md text-white font-medium capitalize">
                log in
              </button>
            </form>
            <div className="felx flex-col gap-6 h-full w-full mt-4 ">
              <p className="text-orange-500 font-semibold capitalize text-lg">
                forgot password ?{" "}
              </p>
              <div className="flex justify-between w-full  mt-6">
                <p className="">Don't have an account ?</p>
                <a
                  href="#"
                  target="_blank"
                  className="text-orange-500 font-semibold capitalize"
                >
                  Sign up
                </a>
              </div>
              <div className="flex gap-4 w-full h-full mt-12  ">
                <div className="w-8 h-8 border-white border-2 rounded-full flex flex-col items-center justify-center">
                  <a href="#" target="_blank">
                    <img className="w-8 h-8 " src="/instagram.png" alt=""></img>
                  </a>
                </div>
                <div className="w-8 h-8 border-white border-2 rounded-full flex flex-col items-center justify-center">
                  {" "}
                  <a href="#" target="_blank">
                    <img className="w-8 h-8" src="/facebook.png" alt=""></img>
                  </a>
                </div>
                <div className="w-8 h-8 border-white border-2 rounded-full flex flex-col items-center justify-center">
                  <a href="#" target="_blank">
                    <img className="w-8 h-8" src="/twitter.png" alt=""></img>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
}
