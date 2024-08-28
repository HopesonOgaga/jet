import React from "react";
import Reviews from "./components/reviews";
import Card from "./components/card";
import SecondCard from "./components/infoCard";
import Welcome from "./components/welcome";
import Footer from "./components/footer";
import Login from "./components/login";
import SignUP from "./components/signup";


export default function App() {
  return (
    <div className="font-body">
      {/* <Header />
      <Welcome/>
      <Platform />
      <Card/>
      <SecondCard/>
      <Reviews/>
      <Footer/> */}
      <SignUP/>
    </div>
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






