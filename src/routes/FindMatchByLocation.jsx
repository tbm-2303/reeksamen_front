import { useState } from "react";
import { NavLink } from "react-router-dom";
import facade from "../facades/apifacade";



const FindMatchByLocation = () => {
  const [data, setData] = useState([]);
  const [location, setLocation] = useState("");


  const submitMethod = async (evt) => {
    evt.preventDefault();
    const matches = await facade.fetchMatchesByLocation(location)
    setData(matches);
    setLocation("");
  };


  return ( 
<div>
    <form onSubmit={submitMethod}>
            <input placeholder="id" id="car_id" onChange={(e) => setLocation(e.target.value)} />
            <input type="submit" value="send" />
       
    </form>
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

export default FindMatchByLocation;


  