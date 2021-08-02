import React, { useState } from "react";
import { Silver } from "react-dial-knob";

export default function NineumValue () {
    const [value, setValue] = useState(0);
return (
    <Silver
      diameter={100}
      min={0}
      max={200}
      step={1}
      value={value}
      onValueChange={setValue}
      ariaLabelledBy={"my-label"}
    >
      <label id={"my-label"}>Value of Nineum</label>
      <h1>${value}</h1>
      </Silver>
)
};