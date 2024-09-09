import { useState, useEffect } from "react";
import "./AccordianList.css";
const AccordianList = ({ title, body, open, setOpen }) => {
  return (
    <div>
      <center>
        <div
          className={`title ${open ? "color" : ""} `}
          onClick={() => {
            setOpen((open) => !open);
          }}
        >
          <span>{title}</span>
          <span>{open ? "➖" : "➕"}</span>
        </div>

        {open && <div className="body">{body}</div>}
      </center>
    </div>
  );
};
export default AccordianList;
