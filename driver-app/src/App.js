import React, { useState, useEffect } from 'react';
import StOlafLogo from './images/StOlafPng.png';

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
    <div>
      <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'lightgrey' }}>
        
        <a href='https://wp.stolaf.edu/'>
          <img src={StOlafLogo} alt="St Olaf Logo" style={{height: '70px', width: '230px'}}></img>
        </a>

        <h1> 
          <a href='https://wp.stolaf.edu/transportation/oles-go/' style={{ color: '#e8b320'}}>
            OlesGo 
          </a> Driver Page
        </h1>

      </div>
      <div style={{marginLeft: '25px'}}>
      <h1>Ride Requests:</h1>
      <ul style={{ paddingLeft: 30 }}>
        {data.map((item, index) => (
          <li key={index}>
            <strong>Name:</strong> {item.name},<br /> <strong>Number:</strong> {item.number} <br />
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default App;
