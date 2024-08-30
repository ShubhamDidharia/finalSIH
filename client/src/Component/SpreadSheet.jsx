import React from 'react';
import Navbar from './Navbar'
const SpreadSheet = () => {
  return (
    <>
    <Navbar/>
    <iframe
    src="/sheet/ssctrltest1.html"  // aapki HTML file ka correct path
    title="SpreadSheet"
    width="100%"
    height="700vh"
    style={{border: 'none' ,marginTop:'20px'}}
  ></iframe>
    </>
  );
};

export default SpreadSheet;
