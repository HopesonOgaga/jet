import { useState } from "react";
import Header from "../header";
import Footer from "../footer";

export default function SignUp() {
  // state
  const [name, setName] = useState("");
  const [host, hostName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [number, setNumber] = useState("");
  return (
    <section>
      <Header />
      <div className="grid grid-cols-2 w-full h-full gap-4 justify-evenly">
        <div className="w-full h-full col-span-1">
          <img className="w-full" src="/register.jpg" alt="register" />
        </div>
        <div className="col-span-1 w-full h-full">
          <div className="place-items-end w-full h-full justify-end pl-6 pr-6">
            <form
              className="flex flex-col gap-2 h-full "
              onSubmit={registrationSubmit}
            >
              <div className="flex gap-1 flex-col mb-6">
                <p className="font-bold text-2xl capitalize">Sign Up</p>
                <p>Please fill your form</p>
              </div>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 font-medium text-gray-900 capitalize"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="border border-none border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-5/6 h-14 p-2.5 bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white hover:border-orange-500 hover:ring-orange-500 hover:ring-2"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="hostname"
                  className="block mb-2 font-medium text-gray-900 capitalize"
                >
                  Host Name
                </label>
                <input
                  type="text"
                  id="hostname"
                  className="border border-none border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-5/6 h-14 p-2.5 bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400  hover:border-orange-500 hover:ring-orange-500 hover:ring-2"
                  required
                  value={host}
                  onChange={(e) => hostName(e.target.value)}
                />
              </div>
              <section className="flex gap-3 w-full">
                <div className="w-full">
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-gray-900 capitalize"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="border border-none border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-5/6 h-12 p-2.5 bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white hover:border-orange-500 hover:ring-orange-500 hover:ring-2"
                    placeholder="name@flowbite.com"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 font-medium text-gray-900 capitalize"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    className="border border-none border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-5/6 h-12 p-2.5 bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white hover:border-orange-500 hover:ring-orange-500 hover:ring-2"
                    required
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                  />
                </div>
              </section>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 font-medium text-gray-900 capitalize"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="border border-none border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-5/6 h-14 p-2.5 bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400  hover:border-orange-500 hover:ring-orange-500 hover:ring-2"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block mb-2 font-medium text-gray-900 capitalize"
                >
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="border border-none border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-5/6 h-14 p-2.5 bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400  hover:border-orange-500 hover:ring-orange-500 hover:ring-2"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <section className="flex justify-between">
                <div>
                  <input
                    type="checkbox"
                    name="newsletter"
                    className=""
                    value=""
                  />
                  <label
                    htmlFor="newsletter"
                    className="text-gray-300 capitalize pl-2"
                  >
                    Subscribe to our newsletter
                  </label>
                </div>
                <button
                  type="submit"
                  className="hover:bg-orange-400 active:bg-orange-600 w-36 h-12 bg-orange-600 rounded-lg shadow-md text-white font-medium capitalize"
                >
                  Create Account
                </button>
              </section>
              <div className="flex justify-between w-full mt-6">
                <p>Already have an account?</p>
                <a
                  href="#"
                  target="_blank"
                  className="text-orange-500 font-semibold capitalize"
                >
                  Sign in
                </a>
              </div>
              <div className="flex gap-4 w-full h-full mt-12">
                <div className="w-8 h-8 border-white border-2 rounded-full flex items-center justify-center">
                  <a href="#" target="_blank">
                    <img
                      className="w-6 h-6"
                      src="/instagram.png"
                      alt="Instagram"
                    />
                  </a>
                </div>
                <div className="w-8 h-8 border-white border-2 rounded-full flex items-center justify-center">
                  <a href="#" target="_blank">
                    <img
                      className="w-6 h-6"
                      src="/facebook.png"
                      alt="Facebook"
                    />
                  </a>
                </div>
                <div className="w-8 h-8 border-white border-2 rounded-full flex items-center justify-center">
                  <a href="#" target="_blank">
                    <img className="w-6 h-6" src="/twitter.png" alt="Twitter" />
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );

  function registrationSubmit(e) {
    e.preventDefault();
    const registrationInfo = {
      name,
      host,
      number,
      email,
      password,
      confirmPassword,
    };
    setName("");
    hostName("");
    setNumber("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    console.log(registrationInfo);
  }
}
