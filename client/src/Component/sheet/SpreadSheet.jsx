import React, { useEffect } from "react";
import "./socialcalc.css"; // Assuming you have this CSS file in your project
 
// Importing the required scripts
import "./socialcalcconstants.js";
import "./socialcalc-3.js";
import "./socialcalctableeditor.js";
import "./formatnumber2.js";
import "./formula1.js";
import "./socialcalcpopup.js";
import "./socialcalcspreadsheetcontrol.js";
 
const SSCtrlTest1 = () => {
  useEffect(() => {
    // Setting up the spreadsheet control and other functionalities
    const setupSpreadsheet = () => {
      const scc = window.SocialCalc.Constants;
 
      const b1 = window.location.search.charAt(1) || "4";
      const b2 = window.location.search.charAt(2) || "C";
      const b3 = window.location.search.charAt(3) || "8";
      const b4 = window.location.search.charAt(4) || "9";
      const b5 = window.location.search.charAt(5) || "8";
 
      scc.SCToolbarbackground = `background-color:#4040${b1}0;`;
      scc.SCTabbackground = `background-color:#CC${b2};`;
      scc.SCTabselectedCSS = `font-size:small;padding:6px 30px 6px 8px;color:#FFF;background-color:#4040${b1}0;cursor:default;border-right:1px solid #CC${b2};`;
      scc.SCTabplainCSS = `font-size:small;padding:6px 30px 6px 8px;color:#FFF;background-color:#8080${b3}0;cursor:default;border-right:1px solid #CC${b2};`;
      scc.SCToolbartext = "font-size:x-small;font-weight:bold;color:#FFF;padding-bottom:4px;";
      scc.ISCButtonBorderNormal = `#4040${b1}0`;
      scc.ISCButtonBorderHover = `#99${b4}`;
      scc.ISCButtonBorderDown = "#FFF";
      scc.ISCButtonDownBackground = `#88${b5}`;
 
      window.SocialCalc.Popup.LocalizeString = window.SocialCalc.LocalizeString;
 
      const spreadsheet = new window.SocialCalc.SpreadsheetControl();
      spreadsheet.InitializeSpreadsheetControl("tableeditor", 0, 0, 0);
      spreadsheet.ExecuteCommand("redisplay", "");
 
      spreadsheet.ExportCallback = function (s) {
        alert(window.SocialCalc.ConvertSaveToOtherFormat(window.SocialCalc.Clipboard.clipboard, "csv"));
      };
 
      // Add the functions from the original HTML here
      window.dosave = function () {
        const savestr = document.getElementById("savestr");
        savestr.value = spreadsheet.CreateSpreadsheetSave();
        alert(savestr.value);
      };
 
      window.doreload = function () {
        const savestr = document.getElementById("savestr");
        const parts = spreadsheet.DecodeSpreadsheetSave(savestr.value);
        if (parts) {
          if (parts.sheet) {
            spreadsheet.sheet.ResetSheet();
            spreadsheet.ParseSheetSave(savestr.value.substring(parts.sheet.start, parts.sheet.end));
          }
          if (parts.edit) {
            spreadsheet.editor.LoadEditorSettings(savestr.value.substring(parts.edit.start, parts.edit.end));
          }
        }
        if (spreadsheet.editor.context.sheetobj.attribs.recalc === "off") {
          spreadsheet.ExecuteCommand("redisplay", "");
        } else {
          spreadsheet.ExecuteCommand("recalc", "");
        }
      };
 
      window.doresize = function () {
        spreadsheet.DoOnResize();
      };
 
      window.doattribs = function () {
        const attribs = spreadsheet.sheet.EncodeCellAttributes(spreadsheet.editor.ecell.coord);
        let str = "";
        for (const attrib in attribs) {
          str += `${attrib}: def=${attribs[attrib].def}, val='${attribs[attrib].val}'\n`;
        }
        str += "=====\n";
        const sheetAttribs = spreadsheet.sheet.EncodeSheetAttributes();
        for (const attrib in sheetAttribs) {
          str += `${attrib}: def=${sheetAttribs[attrib].def}, val='${sheetAttribs[attrib].val}'\n`;
        }
        alert(str);
      };
 
      window.newcopy = function () {
        const editor = spreadsheet.editor;
        const ta = editor.pasteTextarea;
        ta.value = "";
 
        const cell = window.SocialCalc.GetEditorCellElement(editor, editor.ecell.row, editor.ecell.col);
        if (cell) {
          const position = window.SocialCalc.GetElementPosition(cell.element);
          ta.style.left = `${position.left - 1}px`;
          ta.style.top = `${position.top - 1}px`;
        }
        let sel;
        if (editor.range.hasrange) {
          sel = `${window.SocialCalc.crToCoord(editor.range.left, editor.range.top)}:${window.SocialCalc.crToCoord(editor.range.right, editor.range.bottom)}`;
        } else {
          sel = editor.ecell.coord;
        }
 
        const parseobj = new window.SocialCalc.Parse(`copy ${sel} all`);
        window.SocialCalc.ExecuteSheetCommand(editor.context.sheetobj, parseobj, true);
        window.SocialCalc.Clipboard.clipboard.loadedByCtrlC = true;
        ta.value = window.SocialCalc.ConvertSaveToOtherFormat(window.SocialCalc.Clipboard.clipboard, "tab");
        ta.style.display = "block";
        ta.focus();
        ta.select();
 
        setTimeout(() => {
          ta.style.display = "none";
        }, 200);
      };
 
      window.dosum = function () {
        const editor = spreadsheet.editor;
        const sheet = editor.context.sheetobj;
 
        let cmd;
        if (editor.range.hasrange) {
          const sel = `${window.SocialCalc.crToCoord(editor.range.left, editor.range.top)}:${window.SocialCalc.crToCoord(editor.range.right, editor.range.bottom)}`;
          cmd = `set ${window.SocialCalc.crToCoord(editor.range.right, editor.range.bottom + 1)} formula sum(${sel})`;
        } else {
          let row = editor.ecell.row - 1;
          const col = editor.ecell.col;
          if (row <= 1) {
            cmd = `set ${editor.ecell.coord} constant e#REF! 0 #REF!`;
          } else {
            let foundvalue = false;
            while (row > 0) {
              const cr = window.SocialCalc.crToCoord(col, row);
              const cell = sheet.GetAssuredCell(cr);
              if (!cell.datatype || cell.datatype === "t") {
                if (foundvalue) {
                  row++;
                  break;
                }
              } else {
                foundvalue = true;
              }
              row--;
            }
            cmd = `set ${editor.ecell.coord} formula sum(${window.SocialCalc.crToCoord(col, row)}:${window.SocialCalc.crToCoord(col, editor.ecell.row - 1)})`;
          }
        }
 
        editor.EditorScheduleSheetCommands(cmd);
      };
 
      window.dosum2 = function () {
        const editor = spreadsheet.editor;
        const sheet = editor.context.sheetobj;
 
        let cmd;
        if (editor.range.hasrange) {
          const sel = `${window.SocialCalc.crToCoord(editor.range.left, editor.range.top)}:${window.SocialCalc.crToCoord(editor.range.right, editor.range.bottom)}`;
          cmd = `sum(${sel})`;
        } else {
          let row = editor.ecell.row - 1;
          const col = editor.ecell.col;
          if (row <= 1) {
            cmd = "sum()";
          } else {
            let foundvalue = false;
            while (row > 0) {
              const cr = window.SocialCalc.crToCoord(col, row);
              const cell = sheet.GetAssuredCell(cr);
              if (!cell.datatype || cell.datatype === "t") {
                if (foundvalue) {
                  row++;
                  break;
                }
              } else {
                foundvalue = true;
              }
              row--;
            }
            cmd = `sum(${window.SocialCalc.crToCoord(col, row)}:${window.SocialCalc.crToCoord(col, editor.ecell.row - 1)})`;
          }
        }
 
        editor.EditorAddToInput(cmd, "=");
      };
 
      window.doLocConstants = function () {
        const cnames = [];
        for (const cname in window.SocialCalc.LocalizeStringList) {
          cnames.push(cname);
        }
        cnames.sort();
        let str = "";
        for (let i = 0; i < cnames.length; i++) {
          const cname = cnames[i];
          const ctname = `s_loc_${cname.toLowerCase().replace(/\s/g, "_").replace(/\W/g, "X")}`;
          const cval = window.SocialCalc.Constants[ctname];
          if (!cval) {
            str += `${ctname}: "${cname}",\n`;
          }
        }
        if (!str) str = "All constants were pre-defined.";
        alert(str);
      };
    };
 
    setupSpreadsheet();
  }, []);
 
  return (
    <div onResize={() => window.doresize()}>
      <form name="f0" method="POST">
        <input className="hide" type="button" value="Recalc" onClick={() => window.spreadsheet.ExecuteCommand("recalc", "")} />
        <input className="hide" type="button" value="Redisplay" onClick={() => window.spreadsheet.editor.ScheduleRender()} />
        <input className="hide" type="button" value="Settings" onClick={() => alert(window.spreadsheet.editor.SaveEditorSettings())} />
        <input className="hide" type="button" value="CellHTMLSave" onClick={() => alert(window.spreadsheet.CreateCellHTMLSave(null))} />
        <input className="hide" type="button" value="CellHTML A1" onClick={() => alert(window.spreadsheet.CreateCellHTML("A1"))} />
        <input className="hide" type="button" value="SheetHTML" onClick={() => alert(window.spreadsheet.CreateSheetHTML())} />
        <input className="hide" type="button" value="SheetSave" onClick={() => alert(window.spreadsheet.CreateSheetSave())} />
        <input className="hide" type="button" value="Attribs" onClick={() => window.doattribs()} />
        <input className="hide" type="button" value="New Copy" onClick={() => window.newcopy()} />
        <input className="hide" type="button" value="Sum" onClick={() => window.dosum()} />
        <input className="hide" type="button" value="Sum2" onClick={() => window.dosum2()} />
        <textarea id="savestr" style={{ display: "none" }}></textarea>
        <input type="hidden" name="newstr" id="newdata" value="" />
        <input type="hidden" name="pagename" value="$pagename" />
        <input type="hidden" name="sheetname" value="$sheetname" />
      </form>
      <div id="tableeditor" style={{ margin: "8px 140px 10px 0px" }}>
        editor goes here
      </div>
    </div>
  );
};
 
export default SSCtrlTest1;