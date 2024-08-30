import React from 'react';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import MessageIcon from '@mui/icons-material/Message';
import RestoreIcon from '@mui/icons-material/Restore';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
  return (
    <div className="w-[100vw] h-[auto] flex justify-between items-center py-2">
        <div className="w-[25%] h-[80%] flex items-center justify-between px-1">
        <button className="hover:border-transparent bg-white hover:bg-gray-300 w-[15%] size-13
        flex items-center justify-center rounded-full focus:outline-none">
            <InsertDriveFileIcon style={{
                color: '#4c4e52',
                fontSize: '2.3rem'
            }}/>
            </button>
            <div className="self-start">
            <input 
                type="text" 
                placeholder="Untitled Spreadsheet" 
                id="title_name"
                className="h-[10%] w-[100%] text-[1.2rem] text-left font-bold bg-none border-none focus:outline-none"
            />
            </div>
            <div className="flex self-start flex space-x-1.0">
                <button className="hover:border-transparent bg-white hover:bg-gray-300 size-1
                flex items-center justify-center rounded-full focus:outline-none px-4 py-4">
            <StarBorderIcon style={{
                color: '#4c4e52',
                fontSize: '1.3rem'
            }}/>
            </button>
            <button className="hover:border-transparent bg-white hover:bg-gray-300 size-1
            flex items-center justify-center rounded-full focus:outline-none px-4 py-4">
            <DriveFileMoveIcon style={{
                color: '#4c4e52',
                fontSize: '1.3rem'
            }}/>
            </button>
            <button className="hover:border-transparent bg-white hover:bg-gray-300 size-1
            flex items-center justify-center rounded-full focus:outline-none px-4 py-4">
            <CloudDoneIcon style={{
                color: '#4c4e52',
                fontSize: '1.3rem'
            }}/>
            </button>
            </div>
        </div>
        <div className="w-[23%] h-[auto] flex items-center justify-around ">
        <button className="hover:border-transparent bg-white hover:bg-gray-300 size-11 mx-1 
        flex items-center justify-center rounded-full focus:outline-none "> 
              <RestoreIcon style={{
                color: '#4c4e52',
                fontSize: '1.8rem'
            }}/>
            </button>
            <button className="hover:border-transparent bg-white hover:bg-gray-300 size-11 mx-1 
            flex items-center justify-center rounded-full focus:outline-none"> 
            <VideoChatIcon style={{
                color: '#4c4e52',
                fontSize: '1.8rem'
            }}/>
            </button>
            <div className="flex space-x-0.5">
                <button className="hover:border-transparent bg-gray-100 hover:bg-gray-300 w-[80px] h-[38px] bg-[#ADD8E6] 
                flex items-center justify-center cursor-pointer rounded-full rounded-r-lg bg-sky-100 hover:bg-sky-200 focus:outline-none">
                    <LockOutlinedIcon style={{
                        color: 'black',
                        fontSize: '0.9rem',
                        marginRight: '5px'
                    }}/>
                    Share
                </button>
                <button className="w-[10%px] h-[38px] hover:border-transparent bg-gray-100 hover:bg-gray-300 bg-[#ADD8E6] size-1 
                flex items-center justify-center cursor-pointer rounded-full rounded-l-lg bg-sky-100 hover:bg-sky-200 focus:outline-none px-3">
                    <ArrowDropDownIcon style={{
                        color: 'black',
                        fontSize: '0.9rem'
                    }}/>  
                </button>
            </div>
            <div className="cursor-pointer">
            <button className="hover:border-transparent bg-white hover:bg-gray-300 size-11 mx-1 
            flex items-center justify-center rounded-full focus:outline-none"> 
            <AccountCircleIcon style={{
                color: '#4c4e52',
                fontSize: '2.0rem'
            }}/>
            </button> 
          </div> 
        </div>
    </div>
  );
};

export default Navbar;