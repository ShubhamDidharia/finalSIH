import React, { useEffect, useMemo, useState } from "react";
import { io } from "socket.io-client";

const Message = () => {


  const [messages, setmessages] = useState([]);
  const [message, setmessage] = useState("");
  const [room, setRoom] = useState("");
  const [socketID, setSocketId] = useState("");
  const [roomName, setRoomName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    socket.emit("message",message);
    setmessage("");
  };

  useEffect(() => {
  }, []);
  
  const [open,setopen] =useState(false);
  return (
    <>
      <button
        className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-10 h-10 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        data-state="closed"
        style={{ transition: "all ease 1.2s" }}
        onClick={(e)=>setopen(c=>!c)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-white block border-gray-200 align-middle"
        >
          <path
            d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
            className="border-gray-200"
          ></path>
        </svg>
      </button>
      {(open)?<div
        style={{
          boxShadow: "0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)",
          overflowY:"auto",
        }}
        className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px]"
      >
        <div className="pr-4 h-[474px]" style={{ minWidth: "100%", display: "table" }}>
            {messages.map((message,index) => (
              <div  className="flex gap-3 my-4 text-gray-600 text-sm">
                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                  <div className="rounded-full bg-gray-100 border p-1">
                    <svg
                      stroke="none"
                      fill="black"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
                      ></path>
                    </svg>
                  </div>
                </span>
                <p className="leading-relaxed">
                  <span className="block font-bold text-gray-700">Jai</span>
                  {message}
                </p>
              </div>
            ))}
        </div>
        <div className="mt-0 flex flex-row justify-between space-x-3">
          <form  className="w-full">
            <input
              className="border-gray-200 p-2 rounded-lg w-full"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setmessage(e.target.value)}
            />
          </form>
          <button type="submit" onClick={handleSubmit} className="w-1/4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-0 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 ">Send</button>
        </div>
      </div>:<></>}
    </>
  );
};

export default Message;
