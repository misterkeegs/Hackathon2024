import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import './App.css';
import StOlafLogo from './images/StOlafPng.png';

const days = [
  { value: 'Monday', label: 'Monday' },
  { value: 'Tuesday', label: 'Tuesday' },
  { value: 'Wednesday', label: 'Wednesday' },
  { value: 'Thursday', label: 'Thursday' },
  { value: 'Friday', label: 'Friday' }
];

const purposes = [
  { value: 'Medical', label: 'Medical' },
  { value: 'Field Experience', label: 'Field Experience' },
  { value: 'Work', label: 'Work' },
  { value: 'Volunteering', label: 'Volunteering' },
  { value: 'Other', label: 'Other' }
];

const animatedComponents = makeAnimated();

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: '370px',
    borderColor: state.isFocused ? '#263238' : '#263238',
    '&:hover': {
      borderColor: '#263238'
    },
  }),
};

function App() {
  // state variables from form
  const [selectedOption, setSelectedOption] = useState('option1');    // this is acutually for the one-way option  
  const [oneWayOption, setOneWayOption] = useState('option3');      // this is actually for recurring trip option

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [studentID, setStudentID] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [pickupTimeDate, setPickupTimeDate] = useState("");
  const [returnTimeDate, setReturnTimeDate] = useState("");
  const [purpose, setPurpose] = useState("");
  const [daysOfTheWeek, setDaysOfTheWeek] = useState("");
  const [howOften, setHowOften] = useState("");
  const [endDate, setEndDate] = useState("");


  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOneWayChange = (event) => {
    setOneWayOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const newData = {
      name: name,
      number: phoneNumber,
      studentID: studentID,
      oneWayTrip: selectedOption,
      pickupLocation: pickupLocation,
      destination: destination,
      pickupTimeDate: pickupTimeDate,
      returnTimeDate: returnTimeDate,
      purpose: purpose,
      recurringTrip: oneWayOption,
      daysOfTheWeek: daysOfTheWeek,
      howOften: howOften,
      endDate: endDate,
    };
  
    try {
      const response = await fetch('http://localhost:3001/api/saveData', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(newData),
      });
  
      if (response.ok) {
        console.log('Data successfully submitted');
      } else {
        console.error('Failed to submit data');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
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
          </a> Schedule Request
        </h1>

      </div>
        
      <div  style={{marginLeft: '25px'}}>
      <form action="" id="loginForm" onSubmit={handleSubmit}>
        <h2><u>Personal Information</u></h2>
        <p></p>
        <h3 class="required-field">Name</h3>
        <input type="text" id="name" class="required-field" required="true" onChange={(e) => setName(e.target.value)}></input>
        <p></p>
        <h3 class="required-field">Phone Number</h3>
        <p class="desired-format">Desired Format: xxx-xxx-xxxx</p>
        <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required="true" size="10" onChange={(e) => setPhoneNumber(e.target.value)}></input>
        <p></p>
        <h3 class="required-field">Student ID</h3>
        <p class="desired-format">Desired Format: xxxxxx</p>
        <input type="text" id="studentID" required="true" pattern="[0-9]{6}" size="5" onChange={(e) => setStudentID(e.target.value)}></input>
        <p></p>
        
        <h2><u>Travel Information</u></h2>
        
        <h3 class="required-field">Is this a One-Way Trip?</h3>

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
          <h3 class="required-field">Pick-up Location</h3>
        <input type="text" id="name" class="required-field" required="true" size="50" onChange={(e) => setPickupLocation(e.target.value)}></input>
          <p></p>
        <h3 class="required-field">Destination</h3>
        <input type="text" id="name" class="required-field" required="true" size="50" onChange={(e) => setDestination(e.target.value)}></input>
        <p></p>
        
          <p></p>
        <h3 class="required-field">Pick-up Date and Time</h3>
        <p></p>
        <input type="datetime-local" id="pickup" name="pickup" required="true"></input>
        <p></p>
        </div>
      )}

      {selectedOption === 'option2' && (
        <div>
          <h3 class="required-field">Pick-up/Return Location</h3>
        <input type="text" id="name" class="required-field" required="true" size="50" onChange={(e) => setPickupLocation(e.target.value)}></input>
          <p></p>
        <h3 class="required-field">Destination</h3>
        <input type="text" id="name" class="required-field" required="true" size="50" onChange={(e) => setDestination(e.target.value)}></input>
        <p></p>
          <p></p>
        <h3 class="required-field">Pick-up Date and Time</h3>
        <p></p>
        <input type="datetime-local" id="pickup" name="pickup" required="true" onChange={(e) => setPickupTimeDate(e.target.value)}></input>
        <p></p>
        <h3 class="required-field">Return Date and Time</h3>
        <p></p>
        <input type="datetime-local" id="return" name="return" required="true" onChange={(e) => setReturnTimeDate(e.target.value)}></input>
        <p></p>
        </div>
      )}

        <h3 class="required-field">Purpose</h3>
        <Select 
            components={animatedComponents}
            options={purposes}
            styles={customStyles}
            onChange={(selectedOption) => setPurpose(selectedOption.value)}
          />
        {/*<select list="purpose" id="destination" class="required-field" required="true">
          <option value="none">(none)</option>
          <option value="Medical">Medical</option>
          <option value="Field Experience">Field Experience</option>
          <option value="Work">Work</option>
          <option value="Volunteering">Volunteering</option>
          <option value="Other">Other</option>
      </select>*/}
        <p></p>
        <h3 class="required-field">Is this a Recurring Trip?</h3>
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
          <h3 class="required-field">Day(s) of the week</h3>
          <Select 
            closeMenuOnSelect={false}
            components={animatedComponents}
            options={days}
            styles={customStyles}
            isMulti
            onChange={(selectedOptions) => setDaysOfTheWeek(selectedOptions.map(option => option.value))}
          />
          <p></p>
        <h3 class="required-field">How often (weekly, bi-weekly, monthly)</h3>
        <input type="text" id="name" class="required-field" required="true" size="50" onChange={(e) => setHowOften(e.target.value)}></input>
        <p></p>
        <h3>End date</h3>
        <input type="date" id="pickup" name="pickup" required="true" onChange={(e) => setEndDate(e.target.value)}></input>
        <div style={{height: '20px'}}></div>
        </div>
      )}

      {oneWayOption === 'option4' && (
        <div>
          
        </div>
      )}
        <p></p>
        <button class="submit" type="submit" onclick="alert('Form submitted!')">Submit</button>
        <div style={{height: '40px'}}></div>
      </form>
        
      </div>

      <a style={{ color: '#e8b320'}} href="https://wp.stolaf.edu/transportation/">
        St. Olaf Transportation Website
      </a>

    </div>
  );
}

export default App;
