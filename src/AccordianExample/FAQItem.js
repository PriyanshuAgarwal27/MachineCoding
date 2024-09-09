import { useState } from "react";
import "./FAQItem.css";

const FAQItem = ({ ques, ans, open, key, setOpen }) => {
  const openTab = () => {
    setOpen(!open);
  };
  return (
    <div>
      <center>
        <div className="question" onClick={openTab}>
          <span>{!open ? "👉" : "👇"}</span>
          <span>{ques}</span>
        </div>
        {open && <div className="ans">{ans}</div>}
      </center>
    </div>
  );
};
export default FAQItem;
