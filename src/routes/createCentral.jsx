import { Outlet, NavLink } from "react-router-dom";


const Createpage = () => {


  return (
    <div>
      <div className="">
        <h1>title</h1>
        <NavLink to="/create/player">
          <button>create player</button>
        </NavLink>
        
        <NavLink to="/create/match">
        <button>create match</button>
        </NavLink>

        <NavLink to="/create/location">
        <button>create location</button>
        </NavLink>

      </div>

      <Outlet />
     
    </div>
  );
};

export default Createpage;