import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");

  //handleName

  const handleName = (e) => {
    setName(e.target.value);
  };

  //handlePasword

  const handlePasword = (e) => {
    setPassword(e.target.value);
  };

  //handleImage

  const handleImage = (e) => {
    setImage(e.target.value);
  };

  //handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name,
      password,
      image,
    };

    if (name.trim().length && password.trim().length) {
      console.log(user);

      alert("Suceessfull validations");
      setName("");
      setPassword("");
      setImage("");
    } else {
      alert("maydon bosh");
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "500px",
          height: "500px",
          border: "1px solid",
          margin: "100px auto",
          padding: "10px",
        }}
      >
        <input
          required
          style={{
            width: "100%",
          }}
          placeholder="username"
          type="text"
          value={name}
          onChange={handleName}
        />

        <input
          required
          style={{
            width: "100%",
          }}
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasword}
        />

        <input type="file" value={image} onChange={handleImage} />

        <input type="submit" value={"Yuborish"} />
      </form>
    </div>
  );
};

export default Form;
