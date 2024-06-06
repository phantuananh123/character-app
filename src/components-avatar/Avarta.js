import React from "react";
import Part from "./Part";

function Avarta({
  bodyAvatar,
  eyes,
  hair,
  eyebrows,
  glasses,
  clothing1,
  clothing2,
  clothing3,
}) {
  return (
    <>
      <div className="avatar">
        <Part index={bodyAvatar} zIndex={0} path={"body"} />
        <Part index={eyes} zIndex={1} path="eyes" />
        <Part index={hair} zIndex={4} path="hair" />
        <Part index={eyebrows} zIndex={2} path="eyebrows" />
        <Part index={glasses} zIndex={3} path="accessories/glasses" />
        <Part index={clothing1} zIndex={5} path="clothes/layer_1" />
        <Part index={clothing2} zIndex={5} path="clothes/layer_2" />
        <Part index={clothing3} zIndex={5} path="clothes/layer_3" />
      </div>
    </>
  );
}

export default Avarta;
