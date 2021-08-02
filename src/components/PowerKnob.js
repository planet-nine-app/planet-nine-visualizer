import React, { useState } from "react";
import { Silver } from "react-dial-knob";

import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


export default function PowerKnob() {

  // knob
  const [value, setValue] = useState(0);
  // probability functions ***MAP THESE LATER**
  // Currently this isn't accurate as it calculates for each individual rarity
  const common = Math.round((27.2/100) * ((value/200)))
  const nine = Math.round((24.3/100)* ((value/200)))
  const uncommon = Math.round((20.5/100)* ((value/200)))
  const rare = Math.round((15/100)* ((value/200)))
  const epic = Math.round((8.4/100)* ((value/200)))
  const legendary = Math.round((3.8/100)* ((value/200)))
  const mythical = Math.round((.8/100)* ((value/200)))

  return (
    <Silver
      diameter={150}
      min={0}
      max={20000}
      step={200}
      value={value}
      onValueChange={setValue}
      ariaLabelledBy={"my-label"}
    >
      <label id={"my-label"}>Rarity Distrubution</label>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Power</th>
            <th>Common</th>
            <th>Nine</th>
            <th>Uncommon</th>
            <th>Rare</th>
            <th>Epic</th>
            <th>Legendary</th>
            <th>Mythical</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{value}</td>
            <td>{common}</td>
            <td>{nine}</td>
            <td>{uncommon}</td>
            <td>{rare}</td>
            <td>{epic}</td>
            <td>{legendary}</td>
            <td>{mythical}</td>
          </tr>
        </tbody>
      </Table>
    </Silver>
  );
}
