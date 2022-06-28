import { useState } from "react";
import { useNavigate } from "react-router-dom";




const Createdriver = () => {
  const init = { name: "", birthYear:"", experience:"", gender:"" };
    const [driver, setDriver] = useState(init);
  
    const navigate = useNavigate();
  
    const performCreateDriver = (evt) => {
      evt.preventDefault();
     
      setDriver(init);
      navigate("/create");
    };
  

  
    const onChange = (evt) => {
      setDriver({
        ...driver,
        [evt.target.id]: evt.target.value,
      });
    };

  return (
    <div className="">
    <h2>Driver</h2>
      <form onChange={onChange} className="">
        <div className="">
          <input placeholder="Name" id="name" />
        </div>
        <div className="">
          <input placeholder="Birth Year" id="birthYear" />
        </div>
        <div className="">
          <input placeholder="experience" id="experience" />
        </div>
        <div className="">
          <input placeholder="Gender" id="gender" />
        </div>
        
        <button onClick={performCreateDriver} className="create-form-btn">
          Send
        </button>

      </form>
    </div>
  );
};

export default Createdriver;