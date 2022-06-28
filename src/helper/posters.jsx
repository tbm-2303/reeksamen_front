import { createRaceUrl } from "../settings";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}



function raceFacade() {
  
 
  const createRace = (name, location, date, duration) => {
    const options = makeOptions("POST", false, {
      name: name,
      location: location,
      date: date,
      duration: duration,
      carDTOs: []
    });

    return fetch(createRaceUrl, options)
      .then(handleHttpErrors)
      .then((response) => response.json()) 
      .then((actualdata) => console.log(actualdata))
      
  };


  const makeOptions = (method, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };


  return {
    makeOptions,
    createRace,
  };
}
const facade = raceFacade();
export default facade;