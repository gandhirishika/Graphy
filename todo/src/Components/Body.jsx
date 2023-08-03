import React, { useEffect, useState } from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { getInf } from "../Redux/cardSlice";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
const Body = () => {
  // const [cardlist, setCardList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6); // Number of cards per page
  const dispatch = useDispatch();

  useEffect(() => {
    getCardInfo();
  }, []);
  
  async function getCardInfo() {
    const res = await fetch(
      "https://nextlevel-fe-assignment.vercel.app/jobs?page=1"
      );
      const data = await res.json();
      // setCardList(data?.jobs);
      dispatch(getInf(data?.jobs));
    }

    const cardlist = useSelector((store) =>store?.card?.items)
    // console.log(cardlist,"cardlist")
  // Get current cards
  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = cardlist[0]?.slice(indexOfFirstCard, indexOfLastCard);

  // Change page
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <Navbar/>
    
      <div className="flex flex-col sm:flex-row">
        <h2 className="font-bold text-2xl sm:text-xl text-start m-2">
          Recommended Jobs
        </h2>
        <h2 className="border border-gray-500 rounded-full m-2 p-2 text-center">
          {cardlist[0]?.length}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-1 place-items-end">
        {currentCards?.map((item, index) => (
        
        <Link to={`/carddetails/${index}`}>
        <Card key={index} {...item}  />
        </Link>
      ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 mx-2 bg-gray-300 rounded-md"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 mx-2 bg-gray-300 rounded-md"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={indexOfLastCard >= cardlist[0]?.length}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Body;
