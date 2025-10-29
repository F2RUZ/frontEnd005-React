import React, { useEffect, useState } from "react";
import { Button, Card, CardBody } from "react-bootstrap";
const App = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  console.log(post);

  return (
    <div className="d-flex flex-wrap  container">
      {post.map((item) => (
        <Card className="bg-dark text-white w-25 p-5">
          <h1>{item.title}</h1>
          <p>{item.id}</p>

          <CardBody>
            <Button className="btn-danger">Delete</Button>
            <Button>Edit</Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default App;
