import { Outlet, NavLink } from "react-router-dom";


const Createpage = () => {


  return (
    <div>
      <div className="">
        <h1>Create something</h1>
        <NavLink to="/create/car">
          <button>create car</button>
        </NavLink>

      
        <NavLink to="/create/race">
          <button>create race</button>
        </NavLink>
        
        <NavLink to="/create/driver">
        <button>create driver</button>
        </NavLink>
      </div>

      <Outlet />
     
    </div>
  );
};

export default Createpage;