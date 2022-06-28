const URL = "https://ca1.giggga.dk/tomcat/reeksamen";
 
function handleHttpErrors(res) {
 if (!res.ok) {
   return Promise.reject({ status: res.status, fullError: res.json() })
 }
 return res.json();
}
 
function apiFacade() {

const login = (user, password) => {
    const options = makeOptions("POST", true,{username: user, password: password });
    return fetch(URL + "/api/login", options)
      .then(handleHttpErrors)//check if my backend gives errors in json.
      .then(res => {setToken(res.token) })
}

  
    
const fetchData = () => {
    const options = makeOptions("GET",true); //True add's the token
    return fetch(URL + "/api/info/user", options).then(handleHttpErrors);
} 

 
const setToken = (token) => {
    localStorage.setItem('jwtToken', token)
}
const getToken = () => {
    return localStorage.getItem('jwtToken')
}
const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
}
const logout = () => {
    localStorage.removeItem("jwtToken");
}

const makeOptions= (method,addToken,body) =>{
   var opts = {
     method: method,
     headers: {
       "Content-type": "application/json",
       "Accept": "application/json",
     }
   }
   if (addToken && loggedIn()) {
     opts.headers["x-access-token"] = getToken();
   }
   if (body) {
     opts.body = JSON.stringify(body);
   }
   return opts;
 }
 
 const fetchAllRaces = () => {
  const options = makeOptions("GET", false); //True add's the token
  return fetch(URL + "/api/race/getall", options).then(handleHttpErrors);
};

const fetchMyRaces = (username) => {
  const options = makeOptions("GET", false); //True add's the token
  return fetch(URL + `/api/race/driver/${username}`, options).then(handleHttpErrors);
};

const fetchAllMatches = () => {
  const options = makeOptions("GET", false)//True add's the token
  return fetch(URL +"/api/match/getall/", options).then(handleHttpErrors);
}



 return {
     makeOptions,
     setToken,
     getToken,
     loggedIn,
     login,
     logout,
     fetchData,
     fetchAllRaces,
     fetchMyRaces,
     fetchAllMatches
 }
}
const facade = apiFacade();
export default facade;
