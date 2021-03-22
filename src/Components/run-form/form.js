//General imports
import React, { useState } from "react";
import "./styles.css";
import {Link} from 'react-router-dom';
//const webhook = require("webhook-discord");

export default function Form() {
  const [formData, setFormData] = useState({});
  const [message, setMessage] = useState("");
  var formSubmitted = false;
  const url = "https://v1.nocodeapi.com/enisaras/google_sheets/hTHdIarhyJkWmZVA?tabId=Sheet1";

  const handleInput = e => {
    const copyFormData = { ...formData };
    copyFormData[e.target.name] = e.target.value;
    setFormData(copyFormData);
  };

  const sendData = async e => {
    e.preventDefault();
    //TODO: Find better way to do this through POST
    if(!formSubmitted){
    try {
    
      const response = await fetch(
        url,
        {
          method: "post",
          body: JSON.stringify([[formData.name, formData.time]]),
          headers: {
            "Content-Type": "application/json"
          }
         
        }
      );
      const json = await response.json();
      console.log(json);
      setMessage("Your run was succesfully submitted, it will be added to the leaderboard in less than 24 hours.");
    } catch (error) {
      console.error("Error: ", error);
      setMessage("Difficulty sending your run, please try again.");
      }

    }
    else{
      setMessage("You already submitted a run today, you can submit another later.")
    }
    /*
    const Hook = new webhook.Webhook(process.env.REACT_APP_WEBHOOK);
    const msg = new webhook.MessageBuilder()
                .setName("COVID Testing any% Leaderboard ")
                .setText(`Name: ${formData.name} Time: ${formData.time}`);
    Hook.send(msg);
    */
    
  }

    

  return (
    <div className="Form">
      <h1>Run Submission Form</h1>
      <form
        className="input-form"
        id="run"
        name="run"
        onSubmit={sendData}
      >
        <input
          name="name"
          type="text"
          placeholder="Name"
          onChange={handleInput}
          required
        />
        <input
          name="time"
          type="text"
          placeholder="Your time"
          onChange={handleInput}
          required
        />
      
        <input name="submit" type="submit" value="Send"/>
        <div className = "message">{message}</div>
        
      </form>
      <Link to = '/CovidTestingWR' style = {{textDecoration: 'none' }} className = "back">Return to Leaderboard</Link>
      </div>
  );
  }