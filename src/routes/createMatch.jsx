import { useState } from "react";
import { useNavigate } from "react-router-dom";
import facade from "../facades/apifacade";

const CreateMatch = () => {
  const init = { opp:"", judge:"", type:"", inDoor:"", locationid:""};
  const [match, setMatch] = useState(init);
  const navigate = useNavigate();



  const submitMethod = async (evt) => {
    evt.preventDefault();
      facade.createMatch(match.opp, match.judge, match.type, match.inDoor, match.locationid)
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
      <h2>create match</h2>
        <form onChange={onChange} className="">
          <div className="">
            <input placeholder="Opponent" id="opp"/>
          </div>
          <div className="">
            <input placeholder="Judge" id="judge"  />
          </div>
          <div className="">
            <input placeholder="Type" id="type" />
          </div>
          <div className="">
            <input placeholder="indoor?" id="inDoor" />
          </div>
          <div className="">
            <input placeholder="Locationid" id="locationid" />
          </div>
          <input onClick={submitMethod} type="submit" value="send" />
        </form>
      </div>
  );
}

export default CreateMatch;