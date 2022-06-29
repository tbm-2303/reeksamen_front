import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import facade from "../facades/apifacade";

const MyMatches = ({name}) => {
  const [myMatches, setMyMatches] = useState([{ id:"1", opponent:"d", judge:"d", type:"Dde", inDoor:"ye"}]);


  useEffect(() => {
    const getMyMatches = async () => {
      const data = await facade.fetchMyMatches(name);
      setMyMatches(data);
    };
    getMyMatches();
  }, []);
 
return (
<div>
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Opponent</th>
          <th scope="col">Judge</th>
          <th scope="col">Type</th>
          <th scope="col">Indoor</th>
        </tr>
      </thead>

      <tbody>
        {myMatches.map(({id, opponent, judge, type, inDoor}) => (
          <tr key={id}>
            <td>{opponent}</td>
            <td>{judge}</td>
            <td>{type}</td>
            <td>{inDoor}</td>
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

export default MyMatches;