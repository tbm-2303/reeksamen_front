import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

const Header = ({loggedIn,role,setRole,setLoggedIn,facade,setUser}) => {
  const navigate = useNavigate();

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
    setRole("");
    setUser("");
    navigate("/");
  };

  return (
    <div>
      <header className="header-container">
        {/*===== Admin role only =====*/}
        {role == "admin" ? (
          <>
            <NavLink to="/admin/races">
              <button className="btn" type="button">
                Races
              </button>
            </NavLink>

            <NavLink to="/create">
              <button className="btn" type="button">
                Create
              </button>
            </NavLink>
            <NavLink to="/cars">
              <button className="btn" type="button">
                Cars
              </button>
            </NavLink>
            <NavLink to="/drivers">
          <button className="btn" type="button">
           Drivers
          </button>
        </NavLink>
          </>
        ) : null}

        {/*===== User role only =====*/}
        {role === "user" ? (
          <>
        <NavLink to="/races">
          <button className="btn" type="button">
            Races
          </button>
        </NavLink>
        <NavLink to="/myraces">
          <button className="btn" type="button">
            My Races
          </button>
        </NavLink>
    
        </>
        ) : null}

        {!loggedIn ? (
          <NavLink to="/login">
            <button className="btn" type="button">
              Login
            </button>
          </NavLink>
        ) : (
          <NavLink to="/logout">
            <button className="btn" type="button">
              Logout
            </button>
          </NavLink>
        )}
      </header>
      <Outlet />
      
    </div>
  );
};

export default Header;