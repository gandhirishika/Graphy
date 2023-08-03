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
                className="h-6 w-auto m-3 object-contain"
                src="https://img.icons8.com/?size=512&id=13800&format=png"
                alt="loading"
              />
              <h2 className="m-3 mr-40 text-white">New York, NY</h2>
            </span>
          </div>
          <div className="flex items-center">
            <span className="hidden md:flex m-2">
              <img
                className="h-7 w-auto m-2 border border-slate-500 rounded-full object-cover"
                src="https://img.icons8.com/?size=1x&id=21838&format=png"
                alt="human"
              />
              <img
                className="h-7 w-auto m-2 border border-slate-500 rounded-full object-cover"
                src="https://img.icons8.com/?size=512&id=21103&format=png"
                alt="settings"
              />
              <img
                className="h-7 w-auto m-2 border border-slate-500 rounded-full object-cover"
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
                className="h-6 w-auto m-1 rounded-full object-cover"
                src="https://img.icons8.com/?size=1x&id=12773&format=png"
                alt="loading"
              />
            </span>
            Designer
            <img
              className="h-6 w-auto  p-1 ml-5 rounded-full"
              src="https://img.icons8.com/?size=512&id=47090&format=png"
              alt="dropdow"
            />
          </li>
          <li className="p-2 border-r-2 flex justify-center border-gray-400 place-items-center ">
            <span>
              <img
                className="h-6 w-auto m-1 rounded-full object-contain"
                src="https://img.icons8.com/?size=512&id=13800&format=png"
                alt="loading"
              />
            </span>
            Work Location
            <img
              className="h-6 w-auto  p-1 ml-5 rounded-full"
              src="https://img.icons8.com/?size=512&id=47090&format=png"
              alt="dropdow"
            />
          </li>
          <li className="p-2 border-r-2 flex justify-center border-gray-400 place-items-center ">
            <span>
              <img
                className="h-6 w-auto m-1 rounded-full object-contain"
                src="https://img.icons8.com/?size=1x&id=6nixsGOOQFe7&format=png"
                alt="loading"
              />
            </span>
            Experience
            <img
              className="h-6 w-auto  p-1 ml-5 rounded-full"
              src="https://img.icons8.com/?size=512&id=47090&format=png"
              alt="dropdow"
            />
          </li>
          <li className="p-2 border-r-2 flex border-gray-400  justify-center place-items-center">
            <span>
              <img
                className="h-6 w-auto m-1 rounded-full object-contain"
                src="https://img.icons8.com/?size=1x&id=54390&format=png"
                alt="loading"
              />
            </span>
            Per month
            <img
              className="h-6 w-auto  p-1 ml-5 rounded-full"
              src="https://img.icons8.com/?size=512&id=47090&format=png"
              alt="dropdow"
            />
          </li>
          <li className="p-2 flex  border-gray-400 justify-evenly m-2">
            <span className="mr-8"> Salary Range</span>
            <span className="mr-4"> $1200-$20000</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
