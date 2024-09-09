import { data } from "./MockData";
import FAQItem from "./FAQItem";
import { useState } from "react";

const FAQComp = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);

  return (
    <div>
      {data &&
        data.map((item, index) => {
          return (
            <FAQItem
              key={index}
              open={index == currentIndex ? true : false}
              ques={item.question}
              ans={item.answer}
              setOpen={() => {
                index == currentIndex
                  ? setCurrentIndex(null)
                  : setCurrentIndex(index);
              }}
            />
          );
        })}
    </div>
  );
};

export default FAQComp;
