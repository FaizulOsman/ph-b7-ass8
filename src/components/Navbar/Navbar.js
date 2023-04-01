import React from "react";
import profileImg from "../../assets/images/avatar-1.jpg";

const Navbar = () => {
  return (
    <div>
      <div className="w-[95%] xl:w-[1280px] mx-auto mt-[20px]">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              Knowledge Cafe
            </h3>
          </div>
          <div>
            <img
              className="w-[32px] sm:w-[42px] md:w-[48px] lg:w-[60px] rounded-full"
              src={profileImg}
              alt=""
            />
          </div>
        </div>
        <br />
        <hr />
      </div>
    </div>
  );
};

export default Navbar;
