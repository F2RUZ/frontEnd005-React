import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UncontrolledForm = () => {
  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const target = e.target;

    const data = {
      name: target.username.value,
      passwd: target.password.value,
      message: target.message.value,
      option: target.option.value,
    };

    if (!target.username.value.trim() || !target.password.value.trim()) {
      return toast.error("Invalid credentials");
    }

    setForm(data);

    toast.success("Form submitted successfully!");

    target.reset();
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#1e1e1e",
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "50px",
        fontFamily: "monospace",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "400px",
          padding: "20px",
          borderRadius: "10px",
          backgroundColor: "#2c2c2c",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "10px" }}>
          Uncontrolled Form
        </h2>

        <input
          required
          type="text"
          name="username"
          placeholder="Write your username"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
          }}
        />

        <input
          required
          type="password"
          name="password"
          placeholder="Write password"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
          }}
        />

        <input
          type="text"
          name="message"
          placeholder="Write your offer"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
          }}
        />

        <select
          required
          name="option"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: "#fff",
            color: "#000",
          }}
        >
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
          <option value="4">Four</option>
          <option value="5">Five</option>
        </select>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <button
            type="submit"
            className="btn btn-success"
            style={{ width: "48%" }}
          >
            Submit
          </button>
          <button
            type="reset"
            className="btn btn-danger"
            style={{ width: "48%" }}
          >
            Cancel
          </button>
        </div>
      </form>

      {Object.keys(form).length > 0 && (
        <div
          style={{
            marginTop: "30px",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "#121212",
            width: "400px",
            whiteSpace: "pre-wrap",
            wordWrap: "break-word",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          }}
        >
          <h3 style={{ marginBottom: "10px" }}>Form Result:</h3>
          <pre style={{ color: "#00ff99" }}>
            {JSON.stringify(form, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default UncontrolledForm;
