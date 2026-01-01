import React from "react";
import { FaStar } from "react-icons/fa";
import { Link} from "react-router";

const SkillCard = ({ skill }) => {
  
  return (
    <div>
      <div className="rounded-lg border-2 border-gray-100 min-h-full">
        <img className="h-[250px]" src={skill.image} alt="" />
        <div className="px-2 py-5">
          <div className="space-y-2">
            <h3 className="font-medium text-xl ">{skill.skillName}</h3>
            <p className="font-medium text-gray-500">Slots Available: {skill.slotsAvailable}</p>
            <div className="flex justify-between space-y-3">
              <p className="flex items-center gap-2 text-[#9ECFD4] font-medium rounded-full px-2">
              {skill.rating} <FaStar className="text-orange-400" />
            </p>
            <p className="text-yellow-500 font-semibold rounded-full px-2">{skill.price}$</p>
            </div>
          </div>
          <Link className="btn bg-[#70B2B2] text-white px-2 w-full" to={`/skill_details/${skill.skillId}`}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
