import React, { useState } from "react";
import { Header } from "../components";
import { mapImg } from "../assets";
import { retrieveData, uploadWeb3 } from "../utils/web3Storage";
import { uploadFile } from "../utils/lightHouse";

const Create = () => {
  const [file, setFile] = useState();

  const uplaodFile = async () => {
    const data = await uploadFile(file);
    // const data = await uploadWeb3(file);
    let res = await fetch("URL");
    console.log("Hello");
    console.log(data);
  };

  const retrive = async () => {
    console.log(
      await retrieveData(
        "bafybeifprwm4ioeomqpk6w5y5pez733bhgsw55dsi4u2rh56yf5bwxmmzm"
      )
    );
  };
  return (
    <div>
      <Header />
      <div className="HeroSection">
        <div className="absolute -z-10 w-screen flex  justify-center items-center">
          <img src={mapImg} className="w-[60%]"></img>
        </div>
      </div>

      <div className="mx-[15%] mt-20">
        <h2 className="text-[1.1rem] ml-2">Create Meetup</h2>
        <div className="h-[4px] w-36 bg-[#2CAE8F]"></div>
        <div className="h-[2px]  bg-black "></div>
      </div>
      <div className="formContainer mx-[15%] flex flex-col mt-7 mb-20 p-12 border-2 border-gray-300 bg-white rounded-md">
        <div className="formContent flex justify-around">
          <div className=" flex flex-col gap-7">
            <div className="flex flex-col">
              <label>Title</label>
              <input
                type="text"
                className="border-2 w-96 border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label>Time</label>
              <input
                type="datetime-local"
                className="border-2 w-96 border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col">
              <label>Description</label>
              <textarea className="border-2 w-96 h-28 border-gray-300 p-2 rounded-md" />
            </div>
          </div>
          <div className="">
            <div className="imgContainer w-80 h-80 bg-[#d1f8ef] rounded-md flex flex-col justify-center items-center">
              <img
                src={
                  "https://www.freeiconspng.com/thumbs/photography-icon-png/photo-album-icon-png-14.png"
                }
              />
              <input
                type="file"
                onChange={(e) => setFile(e.target.files)}
                className="w-[90%] border border-[#878787] rounded"
              />
            </div>
          </div>
        </div>
        <button
          onClick={() => uplaodFile()}
          className="bg-[#2CAE8F] text-white py-2 px-4 w-40 mx-auto mt-12 rounded-[5px] text-[1.1rem] hover:bg-[#1F9B7E]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Create;
