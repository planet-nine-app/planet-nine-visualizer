import React from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Nineum from "./Nineum";

const NineumTable = () => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Rarity</th>
          <th>Total</th>
          <th>Percentage</th>
          <th>Yours</th>
        </tr>
      </thead>
      <tbody>
        {Nineum.map(({ rarity, total, percentage, yours }) => (
          <NineumRow
            rarity={rarity}
            total={total}
            percentage={percentage}
            yours={yours}
          />
        ))}
      </tbody>
    </Table>
  );
};

const NineumRow = ({ rarity, total, percentage, yours, i }) => (
  <tr key={i}>
    <td>{rarity}</td>
    <td>{total}</td>
    <td>{percentage}</td>
    <td>{yours}</td>
  </tr>
);

export default NineumTable;
