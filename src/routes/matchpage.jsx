import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import facade from "../facades/apifacade";


const Matchpage = () => {
  const [data, setData] = useState([]);


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
      <ul>
        {data &&
          data.map(({ id, opponent, judge, type, inDoor }) => (
            <li key={id}>
              <h3>{opponent}</h3>
              <h3>{judge}</h3>
              <h3>{type}</h3>
              <h3>{inDoor}</h3>
              <br/>
            </li>
          ))}
      </ul>
      
    </div>
  );
};

export default Matchpage;