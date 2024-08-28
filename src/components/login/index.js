import React from "react";
import Header from "../header";
import Footer from "../footer";

export default function Login() {
  return (
    <section>
      <Header className="mb-0" />
      <div className="grid grid-cols-2  h-screen justify-evenly">
        <div className="col-span-1 w-full">
          <img
            className="h-full w-full"
            src="/image/login.jpg"
            alt="Login"
          />
        </div>
        <div className="col-span-1 w-full h-full p-6 place-content-center">
          <div className="flex gap-1 flex-col mb-6">
            <p className="font-bold text-2xl capitalize">Login</p>
            <p>Please fill in your information below</p>
          </div>
          <div>
            <form className="flex flex-col gap-6 w-full h-full">
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-900 capitalize">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="border border-none border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-5/6 h-14 p-2.5 bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white hover:border-orange-500 hover:ring-orange-500 hover:ring-2"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-gray-900 capitalize"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="border border-none border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-5/6 h-14 p-2.5 bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white hover:border-orange-500 hover:ring-orange-500 hover:ring-2"
                  required
                />
              </div>
              <button className="hover:bg-orange-400 active:bg-orange-600 w-36 h-12 bg-orange-600 rounded-lg shadow-md text-white font-medium capitalize">
                Log in
              </button>
            </form>
            <div className="flex flex-col gap-6 h-full w-full mt-4">
              <p className="text-orange-500 font-semibold capitalize text-lg">
                Forgot password?
              </p>
              <div className="flex justify-between w-full mt-6">
                <p>Don't have an account?</p>
                <a
                  href="#"
                  target="_blank"
                  className="text-orange-500 font-semibold capitalize"
                >
                  Sign up
                </a>
              </div>
              <div className="flex gap-4 w-full h-full mt-12">
                <div className="w-8 h-8 border-white border-2 rounded-full flex items-center justify-center">
                  <a href="#" target="_blank">
                    <img className="w-6 h-6" src="/instagram.png" alt="Instagram" />
                  </a>
                </div>
                <div className="w-8 h-8 border-white border-2 rounded-full flex items-center justify-center">
                  <a href="#" target="_blank">
                    <img className="w-6 h-6" src="/facebook.png" alt="Facebook" />
                  </a>
                </div>
                <div className="w-8 h-8 border-white border-2 rounded-full flex items-center justify-center">
                  <a href="#" target="_blank">
                    <img className="w-6 h-6" src="/twitter.png" alt="Twitter" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </section>
  );
}
