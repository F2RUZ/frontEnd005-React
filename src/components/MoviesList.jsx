import React, { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import Loader from "./Loader";

const MoviesList = () => {
  const [kino, setKino] = useState([]);

  useEffect(() => {
    const api = `https://www.omdbapi.com/?s=ip man&apikey=c65fcde9`;

    fetch(api)
      .then((res) => res.json())
      .then((data) => setKino(data.Search));
  }, []);

  console.log(kino);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Movieies</h1>

      <Table striped bordered hover className="border w-100">
        <thead>
          <tr className="border-danger">
            <th>T/R</th>
            <th>name</th>
            <th>Yaer</th>
            <th>imdbID</th>
            <th>Type</th>
            <th>Poster</th>
          </tr>
        </thead>
        <tbody>
          {kino.length > 0 ? (
            kino.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.Title}</td>
                <td>{item.Year}</td>
                <td>{item.imdbID}</td>
                <td>{item.Type}</td>
                <td>
                  <img width={"100"} src={item.Poster} alt="" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Loading ...</td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default MoviesList;
