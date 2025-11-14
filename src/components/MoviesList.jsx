import React, { useEffect, useState } from "react";
import { Button, Card, Form, InputGroup, Table } from "react-bootstrap";
import Loader from "./Loader";

const MoviesList = () => {
  const [kino, setKino] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    const api = `https://www.omdbapi.com/?s=ip man&apikey=c65fcde9`;

    fetch(api)
      .then((res) => res.json())
      .then((data) => setKino(data.Search));
  }, []);

  //handleChange

  const handleChange = (e) => {
    setName(e.target.value);
  };

  //onsubmit

  const handleSearch = async (e) => {
    e.preventDefault();

    await fetch(`https://www.omdbapi.com/?s=${name}&apikey=c65fcde9`).then(
      (res) => res.json().then((data) => setKino(data.Search))
    );

    console.log(kino);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Movieies</h1>

      <Form onSubmit={handleSearch}>
        <input
          onChange={handleChange}
          value={name}
          type="search"
          placeholder="Write movie name"
        />

        <Button type="submit">Search</Button>
      </Form>

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
