import { useState, useEffect } from "react";
import facade from "../facades/apifacade";


const DeletePlayer = () => {
  const [data, setData] = useState([{},]);

  useEffect(() => {
    const getPlayers = async () => {
      const players = await facade.fetchAllPlayers();
      setData(players);
    };
    getPlayers();
  }, []);



  const deletePlayer = async (id, evt) => {
    evt.preventDefault();
    let res = await facade.deletePlayer(id);
    setData(data.filter((player) => player.id !== id));
  };


  return (
    <div>
      <h1>Players</h1>
      <table className="">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email </th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data.map((player) => (
            <tr key={player.id}>
              <td>{player.name}</td>
              <td>{player.phone}</td>
              <td>{player.email}</td>
              <td>{player.status}</td>
              <td>
                <button onClick={(event) => deletePlayer(player.id , event)} className="">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeletePlayer;