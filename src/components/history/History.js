import React, { useState, useEffect } from "react";
import axios from "axios";
import Global from "../../Global";
import DaHistory from "./DaHistory";

const History = () => {
  const [history, setHistory] = useState([]);
  const url = Global.url;

  useEffect(() => {
    getHistory();
    console.log(history);
  }, [history.length]);

  const getHistory = () => {
    axios.get(url + "history").then((res) => {
      setHistory(res.data.history);
    });
  };

  const deleteHistory = (id) => {
    const idHistory = history[id]._id;
    axios.delete(url + "delete/" + idHistory).then((res) => {
      getHistory();
    });
  };

  return (
    <div className="publicaciones">
      <h1 className="mt-5">Historial</h1>
      <br />
      <br />
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
          {history.length > 0 ? (
            history.map((history, i) => {
              return (
                <DaHistory
                  key={i}
                  id={i}
                  historyData={history}
                  delHistory={deleteHistory}
                />
              );
            })
          ) : (
            <h3 className="mx-auto">No hay Historial para mostrar</h3>
          )}
        </div>
      </div>
    </div>
  );
};

export default History;
