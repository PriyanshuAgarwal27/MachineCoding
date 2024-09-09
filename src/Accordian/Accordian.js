import { useEffect, useState } from "react";
import AccordianList from "./AccordianList";
import "./AccordianList.css";
const Accordian = () => {
  const data = [
    {
      title: "Accordian Item #1",
      body: "This is the first accordian item. It is shown by default",
    },
    {
      title: "Accordian Item #2",
      body: "This is the second accordian item. It is shown by default",
    },
    {
      title: "Accordian Item #3",
      body: "This is the third accordian item. It is shown by default",
    },
  ];
  const [openIndex, setOpenIndex] = useState([1, 2]);
  return (
    <div className="list">
      {data &&
        data.map((list, index) => {
          return (
            <AccordianList
              key={index}
              index={index}
              title={list.title}
              body={list.body}
              open={index == openIndex ? true : false}
              setOpen={() => {
                index === openIndex ? setOpenIndex(null) : setOpenIndex(index);
              }}
            />
          );
        })}
    </div>
  );
};

export default Accordian;
