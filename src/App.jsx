import { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LogIn from "./routes/login";
import "./styles/index.css";
import "./styles/geee.css";
import Createpage from "./routes/createCentral";
import Header from "./components/header";
import facade from "./facades/apifacade";
import jwt_decode from "jwt-decode";
import LogOut from "./components/logout";
import Matchpage from "./routes/matchpage";
import FindMatchByLocation from "./routes/FindMatchByLocation";
import MyMatches from "./routes/myMatches";
import CreatePlayer2 from "./routes/createPlayer2";
import CreateLocation from "./routes/createLocation";
import CreateMatch from "./routes/createMatch";
import UpdateMatch from "./routes/updateMatch";
import DeletePlayer from "./routes/deletePlayer";


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

            <Route path="matchesByLocation" element={<FindMatchByLocation />} />

            <Route path="myMatches" element={<MyMatches/>} />

            <Route path="updateMatch" element={<UpdateMatch/>} />

            <Route path="deletePlayer" element={<DeletePlayer/>} />

            <Route path="delete" element={<UpdateMatch/>} />

            <Route path="create" element={<Createpage/>}>
              <Route path="player" element={<CreatePlayer2 />} />
              <Route path="location" element={<CreateLocation />} />
              <Route path="match" element={<CreateMatch />} />
            </Route>

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