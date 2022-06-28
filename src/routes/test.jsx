import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getDriversUrl } from "../settings";


const Driverpage = () => {
  const [drivers, setDrivers] = useState([]);
  const [car_id, setCarid] = useState ();

  const submitMethod = async (evt) => {
    evt.preventDefault();
    let tmp = getDriversUrl+car_id;

    const res = await fetch(tmp)
    .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) =>  setDrivers(actualData))
      .catch((err) => {
        console.log(err.message);
      });
      console.log(JSON.stringify(res))
     setCarid("");
  };


  return (
    <div>
        <form onSubmit={submitMethod}>
            <input placeholder="id" id="car_id" onChange={(e) => setCarid(e.target.value)} />
            <input type="submit" value="send" />
        </form>

      <h3>Drivers</h3>
      <table className="">
        
        <thead>
          <tr>
            <th>Name</th>
            <th>Birth Year</th>
            <th>Experience</th>
            <th>Gender</th>
          </tr>
        </thead>

        <tbody>
          {drivers.map((driver) => (
            <tr key={driver.id}>
              <td>{driver.name}</td>
              <td>{driver.birthYear}</td>
              <td>{driver.experience}</td>
              <td>{driver.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <NavLink to={"/"}>
        <button className="">Back</button>
      </NavLink>
    </div>
  );
};

export default Driverpage;


  