import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const CardDetails = () => {
  const { id } = useParams();
  const cardlist = useSelector((store) => store.card.items);
  const particularCard = cardlist.length > 0 && cardlist[0][id];
  return (
    <>
      <div className="bg-slate-100 rounded-xl">
        <div className="relative">
          <img
            alt="loading"
            className="h-36 w-full rounded-xl relative "
            src="https://media.istockphoto.com/id/654245290/video/blue-abstract-background.jpg?s=640x640&k=20&c=9ILvrw5tPmW9zFHqYQgHEMTFrtP36wMt8cHbR2j-5eI="
          />

          <div className="flex justify-between bg-white rounded-b-xl rounded-l-xl rounded-r-xl  p-2">
            <div className="grid grid-row-2">
              <img
                className="h-20  z-6 rounded-md z-5 absolute left-0 top-16 m-4 border border-white"
                src={particularCard?.company?.logo_url}
                alt="loading"
              />
              <ul className="grid justify-items-start">
                <li className="font-bold text-lg mt-2">{particularCard?.title}</li>
                {/* <li>Twitter Indonesia</li> */}
                <li>
                  <span className="text-gray-500">
                    {particularCard?.company?.name}{" "}
                  </span>
                  <span className="text-gray-500">
                    {particularCard?.location}
                  </span>
                </li>
                <li className="text-blue-500">{particularCard?.location}</li>
              </ul>
            </div>
            <div className="flex ">
              <ul className=" grid justify-items-end m-1">
                <li className="text-red-500 font-medium flex p-2">
                  <img className="h-4 m-2" src="https://img.icons8.com/?size=512&id=GpUcREcqMB2D&format=png" alt="laoding"/>
                  Report this Job</li>
                <li className="font-medium">
                  <span className="text-gray-500 ">Posted 8 days ago</span>
                  <span className="text-blue-400 m-2">25 Applicants</span>{" "}
                </li>
                <li className="flex justify-evenly m-1 font-medium">
                  <button className=" text-black rounded-2xl  h-8 w-14  mt-1 border border-gray-400 flex items-center justify-center">
                    ...
                  </button>
                  <button className="bg-gray-300 text-black rounded-full text-center h-8 w-20 text-l p-2 m-1 flex items-center justify-center">
                    Save
                  </button>
                  <button className="bg-blue-500 text-white rounded-full text-center h-8 w-24 text-l  m-1 p-3 flex items-center justify-center">
                   <img src="https://img.icons8.com/?size=1x&id=ZEDHDUP0K6P0&format=png" alt="loading"/> Apply
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row rounded-full">
          <div className="bg-white m-2 p-2 rounded-xl md:w-[70%]">
            <h2 className="font-bold text-xl p-2">Job Overview:</h2>
            <p className="text-gray-500 p-2">
              We are searching a driven Expert Senior UI Designer to join our
              growing team at Twitter in Tangerang. Growing you career as a Full
              Time UI Designer is a terrific oppurtunity to develop competitive
              skills, if you are strong in project management, problem solving,
              and have the right personality for the job, then apply for the
              posisition of UI Designer at Twitter today!
            </p>
            <h2 className=" font-bold   text-xl p-2">Job Description:</h2>
            <ul className="list-disc m-1 p-2">
              <li className="text-gray-500 p-2">
                Gather and evaluate user requirements in collaboration with
                product managers.
              </li>
              <li className="text-gray-500 p-2">
                Illustrate design ideas using storyboards, process flows and
                sitemaps.{" "}
              </li>
              <li className="text-gray-500 p-2">
                Design graphic user interface elements, like menu, tabs and
                widgets.
              </li>
            </ul>
            <h2 className=" font-bold  text-xl p-2">Job Requirement:</h2>
            <ul className="list-disc m-1 p-2">
              <li className="text-gray-500 p-2">
                Proven work experience as a UI Designer or similiar role.
              </li>
              <li className="text-gray-500 p-2">
                Senior level portofolio of design projects at minimum 30 apps
                require analytic page show
              </li>
              <li className="text-gray-500 p-2">
                Familiar with Adobe XD, Figma, Invison, Sketch, Marvel
              </li>
            </ul>
          </div>
          <div className="bg-white p-2 m-2 h-80 grid grid-cols-2 gap-0 rounded-xl md:w-[30%] place-items-center">
            <ul className="bg-slate-100 rounded-xl h-16 w-36 p-2 ">
              <li className="font-light text-center">Work Level</li>
              <li className="font-bold text-center">Senior</li>
            </ul>
            <ul className="bg-slate-100 rounded-xl h-16 w-36 p-2">
              <li className="font-light text-center">Job Type</li>
              <li className="font-bold text-center">Full Time</li>
            </ul>
            <ul className="bg-slate-100 rounded-xl h-16 w-36 p-2">
              <li className="font-light text-center">Fields</li>
              <li className="font-bold text-center">Design</li>
            </ul>
            <ul className="bg-slate-100 rounded-xl h-16 w-36 p-2">
              <li className="font-light text-center">Salary</li>
              <li className="font-bold text-center">$8000/mo</li>
            </ul>
            <ul className="bg-slate-100 rounded-xl h-16 w-36 p-2">
              <li className="font-light text-center">Work Modal</li>
              <li className="font-bold text-center">Onsite</li>
            </ul>
            <ul className="bg-slate-100 rounded-xl h-16 w-36 p-2">
              <li className="font-light text-center">Work Experience</li>
              <li className="font-bold text-center">2 years</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardDetails;
