import React, { useState } from "react";
import { toast } from "react-toastify";

const UncontrolledForm = () => {
  const [form, setForm] = useState({});

  //handleSubmit

  const handleSubmit = (e) => {
    e.preventDefault();

    const target = e.target;

    const data = {
      name: target.username.value,
      passwd: target.password.value,
      message: e.target.message.value,
      option: target.option.value,
    };

    if (!target.username.value.trim() || !target.password.value.trim())
      return toast.error("invalid cridentials");

    setForm(data);

    toast.success("Uncontrolled form success");

    target.reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          height: "400px",
          padding: "10px",
          border: "1px solid ",
          margin: "100px auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <h1>Uncontrolled form</h1>
        <input
          required
          className="name"
          style={{
            width: "100%",
            marginBottom: "20px",
          }}
          type="text"
          name="username"
          placeholder="Write your username"
        />
        <input
          required
          style={{
            width: "100%",
            marginBottom: "20px",
          }}
          type="password"
          name="password"
          placeholder="Write paswd"
        />
        <input
          style={{
            width: "100%",
            marginBottom: "20px",
          }}
          type="text"
          name="message"
          placeholder="Write your offer"
        />
        <select
          required
          style={{
            width: "100%",
          }}
          name="option"
          id=""
        >
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">One</option>
          <option value="4">One</option>
          <option value="5">One</option>
        </select>

        <div className="mt-5">
          <button
            style={{
              marginRight: "200px",
            }}
            className="btn btn-success"
          >
            Submit
          </button>
          <button className="btn btn-danger">Censel</button>
        </div>
      </form>

      <div className="result">{JSON.stringify(form)}</div>
    </div>
  );
};

export default UncontrolledForm;
