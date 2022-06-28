import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getracesbydriverUrl } from "../settings";
import { useEffect } from "react";
import facade from "../facades/apifacade";

const FindRaces = ({user}) => {
  const [myRaces, setMyRaces] = useState([{ id:"1", name:"rainbow dash", location:"space", date:"Dec 2, 2017 2:39:58 AM", duration:"2"}]);


  useEffect(() => {
    const getRaces = async () => {
      const racesFromServer = await facade.fetchMyRaces(user);
      setMyRaces(racesFromServer);
    };

    getRaces();
  }, []);
 


  return (

<div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Date</th>
          <th scope="col">Duration</th>
          <th scope="col">Location</th>
          <th scope="col">Time</th>
        </tr>
      </thead>

      <tbody>
        {myRaces.map((races) => (
          <tr key={races.id}>
            <td>{races.date}</td>
            <td>{races.duration}</td>
            <td>{races.location}</td>
            <td>{races.name}</td>
          </tr>
        ))}
      </tbody>
    </table>


      <NavLink to={"/"}>
      <button type="Button" className="btn btn-primary">back</button>
      </NavLink>
</div>
  );
};

export default FindRaces;


  