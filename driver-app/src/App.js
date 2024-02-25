import React, { useState, useEffect } from 'react';
import StOlafLogo from './images/StOlafPng.png';

import './App.css';

const currentTime = new Date();
const formattedTime = currentTime.toLocaleString();


function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/getData');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div class="main">
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'lightgrey' }}>
        
        <a href='https://wp.stolaf.edu/'>
          <img src={StOlafLogo} alt="St Olaf Logo" style={{height: '70px', width: '230px'}}></img>
        </a>
        <div style={{height:'70px', width: '50px'}}></div>

        
        <h1> 
          <a href='https://wp.stolaf.edu/transportation/oles-go/' style={{ color: '#e8b320'}}>
            OlesGo 
          </a> Driver's Page
        </h1>

      </div>
      <div style={{marginLeft: '25px'}}>
      <h1>Ride Requests:</h1>
      <ul style={{ paddingLeft: 30 }}>
        {data.map((item, index) => (
          <li key={index} style={{ marginBottom: '10px'}}>
            <strong>Time submitted:</strong> {item.timeSubmitted}
            <br /> <strong>Name:</strong> {item.name}
            <br /> <strong>Number:</strong> {item.number}
            <br /> <strong>Student ID:</strong> {item.studentID}
            <br /> <strong>One-Way Trip?:</strong> {item.oneWayTrip}
            <br /> <strong>Pick-up/Return Location:</strong> {item.pickupLocation}
            <br /> <strong>Destination:</strong> {item.destination}
            <br /> <strong>Pick-up Date and Time:</strong> {item.pickupTimeDate}
            <br /> <strong>Return Date and Time:</strong> {item.returnTimeDate}
            <br /> <strong>Purpose:</strong> {item.purpose}
            <br /> <strong>Recurring Trip?:</strong> {item.recurringTrip}
            <br /> <strong>Day(s) of the week:</strong> {item.daysOfTheWeek}
            <br /> <strong>How often:</strong> {item.howOften}
            <br /> <strong>End date:</strong> {item.endDate}
          </li>
        ))}
      </ul>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'goldenrod', height: '125px'}}>
        <a style={{color: 'white'}} href="https://wp.stolaf.edu/transportation/">
          St. Olaf Transportation Website
        </a>
        </div>
        </div>
  );
        }

        export default App;
