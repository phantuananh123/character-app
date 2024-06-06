import React, { useEffect, useState } from "react";
import "./App.css";
import PartList from "./components-avatar/PartList";
import Avarta from "./components-avatar/Avarta";
function App() {
  const total = {
    body: 17,
    eyes: 17,
    hair: 73,
    mouth: 24,
    eyebrows: 15,
    hat: 28,
    glasses: 17,
    clothing1: 5,
    clothing2: 5,
    clothing3: 9,
  };

  const [bodyAvatar, setBodyAvatar] = useState(1);
  const [eyes, setEyes] = useState(1);
  const [hair, setHair] = useState(1);
  const [eyebrows, setEyesBrows] = useState(1);
  const [glasses, setGlasses] = useState(1);
  const [clothing1, setClothing1] = useState(1);
  const [clothing2, setClothing2] = useState(1);
  const [clothing3, setClothing3] = useState(1);
  const clickIndex = bodyAvatar;

  // console.log(bodyAvatar, clickIndex);

  const random = () => {
    setBodyAvatar(Math.ceil(Math.random() * total.body));
    setEyes(Math.ceil(Math.random() * total.eyes));
    setHair(Math.ceil(Math.random() * total.hair));
    setEyesBrows(Math.ceil(Math.random() * total.eyebrows));
    setGlasses(Math.ceil(Math.random() * total.glasses));
    setClothing1(Math.ceil(Math.random() * total.clothing1));
    setClothing2(Math.ceil(Math.random() * total.clothing2));
    setClothing3(Math.ceil(Math.random() * total.clothing3));
  };

  useEffect(() => {
    random();
  }, []);

  return (
    <div className="App">
      <div className="title">CHARACTER</div>
      <div className="sub-title">🛠️CUSTOMIZATION🛠️</div>
      <div className="divider"></div>
      <div className="avatar-group">
        <div>
          <div className="avatar-wrapper">
            <Avarta
              bodyAvatar={bodyAvatar}
              eyes={eyes}
              hair={hair}
              eyebrows={eyebrows}
              glasses={glasses}
              clothing1={clothing1}
              clothing2={clothing2}
              clothing3={clothing3}
            />
            <div className="text-center" style={{ position: "relative" }}>
              <button className="button" onClick={random}>
                Random
              </button>
            </div>
          </div>
        </div>
        <div>
          <PartList
            length={total.body}
            status={"body"}
            setState={setBodyAvatar}
            clickIndex={clickIndex}
          />
          <PartList length={total.eyes} status={"eyes"} setState={setEyes} />
          <PartList length={total.hair} status={"hair"} setState={setHair} />
          <PartList
            length={total.eyebrows}
            status={"eyebrows"}
            setState={setEyesBrows}
          />
          <PartList
            length={total.glasses}
            status={"accessories/glasses"}
            setState={setGlasses}
          />
          <PartList
            length={total.clothing1}
            status={"clothes/layer_1"}
            setState={setClothing1}
          />
          <PartList
            length={total.clothing2}
            status={"clothes/layer_2"}
            setState={setClothing2}
          />
          <PartList
            length={total.clothing3}
            status={"clothes/layer_3"}
            setState={setClothing3}
          />
        </div>
      </div>
    </div>
  );
}
export default App;
