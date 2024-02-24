import React, { useState } from 'react';
import './App.css';
import StOlafLogo from './images/StOlafPng.png';

function App() {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [oneWayOption, setOneWayOption] = useState('option3');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOneWayChange = (event) => {
    setOneWayOption(event.target.value);
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
          </a> Schedule Request
        </h1>

      </div>
        
      <div>
      <form action="" id="loginForm">
        <h2><u>Personal Information</u></h2>
        <p></p>
        <h3>Name</h3>
        <input type="text" id="name" class="required-field" required="true"></input>
        <p></p>
        <h3>Phone Number</h3>
        <p>Desired Format: xxx-xxx-xxxx</p>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required="true" size="10"></input>
        <p></p>
        <h3>Student ID</h3>
        <p></p>
        <input type="text" id="studentID" class="required-field" required="true" pattern="[0-9]{6}" size="5"></input>
        <p></p>
        
        <h2><u>Travel Information</u></h2>
        
        <h3>Is this a One-Way Trip?</h3>

        <label>
          <input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange} name="options"/>
            Yes
        </label>
        <label>
          <input type="radio" value="option2" checked={selectedOption === 'option2'} onChange={handleOptionChange} name="options"/>
            No
        </label>

        {selectedOption === 'option1' && (
        <div>
          <h3>Pick-up Location</h3>
        <input type="text" id="name" class="required-field" required="true" size="50"></input>
          <p></p>
        <h3>Destination</h3>
        <input type="text" id="name" class="required-field" required="true" size="50"></input>
        <p></p>
        
          <p></p>
        <h3>Pick-up Date and Time</h3>
        <p></p>
        <input type="datetime-local" id="pickup" name="pickup" required="true"></input>
        <p></p>
        </div>
      )}

      {selectedOption === 'option2' && (
        <div>
          <h3>Pick-up/Return Location</h3>
        <input type="text" id="name" class="required-field" required="true" size="50"></input>
          <p></p>
        <h3>Destination</h3>
        <input type="text" id="name" class="required-field" required="true" size="50"></input>
        <p></p>
          <p></p>
        <h3>Pick-up Date and Time</h3>
        <p></p>
        <input type="datetime-local" id="pickup" name="pickup" required="true"></input>
        <p></p>
        <h3>Return Date and Time</h3>
        <p></p>
        <input type="datetime-local" id="return" name="return" required="true"></input>
        <p></p>
        </div>
      )}

        <h3>Purpose</h3>
        <select list="purpose" id="destination" class="required-field" required="true">
          <option value="none">(none)</option>
          <option value="Medical">Medical</option>
          <option value="Field Experience">Field Experience</option>
          <option value="Work">Work</option>
          <option value="Volunteering">Volunteering</option>
          <option value="Other">Other</option>
        </select>
        <p></p>
        <h3>Is this a Recurring Trip?</h3>
        <label>
          <input type="radio" value="option3" checked={oneWayOption === 'option3'} onChange={handleOneWayChange} name="options1"/>
            Yes
        </label>
        <label>
          <input type="radio" value="option4" checked={oneWayOption === 'option4'} onChange={handleOneWayChange} name="options1"/>
            No
        </label>

        {oneWayOption === 'option3' && (
        <div>
          <h3>Day(s) of the week</h3>
        <input type="text" id="name" class="required-field" required="true" size="50"></input>
          <p></p>
        <h3>How often (weekly, bi-weekly, monthly)</h3>
        <input type="text" id="name" class="required-field" required="true" size="50"></input>
        <p></p>
        <h3>End date</h3>
        <input type="text" id="name" class="required-field" required="true" size="50"></input>
        
        <p></p>
        
          <p></p>
        </div>
      )}

      {oneWayOption === 'option4' && (
        <div>
          
        </div>
      )}
        <p></p>
        <button type="submit" onclick="alert('Form submitted!')">Submit</button>
        <p></p>
      </form>
        
      </div>

      <a style={{ color: '#e8b320'}} href="https://wp.stolaf.edu/transportation/">
        St. Olaf Transportation Website
      </a>

    </div>
  );
}

export default App;
