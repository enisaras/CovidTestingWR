import React from "react";
import {Link} from 'react-router-dom'
import './styles.css'

const Rules = () => (
    <div className = "rules">
        <h1>Rules</h1>
    <ul>
        <li>The first and the most important rule is to be respectful to everyone else getting tested and the testing staff during your run.</li>
        <li>Time starts when you step inside the Armory, and ends when you step outside.</li>
        <li>Be honest about your run.</li>
        <li>Have fun!</li>
    </ul>
    <Link to = '/CovidTestingWR' style = {{textDecoration: 'none' }} className = "back">Return to Leaderboard</Link>
      </div>
);

export default Rules;