import React, { useState } from "react";
const Content = () => {
  const [text, setText] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  const getData = (e) => {
    setText(e.target.value);
    setShowStatus(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowStatus(true);
  };
  return (
    <>
      <div className="conainer px-4 py-4 bg-slate-800">
        <div className="flex justify-center items-center">
          <div className="group block max-w-xl mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 ">
            <div className="flex items-center space-x-3">
              <form onSubmit={handleSubmit}>
                <textarea
                  onChange={getData}
                  name="text"
                  id="text"
                  cols="50"
                  rows="10"
                  className="w-full rounded-lg p-2 text-black-400 border-double border-4 border-sky-500"
                ></textarea>
                <button
                  type="submit"
                  className="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 my-3 rounded items-center"
                >
                  Submit
                </button>
                <div className="conainer">
               
                </div>
              </form>
              
            </div>
          </div>
        </div>
        <div className=" flex justify-center items-center my-4 ">
        <div className="group block w-full mx-auto rounded-lg p-6 bg-cyan-600 ring-1 ring-slate-900/5 shadow-lg space-y-3 ">
          
        <p>
                Entered text : 
                <span className="text-white">
                {showStatus ? text : null}
                </span>
              </p>
        </div>
        
        </div>
      </div>
    </>
  );
};

export default Content;
