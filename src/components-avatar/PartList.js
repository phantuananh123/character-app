import React, { useState } from "react";

function PartList({ length, status, setState, clickIndex }) {
  let render = [];
  for (let index = 1; index <= length; index++) {
    const element = `/character/${status}/${index}.png`;
    render.push(element);
  }

  const checkClick = (index) => {
    console.log(index === checkClick);
    setState(index + 1);
  };

  return (
    <div className="list-section">
      <h2>{status}</h2>
      <div className="list">
        {render.map((element, index) => (
          <>
            <div
              className="square"
              id={index + 1 === clickIndex ? `inHover` : ``}
              onClick={() => checkClick(index)}
            >
              <img
                alt=""
                className="img-center"
                src={`${element}`}
                height="60"
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default PartList;
