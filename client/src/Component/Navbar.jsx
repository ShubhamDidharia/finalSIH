import React from 'react';
import VideoChatIcon from '@mui/icons-material/VideoChat';
import MessageIcon from '@mui/icons-material/Message';
import RestoreIcon from '@mui/icons-material/Restore';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import LockIcon from '@mui/icons-material/Lock';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const Navbar = () => {
  return (
    <div className="w-[100vw] h-[auto] flex justify-between items-center p-3">
        <div className="w-[25%] h-[80%] flex items-center justify-between pl-2">
            <InsertDriveFileIcon style={{
                color: '#4c4e52',
                fontSize: '2.5rem'
            }}/>
            <div className="self-start">
            <input 
                type="text" 
                placeholder="Untitled Spreadsheet" 
                id="title_name"
                className="h-[10%] w-[10%px] text-[1.2rem] text-left font-bold bg-none border-none ml-3"
            />
            </div>
            <div className="flex space-x-2 self-start">
            <StarBorderIcon style={{
                color: '#4c4e52',
                fontSize: '1.5rem'
            }}/>
            <DriveFileMoveIcon style={{
                color: '#4c4e52',
                fontSize: '1.5rem'
            }}/>
            <CloudDoneIcon style={{
                color: '#4c4e52',
                fontSize: '1.5rem'
            }}/>
            </div>
        </div>
        <div className="w-[23%] h-[auto] flex items-center justify-around ">
        <button> 
              <RestoreIcon style={{
                color: '#4c4e52',
                fontSize: '2.1rem'
            }}/>
            </button>
            <button> 
            <MessageIcon style={{
                color: '#4c4e52',
                fontSize: '2.1rem'
            }}/>
            </button>
            <button> 
            <VideoChatIcon style={{
                color: '#4c4e52',
                fontSize: '2.1rem'
            }}/>
            </button>
        
            <div className="flex space-x-0.5">
            <button className="w-[90px] h-[38px] bg-[#ADD8E6] flex items-center justify-evenly cursor-pointer rounded-full rounded-r-lg pl-2">
                <LockIcon style={{
                    color: 'black',
                    fontSize: '0.9rem'
                }}/>
                Share
            </button>
            <button className="w-[20px] h-[38px] bg-[#ADD8E6] flex items-center justify-evenly cursor-pointer rounded-l-lg rounded-full">
                <ArrowDropDownIcon style={{
                    color: 'black',
                    fontSize: '0.9rem'
                }}/>  
            </button>
            </div>
            <div className="cursor-pointer">
            <button> 
            <AccountCircleIcon style={{
                color: '#4c4e52',
                fontSize: '2.3rem'
            }}/>
            </button> 
          </div> 
        </div>
    </div>
  );
};

export default Navbar;