
import React, { useEffect, useRef } from 'react';
import Navbar from './Navbar';
import Message from './Message';

const Spreadsheet = () => {
    const spreadsheetRef = useRef(null);

    useEffect(() => {
        // Load jQuery
        const jQueryScript = document.createElement('script');
        jQueryScript.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
        jQueryScript.onload = () => {
            // Load SocialCalc after jQuery has loaded
            const socialCalcScript = document.createElement('script');
            socialCalcScript.src = '../temp/SocialCalc.js';
            socialCalcScript.onload = () => {
                if (window.location.pathname === "/sheet") {
                    const socialCalcControl = new SocialCalc.SpreadsheetControl();
                    socialCalcControl.InitializeSpreadsheetControl(spreadsheetRef.current, 3000, 2000, 100);
                    socialCalcControl.ResetSheet();
                }
            };
            document.body.appendChild(socialCalcScript);
        };
        document.body.appendChild(jQueryScript);

        // Load the stylesheet
        const socialCalcStylesheet = document.createElement('link');
        socialCalcStylesheet.rel = 'stylesheet';
        socialCalcStylesheet.href = '../temp/socialcalc.css';
        document.head.appendChild(socialCalcStylesheet);

        // Clean up the scripts and stylesheet when the component unmounts
        return () => {
            document.body.removeChild(jQueryScript);
            if (document.body.contains(socialCalcScript)) {
                document.body.removeChild(socialCalcScript);
            }
            document.head.removeChild(socialCalcStylesheet);
        };
    }, []);

    return <>
            <Navbar/>
            <div id="spreadsheet" ref={spreadsheetRef} style={{ width: 'fit-content' }}></div>
            <Message/>
        </>;
};

export default Spreadsheet;