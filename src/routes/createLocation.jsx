import { useState } from "react";
import { useNavigate } from "react-router-dom";
import facade from "../facades/apifacade";

const CreateLocation = () => {
  const init = { address: "", city:"", con:"", name:""};
  const [location, setLocation] = useState(init);
  const navigate = useNavigate();



  const submitMethod = async (evt) => {
    evt.preventDefault();
      facade.createLocation(location.address,location.city,location.con,location.name);
      setLocation(init);
      navigate("/");
  };


 const onChange = (evt) => {
    setLocation({
      ...location,
      [evt.target.id]: evt.target.value,
    });
  };

   
  return (
      <div className="">
      <h2>create location</h2>
        <form onChange={onChange} className="">
          <div className="">
            <input placeholder="Address" id="address"/>
          </div>
          <div className="">
            <input placeholder="City" id="city"  />
          </div>
          <div className="">
            <input placeholder="Condition" id="con" />
          </div>
          <div className="">
            <input placeholder="Name" id="name" />
          </div>
          <input onClick={submitMethod} type="submit" value="send" />
        </form>
      </div>
  );
}

export default CreateLocation;