import React from "react";
import { NavLink } from "react-router-dom";
import bannerimg from "../../assets/banner.jpg";

const HomePage = () => {
  return (
    <div className="relative bg-purple-600 text-white pt-12 pb-64">
      {/* Text Section */}
      <div className="w-4/6 mx-auto text-center flex flex-col gap-6 max-w-11/12 z-10 relative">
        <h1 className="font-bold md:text-5xl text-2xl">
          Upgrade Your Tech Accessorize with Gadget Heaven Accessories
        </h1>
        <p>
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div>
          <NavLink to="/dashboard">
            <button className="btn rounded-3xl font-bold text-purple-600 bg-white hover:bg-purple-100">
              Shop Now
            </button>
          </NavLink>
        </div>
      </div>

      {/* Overlapping Image */}
      <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-1/10 w-[80%] max-w-4xl rounded-3xl overflow-hidden shadow-xl">
        <img
          src={bannerimg}
          alt="Banner"
          className="w-full h-auto object-cover rounded-3xl"
        />
      </div>
    </div>
  );
};

export default HomePage;
