import { useState } from "react";
import { useNavigate } from "react-router-dom";

import facade from "../facades/apifacade";

const CreatePlayer2 = () => {
  const init = { name: "", phone:"", email:"", status:"", username:""};
  const [player, setPlayer] = useState(init);
  const navigate = useNavigate();



  const submitMethod = async (evt) => {
    evt.preventDefault();
      facade.createPlayer(player.name, player.phone, player.email, player.status, player.username);
      setPlayer(init);
      navigate("/");
  };


 const onChange = (evt) => {
    setPlayer({
      ...player,
      [evt.target.id]: evt.target.value,
    });
  };

   
  return (
      <div className="">
      <h2>create player</h2>
        <form onChange={onChange} className="">
          <div className="">
            <input placeholder="Name" id="name"/>
          </div>
          <div className="">
            <input placeholder="Phone" id="phone"  />
          </div>
          <div className="">
            <input placeholder="Email" id="email" />
          </div>
          <div className="">
            <input placeholder="Status" id="status" />
          </div>
          <div className="">
            <input placeholder="UserName" id="username" />
          </div>
          <input onClick={submitMethod} type="submit" value="send" />
        </form>
      </div>
  );
}

export default CreatePlayer2;