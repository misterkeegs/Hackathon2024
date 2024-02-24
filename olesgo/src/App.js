import React, { useState } from 'react';
import './App.css';
import StOlafLogo from './images/StOlafPng.png';

function App() {
  const [selectedOption, setSelectedOption] = useState('option1');
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [input3, setInput3] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (event, inputNumber) => {
    const value = event.target.value;
    if (inputNumber === 1) {
      setInput1(value);
    } else if (inputNumber === 2) {
      setInput2(value);
    } else {
      setInput3(value);
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
        
      <div>
        <p style={{ fontSize: '26px', textDecoration: 'underline' }}>
          Personal Information
        </p> 
        <label>
          <input type="radio" value="option1" checked={selectedOption === 'option1'} onChange={handleOptionChange} name="options"/>
            Yes
        </label>
        <label>
          <input type="radio" value="option2" checked={selectedOption === 'option2'} onChange={handleOptionChange} name="options"/>
            No
        </label>
      </div>

      {selectedOption === 'option1' && (
        <div>
          <input type="text" value={input1} onChange={(event) => handleInputChange(event, 1)} />
        </div>
      )}

      {selectedOption === 'option2' && (
        <div>
          <input type="text" value={input2} onChange={(event) => handleInputChange(event, 2)} />
          <input type="text" value={input3} onChange={(event) => handleInputChange(event, 3)} />
        </div>
      )}

      <a style={{ color: '#e8b320'}} href="https://wp.stolaf.edu/transportation/">
        St. Olaf Transportation Website
      </a>

    </div>
  );
}

export default App;
