import React from "react";

const Contact = () => {
  return (
    <div className="max-w-[1240px] m-auto p-4 h-screen mt-40">
      <h1 className="text-3xl font-semibold uppercase text-center p-4">
        Get In Touch
      </h1>
      <form className="max-w-[640px] m-auto">
        <div className="grid grid-cols-2 gap-2">
          <input
            className="border shadow-lg p-3"
            type="text"
            placeholder="Name"
          />
          <input
            className="border shadow-lg p-3"
            type="email"
            placeholder="Email"
          />
        </div>
        <input
          className="border shadow-lg p-3 w-full my-4"
          type="text"
          placeholder="Subject"
        />
        <textarea
          className="border shadow-lg p-3 w-full"
          cols="30"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="border shadow-lg p-3 w-full mt-2 hover:bg-yellow-500 hover:text-black font-semibold">
          Submit
        </button>
      </form>
      <h1 className="text-3xl font-semibold uppercase text-center p-4 mt-6">
        Email Address
      </h1>

      <p className="text-center mt-2 font-bold">
        mansanzingaproductions@gmail.com
      </p>
    </div>
  );
};

export default Contact;
