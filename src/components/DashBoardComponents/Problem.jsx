import React, { useState } from "react";

const Problem = ({ title, desc, topic, level, url,time,toggleConfetti, user }) => {
  const [isMarked, setIsMarked] = useState(false);

  const toggleMark = () => { 
    setIsMarked(true);
    if(!isMarked){
      toggleConfetti();
    }
  
  };

  return (
    <div className="flex flex-col sm:flex-row items-center dark:bg-gray-800 dark:border-white justify-between border border-gray-400 rounded-lg m-2">
      <a href={url} target="_blank">
        <div className="flex flex-col p-2">
          <h1 className="m-2 text-2xl dark:text-white text-black font-semibold">
            {title}
          </h1>
          <p className="ml-2 text-sm italic text-black dark:text-white">Posted on <span>{time}</span></p>
          <h3 className="m-4 text-md dark:text-white text-black">{desc}</h3>
        </div>
      </a>
      <div className="flex flex-col items-center p-4">
        <button
          className={`${isMarked ? 'text-black dark:text-white border-primary border' : 'bg-[var(--primary-c)] text-white'} ${user==="mentor"? 'hidden':''}  rounded-lg dark:border dark:border-white p-3 m-3`}
          onClick={toggleMark}
        >
          {isMarked ? "Marked" : "Mark as Done"}
        </button>
        <div className="flex">
          <p className="border dark:bg-gray-800 dark:text-white text-black dark:border-white border-[var(--primary-c)] rounded-lg text-sm p-1 m-1">
            {topic}
          </p>
          <p className="border dark:bg-gray-800 dark:text-white text-black dark:border-white border-[var(--primary-c)] rounded-lg text-sm p-1 m-1">
            {level}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Problem;
