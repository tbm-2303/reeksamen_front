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
        {role === "admin" ? (
          <>
            <NavLink to="/create">
              <button className="btn" type="button">
                Create
              </button>
            </NavLink>
            <NavLink to="/updateMatch">
              <button className="btn" type="button">
                Update Match
              </button>
            </NavLink>
            <NavLink to="/deletePlayer">
              <button className="btn" type="button">
                Delete Player
              </button>
            </NavLink>
          </>
        ) : null}

        {/*===== User role only =====*/}
        {role === "user" ? (
          <>
        <NavLink to="/matches">
          <button className="btn" type="button">
            matches
          </button>
        </NavLink>
        <NavLink to="/matchesByLocation">
          <button className="btn" type="button">
            matchesbylocation
          </button>
        </NavLink>
        <NavLink to="/myMatches">
          <button className="btn" type="button">
          myMatches
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