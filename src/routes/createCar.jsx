import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Createcar = () => {
    const init = { name: "", brand:"", make:"", year:"", sponsor:"", color:""};
    const [car, setCar] = useState(init);
  
    const navigate = useNavigate();
  
    const performCreateCar = (evt) => {
      evt.preventDefault();
    
      setCar(init);
      navigate("/create");
    };
  

  
    const onChange = (evt) => {
        setCar({
        ...car,
        [evt.target.id]: evt.target.value,
      });
    };
  return (
    <div className="">
      <h2>Car</h2>
        <form onChange={onChange} className="">
          <div className="">
            <input placeholder="Name" id="name" />
          </div>
        
          <div className="">
            <input placeholder="Brand" id="brand" />
          </div>
          <div className="">
            <input placeholder="Make" id="make" />
          </div>
          <div className="">
            <input placeholder="Year" id="year" />
          </div>
          <div className="">
            <input placeholder="Sponsor" id="sponsor" />
          </div>
          <div className="">
            <input placeholder="color" id="color" />
          </div>
          
          <button onClick={performCreateCar} className="create-form-btn">
            Send
          </button>

        </form>
      </div>
  )
}

export default Createcar