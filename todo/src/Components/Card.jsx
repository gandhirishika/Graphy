import React from "react";

import { getRandomColor } from "../utils/constant";

const Card = ({
  created_date,
  hourly_rate,
  tags,
  location,
  title,
  company,
  // index
}) => {
  // console.log(index)

  //date in prefered format
  const dateString = created_date;
  const date = new Date(dateString);
  const day = date.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  const formattedDate = `${day} ${month}, ${year}`;

  const color = getRandomColor();

  return (

      <div className="card w-[300px] p-2 m-1 border-2 border-black-800 shadow-xl rounded-lg h-80">
        <div className="rounded-lg mt-1 h-3/4" style={{ backgroundColor: color }}>
          <div className="flex justify-between">
            <span className="bg-white rounded-full p-1 m-2 font-bold text-sm">
              {formattedDate}
            </span>
            <img className="h-8 p-2 rounded-full m-2 bg-white" src="https://img.icons8.com/?size=512&id=59740&format=png" alt="loading" />
          </div>
          <div className="m-2 font-light text-sm ">{company.name}</div>
          <div className="flex justify-between m-2 mt-0">
            <h2 className="font-bold grid grid-cols-2 text-xl">{title}</h2>
            <img className="h-10 rounded-full" src={company.logo_url} alt="loading" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 m-2">
            <span className="border border-gray-700 rounded-full p-1 m-1 text-center flex justify-center items-center">
              {tags[0]}
            </span>
            <span className="border border-gray-700 rounded-full p-1 m-1 text-center flex justify-center items-center">
              {tags[1]}
            </span>
          </div>
        </div>
        <div className="flex flex-row mt-3 justify-between m-2">
          <div>
            <h3 className="font-bold">${hourly_rate}/hr</h3>
            <h3 className="font-light">{location}</h3>
          </div>
          <div>
            <button className="rounded-full bg-black text-white p-2 w-20">
              Details
            </button>
          </div>
        </div>
      </div>
    
  );
};

export default Card;
