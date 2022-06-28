import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createRaceUrl } from "../settings";


const CreateRace = () => {
  const init = { name: "", location:"", date:"", duration:"" };
  const [raceCredentials, setRaceCredentials] = useState(init);
  const navigate = useNavigate();

  const onClick = (evt) => {
        evt.preventDefault();
        createRace(raceCredentials.name, raceCredentials.location, raceCredentials.date, raceCredentials.duration);
        setRaceCredentials(init);
        navigate("/home");
      };

 const onChange = (evt) => {
      setRaceCredentials({
      ...raceCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

    function handleHttpErrors(res) {
      if (!res.ok) {
        return Promise.reject({ status: res.status, fullError: res.json() });
      }
      return res.json();
    }

    const makeOptions = (method, body) => {
      var opts = {
        method: method,
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      };
      if (body) {
        opts.body = JSON.stringify(body);
      }
      return opts;
    };

    const createRace = async (name, location, date, duration) => {
      const options = makeOptions("POST", {
        name: name,
        location: location,
        date: date,
        duration: duration,
        carDTOs: []
      });
  
      return  await fetch(createRaceUrl, options)
        .then(handleHttpErrors);
    };

   
  return (
    
      <div className="">
      <h2>Race</h2>
        <form onChange={onChange} className="">
          <div className="">
            <input placeholder="Name" id="name"/>
          </div>
          <div className="">
            <input placeholder="Location" id="location"  />
          </div>
          <div className="">
            <input placeholder="Start Date (jan 22 2022 1.00:00 AM)" id="date" />
          </div>
          <div className="">
            <input placeholder="Duration" id="duration" />
          </div>
          <input onClick={onClick} type="submit" value="send" />
        </form>
      </div>
  );
}

export default CreateRace;