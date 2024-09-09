import "./UndoRedo.css";
import { useState, useEffect } from "react";
const UndoRedo = () => {
  const [ans, setAns] = useState(0);
  const [history, setHistory] = useState([]);
  const [undoList, setUndoList] = useState([]);

  const maintainHistory = (key, prev, curr) => {
    console.log(key, prev, curr);
    const obj = {
      action: key,
      prev,
      curr,
    };
    const copyObj = [...history];
    copyObj.unshift(obj);
    setHistory(copyObj);
  };
  const onHandleClick = (e) => {
    const val = parseInt(e.target.id);
    maintainHistory(e.target.id, Number(ans), val + Number(ans));
    setAns((existing) => Number(existing) + val);
  };
  const onClickUndo = () => {
    if (history.length) {
      const copyObj = [...history];
      const firstObjToRemove = copyObj.shift();
      setHistory(copyObj);

      setAns(firstObjToRemove.prev);

      const removedObj = [...undoList];
      removedObj.unshift(firstObjToRemove);
      setUndoList(removedObj);
    }
  };
  const onClickRedo = () => {
    if (undoList.length != 0) {
      const copyObj = [...undoList];
      const firstRemovedObj = copyObj.shift();
      setUndoList(copyObj);

      const obj = [...history];
      obj.unshift(firstRemovedObj);
      setHistory(obj);

      setAns(firstRemovedObj.prev);
    }
  };
  return (
    <div>
      <center>
        <div className="container">
          <h1>Undoable Counter</h1>
        </div>
        <div>
          <button className="undo" onClick={onClickUndo}>
            UNDO
          </button>
          <button className="redo" onClick={onClickRedo}>
            REDO
          </button>
        </div>
        <div>
          <button className="neg" onClick={onHandleClick} id="-100">
            -100
          </button>
          <button className="neg" onClick={onHandleClick} id="-10">
            -10
          </button>
          <button className="neg" onClick={onHandleClick} id="-1">
            -1
          </button>
          <span>{ans}</span>
          <button className="pos" onClick={onHandleClick} id="1">
            1
          </button>
          <button className="pos" onClick={onHandleClick} id="10">
            10
          </button>
          <button className="pos" onClick={onHandleClick} id="100">
            100
          </button>
        </div>
        <div className="history-container">HISTORY</div>
        <div className="history-box">
          {history.map((item, index) => {
            return (
              <div>
                {item.action} ({item.prev} : {item.curr})
              </div>
            );
          })}
        </div>
      </center>
    </div>
  );
};
export default UndoRedo;
