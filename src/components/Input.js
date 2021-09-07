import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



export default function Input() {
  const [data, setData] = useState({
    Power: "",
    TimeHorizon: "",
    Price: "",
    TotalUsers: "",
    UsersSpendingPower: "",
    AveragePowerSpentByUsers: "",
  });

  function changedataInfo(e) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  // variables
  const totalPower = data.TotalUsers * 1000;
  const globalPowerRegen = 5 / 3;
  const powerCap = totalPower / data.TotalUsers;
  const staticMiningEfficiency = 0.75;

  const powerToNineum = data.Power / 200;

  // formulas
  const totalAvailablePower = globalPowerRegen * data.TimeHorizon;
  const minedNineumTotal =
    totalAvailablePower * staticMiningEfficiency * powerToNineum;
  const earnedNineum =
    (data.UsersSpendingPower * (data.AveragePowerSpentByUsers - 200)) / 200;
  const totalNineum = minedNineumTotal + earnedNineum;

  // nineum rarity probability
  const commonProb = 0.272;
  const nineProb = 0.243;
  const uncommonProb = 0.205;
  const rareProb = 0.15;
  const epicProb = 0.084;
  const legendaryProb = 0.038;
  const mythicalProb = 0.008;

  // nineum rarity distribution
  const common = Math.round(commonProb * totalNineum);
  const nine = Math.round(nineProb * totalNineum);
  const uncommon = Math.round(uncommonProb * totalNineum);
  const rare = Math.round(rareProb * totalNineum);
  const epic = Math.round(epicProb * totalNineum);
  const legendary = Math.round(legendaryProb * totalNineum);
  const mythical = Math.round(mythicalProb * totalNineum);

  // odds liklihood common/x
  const commonOdds = commonProb / (1 - commonProb);
  const nineOdds = nineProb / (1 - nineProb);
  const uncommonOdds = uncommonProb / (1 - uncommonProb);
  const rareOdds = rareProb / (1 - rareProb);
  const epicOdds = epicProb / (1 - epicProb);
  const legendaryOdds = legendaryProb / (1 - legendaryProb);
  const mythicalOdds = mythicalProb / (1 - mythicalProb);

  // nineum value by rarity
  // currently this is value where the value of a common nineum is equal to the price of nineum.
  const commonValue = data.Price * (commonOdds / commonOdds).toFixed(2);
  const nineValue = data.Price * (commonOdds / nineOdds).toFixed(2);
  const uncommonValue = data.Price * (commonOdds / uncommonOdds).toFixed(2);
  const rareValue = data.Price * (commonOdds / rareOdds).toFixed(2);
  const epicValue = data.Price * (commonOdds / epicOdds).toFixed(2);
  const legendaryValue = data.Price * (commonOdds / legendaryOdds).toFixed(2);
  const mythicalValue = data.Price * (commonOdds / mythicalOdds).toFixed(2);

  return (
    <div>
      <h2>Please Input Values</h2>
      <p>
        <label>
          Power spent :
          <input
            type="number"
            name="Power"
            value={data.Power}
            onChange={changedataInfo}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Time Horizon :
          <input
            type="number"
            name="TimeHorizon"
            value={data.TimeHorizon}
            onChange={changedataInfo}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Average Price of Nineum :
          <input
            type="number"
            name="Price"
            value={data.Price}
            onChange={changedataInfo}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Total Users :
          <input
            type="number"
            name="TotalUsers"
            value={data.TotalUsers}
            onChange={changedataInfo}
            min="383"
          ></input>
        </label>
      </p>
      <p>
        <label>
          Users Spending Power :
          <input
            type="number"
            name="UsersSpendingPower"
            value={data.UsersSpendingPower}
            onChange={changedataInfo}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Average Power Spent by Users :
          <input
            type="number"
            name="AveragePowerSpentByUsers"
            value={data.AveragePowerSpentByUsers}
            onChange={changedataInfo}
          ></input>
        </label>
      </p>
      <h2>Calculated Results</h2>
      <p>Power Cap: {powerCap}</p>
      <p>Total Available Power: {totalAvailablePower}</p>
      <p>Mined Nineum Total: {minedNineumTotal}</p>
      <p>Earned Nineum: {earnedNineum}</p>
      <p>Total Nineum: {totalNineum}</p>

      <p>Power to Nineum Ratio: {powerToNineum}</p>
      <p>Total Power: {totalPower}</p>

      <h1>Rarity Distribution</h1>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th></th>
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
            <td></td>
            <td>{common}</td>
            <td>{nine}</td>
            <td>{uncommon}</td>
            <td>{rare}</td>
            <td>{epic}</td>
            <td>{legendary}</td>
            <td>{mythical}</td>
          </tr>
          <tr>
            <td>Value</td>
            <td>{commonValue}</td>
            <td>{nineValue}</td>
            <td>{uncommonValue}</td>
            <td>{rareValue}</td>
            <td>{epicValue}</td>
            <td>{legendaryValue}</td>
            <td>{mythicalValue}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
