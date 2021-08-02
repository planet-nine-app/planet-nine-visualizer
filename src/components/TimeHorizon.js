import React, { useState } from "react";
import { Silver } from "react-dial-knob";

export default function TimeHorizon () {
    const [value, setValue] = useState(0);    
    const totalPower = Math.round(value * 5/3)
return (
    <Silver
      diameter={100}
      min={0}
      max={20000}
      step={1}
      value={value}
      onValueChange={setValue}
      ariaLabelledBy={"my-label"}
    >
      <label id={"my-label"}>Time Horizon</label>
      <h1>{value} minutes</h1>
      <h2>Total Available Power: {totalPower}</h2>
      </Silver>
)
};