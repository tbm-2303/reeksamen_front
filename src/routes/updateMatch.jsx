import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import facade from "../facades/apifacade";

const UpdateMatch = () => {
    const init = { opp:"", judge:"", type:"", inDoor:"", id:""};
    const [match, setMatch] = useState(init);
    const navigate = useNavigate();
  




  const onSubmit = (evt) => {
    evt.preventDefault();
    facade.updateMatch(match.opp, match.judge, match.type, match.inDoor, match.id)
    setMatch(init);
    navigate("/");
  };

  const onChange = (evt) => {
    setMatch({
      ...match,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div className="">
      <h2>Update Match</h2>
      <form onChange={onChange} className="">
        <div className="">
          <input placeholder="opponent" id="opp" />
        </div>
        <div className="">
          <input placeholder="judge" id="judge"/>
        </div>
        <div className="">
          <input placeholder="type" id="type" />
        </div>
        <div className="">
          <input placeholder="inDoor" id="inDoor"
          />
        </div>
        <div className="">
          <input placeholder="id" id="id"
          />
        </div>

        <button onClick={onSubmit} className="">
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateMatch;