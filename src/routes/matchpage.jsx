import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import facade from "../facades/apifacade";


const Matchpage = () => {
  const [data, setData] = useState([{ id:"1", opponent:"d", judge:"d", type:"Dde", inDoor:"ye"}]);


    useEffect(() => {
        const getMatches = async () => {
          const data = await facade.fetchAllMatches();
          setData(data);
        };
        getMatches();
      }, []);


return (
<div className="App">
      <h1>Matces</h1>
      <NavLink to={"/"}>
        <button className="">Back</button>
      </NavLink>

    <table className="table">
      <thead>
        <tr>
          <th scope="col">opponent</th>
          <th scope="col">judge</th>
          <th scope="col">type</th>
          <th scope="col">inDoor</th>
        </tr>
      </thead>

      <tbody>
        {data.map(({id, opponent, judge, type, inDoor}) => (
          <tr key={id}>
            <td>{opponent}</td>
            <td>{judge}</td>
            <td>{type}</td>
            <td>{inDoor}</td>
          </tr>
        ))}
      </tbody>
    </table>


      
</div>
  );
};

export default Matchpage;