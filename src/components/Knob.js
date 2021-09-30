import React, { useState, createContext } from "react";
import { Silver } from "react-dial-knob";

import "bootstrap/dist/css/bootstrap.min.css";

export const ValueContext = createContext();


export default function Knob() {
  // knob
  const [value, setValue] = useState(0);
  console.log(React.useContext(ValueContext))

  return (
      <Silver
        diameter={150}
        min={0}
        max={20000}
        step={1}
        value={value}
        onValueChange={setValue}
        ariaLabelledBy={"my-label"}
        name="Power"
      ></Silver>
  );
}

