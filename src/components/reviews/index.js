import React from "react"
export default function Reviews (){
    return <section className="bg-orange-600 w-full h-[50vh]  pl-6 pr-6 mb-28 " >
        <div className="">
            <div className="py-8 flex flex-col gap-5  w-full ">
            <p className="text-5xl font-bold text-white capitalize ">Reviews</p>
            <p className="text-white font-medium ">Here are some reviews we've gotten from past clients and BETA testers</p>
            </div>
            <div className="flex justify-between ">
                <div className="bg-white rounded-lg shadow-md w-1/4 h-[16vh]">
                    <p className="font-medium capitalize text-xl text-gray-400 pl-4 py-4 pb-1 ">It was easy to use and very interactive</p>
                    <p className="font-medium text-sm text-gray-400 capitalize pl-4 ">- Uche</p>
                </div>
                <div className="bg-white rounded-lg shadow-md w-1/4 h-[16vh]">
                    <p className="font-medium capitalize text-xl text-gray-400 pl-4 py-4 pb-1 ">One of the best companies</p>
                    <p className="font-medium text-sm text-gray-400 capitalize pl-4 ">- Fehintola</p>
                </div>
                <div className="bg-white rounded-lg shadow-md w-1/4 h-[16vh]">
                    <p className="font-medium capitalize text-xl text-gray-400 pl-4 py-4 pb-1 ">It's really nice. Love the interfac</p>
                    <p className="font-medium text-sm text-gray-400 capitalize pl-4 ">- Joshua</p>
                </div>
                
            </div>
        </div>
    </section>
}