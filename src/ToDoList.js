import React, { useState } from "react";
function ToDoList() {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState("");
  function addActivity() {
    setlistData((listData) => {
      const updatedList = [...listData, activity];
      setActivity("");
      return updatedList;
    });
  }
  return (
    <>
      <div className="container">
        <div className="header">To Do List for Hassan </div>
        <input
          type="text"
          placeholder="Put your todo list items"
          value={setActivity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity} Add />
        <p className="List-Heading" here is your list />
        {listData != [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                </p>
              </>
            );
          })}
      </div>
    </>
  );
}
export default ToDoList;
