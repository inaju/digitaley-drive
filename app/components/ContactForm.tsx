import React from "react";
import { LuSendHorizonal } from "react-icons/lu";
import RoundedButton from "./custom/RoundedButton/RoundedButton";
const ContactForm = () => {
  return (
    <div className="lato w-[100vw] py-12 lg:py-24 px-[1rem] bg-transparent flex flex-col lg:items-center justify-center">
      <h1 className="text-2xl lg:text-5xl text-greenPrimary">
        Let&apos;s keep in touch
      </h1>
      <p className="text-gray-400 lg:text-center text-[16px] mt-2">
        Subscribe to keep with fresh and existing updates. we promise not to
        spam you.
      </p>

      <div className="flex flex-col w-[100%] lg:w-fit lg:flex-row lg:items-center gap-5 lg:gap-8 mt-12">
        <input
          placeholder="Enter your email address"
          className="max-w-[35rem] w-[100%] lg:w-[30rem] px-4 py-3 outline-none border-greenPrimary border rounded-md"
        />
        <RoundedButton className="px-8 rounded-xl w-fit cursor-pointer py-2 lg:py-3">
          <div className="flex flex-row gap-3 items-center ">
            <p>Subscribe</p>
            <LuSendHorizonal />
          </div>
        </RoundedButton>
      </div>

      <div className="mt-4 w-[40rem] flex items-center gap-4">
        <input type="checkbox" />
        <p className="text-greenPrimary">
          I agree to my email address being stored and <br />
          used to receive monthly newsletter.
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
