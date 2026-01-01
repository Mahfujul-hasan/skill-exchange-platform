import React, { useEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router";
import useLoadData from "../../hooks/useLoadData";
import { FaStar } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import { RingLoader } from "react-spinners";
import toast, { Toaster } from "react-hot-toast";

const SkillDetails = () => {
  const { id } = useParams();
  const { skillData } = useLoadData();
  const [skill, setSkill] = useState({});
  const formRef = useRef();

  useEffect(() => {
    if (skillData) {
      const skillDetails = skillData.find((data) => data.skillId == id);
      setSkill(skillDetails);
    }
  }, [id, skillData]);
  if (!skill) {
    return (
      <div className="flex justify-center items-center">
        <RingLoader color="#AED6CF" />
      </div>
    );
  }
  const {
    category,
    description,
    image,
    price,
    providerImage,
    providerName,
    rating,
    skillName,
    slotsAvailable,
  } = skill;
  // console.log(skill);

  const handleBooking = (event) => {
    event.preventDefault();
    formRef.current.reset();
    toast("Your booking have done successfully", {
      duration: 4000,
      position: "bottom-left",
      icon: <SiTicktick className="text-green-400" />,
      style:{
        fontSize:'18px'
        
      }
    });
  };

  return (
    <div className="max-w-11/12 mx-auto">
      {/* skill details  */}
      <section className="flex flex-col lg:flex-row items-center gap-8  ">
        <img
          className="w-[500px] rounded-lg border-2 border-gray-100"
          src={image}
          alt=""
        />
        <div className="space-y-3">
          <h3 className="text-2xl font-medium">{skillName}</h3>
          <div className="flex items-center gap-2">
            <img className="rounded-full w-9" src={providerImage} alt="" />
            <p className="text-xs font-semibold text-gray-500">
              {providerName}
            </p>
          </div>

          <p className="font-medium text-gray-600">Category: {category}</p>
          <div>
            <p className="text-gray-500 font-medium">
              Slots Available: {slotsAvailable}
            </p>
            <p className="text-gray-600 font-bold text-xl">Price: {price}$</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
              <FaStar className="text-orange-400" />
            </div>
            <p className="text-gray-500 font-medium">{rating}</p>
          </div>
          <p className="text-gray-500">{description}</p>
          <Link className="btn bg-[#70B2B2] text-white" to='/'>Back to Home</Link>
        </div>
      </section>
      {/* Booking section */}

      <section className="my-10">
        <h3 className="text-2xl font-bold">Book Session</h3>

        <div className="hero min-h-screen justify-start items-start">
          <div className="card-body min-w-[350px]">
            <form onSubmit={handleBooking} ref={formRef}>
              <fieldset className="fieldset">
                <label className="label flex gap-0">
                  Name<span className="text-red-500">*</span>
                </label>
                <input type="text" className="input" required />
                <label className="label flex gap-0">
                  Email<span className="text-red-500">*</span>
                </label>
                <input type="email" className="input" required />
                <button className="btn bg-[#70B2B2] text-white text-lg mt-4">Book now</button>
                <Toaster></Toaster>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkillDetails;
