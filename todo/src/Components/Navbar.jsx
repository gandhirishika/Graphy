import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-black h-20 border-b-2 border-gray-300">
        <div className="flex justify-between items-center h-full px-4 md:px-8 lg:px-16">
          <div className="flex md:hidden">
            {/* Hamburger menu for small screens */}
            <button
              className="text-white p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
          <div className="flex md:flex-1 justify-start text-white">
            <ul
              className={`${
                isMenuOpen ? "flex" : "hidden"
              } md:flex md:items-center md:space-x-4 md:my-0`}
            >
              <li className="m-3">Find Jobs</li>
              <li className="m-3">Messages</li>
              <li className="m-3">Hiring</li>
              <li className="m-3">Community</li>
              <li className="m-3">FAQ</li>
            </ul>
          </div>
          <div className="flex items-center">
            <span className="hidden md:flex m-2">
              <img
                className="m-3 h-6"
                src="https://img.icons8.com/?size=512&id=13800&format=png"
                alt="loading"
              />
              <h2 className="m-3">New York, NY</h2>
            </span>
          </div>
          <div className="flex items-center">
            <span className="hidden md:flex m-2">
              <img
                className="m-2 h-7 border border-slate-500 rounded-full"
                src="https://img.icons8.com/?size=1x&id=21838&format=png"
                alt="human"
              />
              <img
                className="m-2 h-7 border border-slate-500 rounded-full"
                src="https://img.icons8.com/?size=512&id=21103&format=png"
                alt="settings"
              />
              <img
                className="m-2 h-7 border border-slate-500 rounded-full"
                src="https://img.icons8.com/?size=512&id=F5WMYjiT3vpJ&format=png"
                alt="notification"
              />
            </span>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="bg-black py-4 px-8 md:hidden">
          <ul className="text-white">
            <li className="my-2">Find Jobs</li>
            <li className="my-2">Messages</li>
            <li className="my-2">Hiring</li>
            <li className="my-2">Community</li>
            <li className="my-2">FAQ</li>
          </ul>
        </div>
      )}

      <div className=" bg-black  h-20 border-b-4 border-black shadow-lg  align-middle ">
        <ul className="flex justify-around text-white items-center">
          <li className="p-2 border-r-2 flex border-gray-400">
            <span>
              <img
                className="h-6 m-1 rounded-full"
                src="https://img.icons8.com/?size=1x&id=12773&format=png"
                alt="loading"
              />
            </span>
            Designer
          </li>
          <li className="p-2 border-r-2 flex place-items-center border-gray-400 ">
            <span>
              <img
                className="h-6 m-1 rounded-full"
                src="https://img.icons8.com/?size=512&id=13800&format=png"
                alt="loading"
              />
            </span>
            Work Location
          </li>
          <li className="p-2 border-r-2 flex border-gray-400">
            <span>
              <img
                className="h-6 m-1 rounded-full"
                src="https://img.icons8.com/?size=1x&id=6nixsGOOQFe7&format=png"
                alt="loading"
              />
            </span>
            Experience
          </li>
          <li className="p-2 border-r-2 flex border-gray-400 ">
            <span>
              <img
                className="h-6 m-1 rounded-full"
                src="https://img.icons8.com/?size=1x&id=54390&format=png"
                alt="loading"
              />
            </span>
            Per month
          </li>
          <li className="p-2 flex border-gray-400 justify-between">
            <span> Salary Range</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;

  
  