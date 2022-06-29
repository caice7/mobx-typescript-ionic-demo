import { IonContent } from "@ionic/react";
import React, { useState } from "react";

const Recommend: React.FC = () => {
  const [state, setState] = useState(0)
  const handleClick = () => {
    console.log("点击", state)
    setState(state + 1)
  }
  return (
    <IonContent fullscreen>
      <div onClick={() => handleClick()}>单独页{state}</div>
    </IonContent>
  );
};

export default Recommend;