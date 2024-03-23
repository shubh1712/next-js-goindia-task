import React from "react";
import profile from "../components/pngs/bussiness-man.png";
import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
import { FaEye,FaShare } from "react-icons/fa";

function ForumsCard({ data }) {
    const { username, sector, description, likes, comments, views, shared } = data;

  return (
    <div className=" m-2 rounded-xl card w-full p-6  border-zinc-700 border-2 ">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-1">
        <div className="p-1 text-left md:col-span-1">
          <img
            src={profile.src}
            alt="Profile"
            className="max-w-20 w-10 h-10 "
          />
        </div>
        <div className="md:flex md:flex-row md:items-center md:justify-between md:col-span-6">
          <div className="p-1 text-left inline-flex">
            <p className="pr-4">{username} </p>
            <div className="p-1  text-left bg-primary pl-5 pr-6 rounded-3xl ">
              {sector}
            </div>
          </div>
          <div className="p-1 text-right">
            <p className="text-xs text-sky-950 "> 22 min ago</p>
          </div>
        </div>
      </div>
      <div>
        <p>
          {description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <div className="inline-flex items-center">
          <FaHeart size={20} />
          <p className="pl-1">{likes}</p>
        </div>
        <div className="inline-flex items-center">
          <FaComment size={20} />
          <p className="pl-1">{comments}</p>
        </div>
        <div className="inline-flex items-center">
          <FaEye size={20} />
          <p className="pl-1">{views}</p>
        </div>
        <div className="inline-flex items-center">
          <FaShare size={20} />
          <p className="pl-1">{shared}</p>
        </div>
      </div>
    </div>
  );
}

export default ForumsCard;
