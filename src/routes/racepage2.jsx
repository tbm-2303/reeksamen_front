import React from "react";
import { useState, useEffect } from "react";
import {getAllRacesUrl} from "../settings";
import { NavLink } from "react-router-dom";
import facade from "../facades/apifacade";


const Racepage = () => {
  const [data, setData] = useState([]);


    useEffect(() => {
      const getRaces = async () => {
        const data = await facade.fetchAllRaces();
        setData(data);
      };
      getRaces();
    }, []);



return (
    <div className="App">
      <h1>races</h1>
      <NavLink to={"/"}>
        <button className="">Back</button>
      </NavLink>
      <ul>
        {data &&
          data.map(({ id, name, location, date, duration }) => (
            <li key={id}>
              <h3>{name}</h3>
              <h3>{location}</h3>
              <h3>{date}</h3>
              <h3>{duration}</h3>
              <br/>
            </li>
          ))}
      </ul>
      
    </div>
  );
          };

export default Racepage;