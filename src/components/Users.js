import React, { useState } from "react";
import { Silver } from "react-dial-knob";

export default function Users () {
    const [value, setValue] = useState(0);
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
      <label id={"my-label"}>Users</label>

      <h1>{value}</h1>
      </Silver>
)
};