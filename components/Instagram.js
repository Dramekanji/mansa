import React from "react";
import { FaInstagram } from "react-icons/fa";

const Instagram = () => {
  return (
    <div className="max-w-[1240px] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow us on Instagram</p>

      <p className="pb-4 font-semibold ">@mansanzingaproductions</p>
      <div className="flex justify-center items-center">
        <FaInstagram size={70} />
      </div>
    </div>
  );
};

export default Instagram;
