import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LogIn from "./routes/login";
import "./styles/index.css";
import "./styles/geee.css";
import Racepage from "./routes/racepage2"
import Createpage from "./routes/createCentral";
import CreateRace from "./routes/createRace"
import CreateCar from "./routes/createCar"
import CreateDriver from "./routes/createDriver"
import Header from "./components/header";
import facade from "./facades/apifacade";
import { loginUrl } from "./settings";
import jwt_decode from "jwt-decode";
import LogOut from "./components/logout";
import FindRaces from "./routes/findRaces";
import Test from "./routes/test"
import Matchpage from "./routes/matchpage";

function App() {
  const [user, setUser] = useState("");
  const [userRole, setUserRole] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);



  const login = (user, pass) => {
   const res =  facade.login(user, pass);
    setLoggedIn(true);
    let token = facade.getToken();
    let decoded = jwt_decode(token);
    setUserRole(decoded.roles);
    setUser(decoded.username);
    console.log(decoded);
    console.log(res);
  };



  const logout = (user, pass) => {
    facade.logout(user, pass);
    setLoggedIn(false);
    setUserRole("");
    setUser("");
  };
  const logInFunc = async (user) => {
      const res = await fetch(loginUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(user),
    });

    const data = await res.json();
    setUser(data.username);
    setUserRole(data.role);
    if (data.username != null && data.username != "") {
      setLoggedIn(true);
    }
  };



  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header
                  loggedIn={loggedIn}
                  setLoggedIn={setLoggedIn}
                  role={userRole}
                  setRole={setUserRole}
                  facade={facade}
                  setUser={setUser}
                />
                
                {!loggedIn ? (
                  <div className="">
                    <h1>not logged in </h1>
                  </div>
                ) : 
                  <div className="">
                    <h1>logged in </h1>
                </div>}
              </>
            }
          >

            <Route path="matches" element={<Matchpage />} />

            <Route
              path="login" element={<LogIn onAdd={login} />}/>
            
            <Route
              path="logout" element={<LogOut logout={logout} />}/>
          

            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />


          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;