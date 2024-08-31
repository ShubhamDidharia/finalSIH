import React from 'react';
import Navbar from './Navbar'
import Message from './Message';

const SpreadSheet = () => {
  return (
    <>
    <Navbar/>
    <iframe
    src="/sheet/ssctrltest1.html"  // aapki HTML file ka correct path
    title="SpreadSheet"
    width="100%"
    height="700vh"
    style={{border: 'none'}}
  ></iframe>
  <Message/>
    </>
  );
};

export default SpreadSheet;
