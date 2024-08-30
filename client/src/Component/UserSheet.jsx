import React, { useState, useEffect } from "react";

const UserSheet = ({ entries }) => {
  const [pagename, setPagename] = useState("");
  const [edit, setEdit] = useState("no");
  const [view, setView] = useState("no");
  const [del, setDel] = useState("no");

  const doEdit = (p) => {
    setPagename(p);
    setEdit("yes");
  };

  const doView = (p) => {
    setPagename(p);
    setView("yes");
  };

  const doRemove = (p) => {
    setPagename(p);
    setDel("yes");
  };

  useEffect(() => {
    const pager = new Pager("template-apps", 15);
    pager.init();
    pager.showPageNav("pager", "pageNavPosition");
    pager.showPage(1);
  }, []);

  return (
    <div className="container">
      <div className="span-7">
        <hr className="space" />
      </div>
      <div className="span-8" style={{ textAlign: "center" }}>
        <form action="/usersheet_post" method="POST">
          <div>
            <table id="template-apps">
              {entries.map((entry) => (
                <tr key={entry.fname}>
                  <td>{entry.fname}</td>
                  <td>
                    <input
                      className="smaller"
                      type="submit"
                      value="Edit"
                      onClick={() => doEdit(entry.fname)}
                    />
                  </td>
                  <td>
                    <input
                      className="smaller"
                      type="submit"
                      value="View"
                      onClick={() => doView(entry.fname)}
                    />
                  </td>
                  <td>
                    <input
                      className="smaller"
                      type="submit"
                      value="Delete"
                      onClick={() => doRemove(entry.fname)}
                    />
                  </td>
                </tr>
              ))}
            </table>

            <div id="pageNavPosition"></div>
            <input id="pagename" name="pagename" type="hidden" value={pagename} />
            <input id="edit" name="edit" type="hidden" value={edit} />
            <input id="view" name="view" type="hidden" value={view} />
            <input id="delete" name="delete" type="hidden" value={del} />
          </div>
          <br />
        </form>
      </div>

      <div className="span-7 last">
        <hr className="space" />
      </div>
    </div>
  );
};

export default UserSheet;
