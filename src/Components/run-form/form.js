import React, { useState } from "react";
//import "./styles.css";

export default function Form() {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");

  const handleInput = e => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  const sendData = async e => {
    e.preventDefault();
    try {
      const response = await fetch(
        "",
        {
          method: "post",
          body: JSON.stringify([[formData.name, formData.time]]),
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      const json = await response.json();
      //console.log("Success:", JSON.stringify(json));
      setMessage(json.message);
    } catch (error) {
      //console.error("Error:", error);
      setMessage("Error");
    }
  };

  return (
    <div className="App">
      <form
        className="input-form"
        id="contact"
        name="contact"
        onSubmit={sendData}
      >
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleInput}
        />
        <textarea
          name="time"
          type="text"
          placeholder="Your time"
          onChange={handleInput}
        />
        <input name="submit" type="submit" value="Send" />
        <div>{message}</div>
      </form>
    </div>
  );
}