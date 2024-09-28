import React, { useEffect, useState } from "react";
import "../assets/styles/home.css";
import Header from "../components/Header";

// props : {
//     title : "",
//     name : ""
// }

// const Home = (props) => {
const Home = ({ title }) => {
  // let count = 0;     // instead use useState for changing variables
  const [count, setCount] = useState(0);
  const buttonClassName = "bg-orange-600 px-2 py-1 rounded-[0.45em] ";

  useEffect(() => {
    setCount(2);
  }, []); // component did mount

  useEffect(() => {
    console.log(count);
  }, [count]); // component did update also called when mount

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="p-5 space-y-[1em]">
      {/* <Header title={title} /> */}
      <h1 className="text-blue-800  underline cursor-pointer font-semibold">
        {title}
      </h1>

      <div> Count : {count}</div>

      <div className="flex space-x-[1em] text-white">
        <button onClick={handleIncrement} className={`${buttonClassName}`}>
          Increment
        </button>
        {count !== 0 && (
          <button onClick={handleReset} className={buttonClassName}>
            Reset
          </button>
        )}
        <button onClick={() => setCount(count - 1)} className={buttonClassName}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Home;
