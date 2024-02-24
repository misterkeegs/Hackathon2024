import './App.css';

function App() {
  return (
    <div className="App">
      <h1>OlesGo Schedule Request</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://wp.stolaf.edu/transportation/"
          target="_blank"
          rel="noopener noreferrer"
        >
          St. Olaf Transportation Website
        </a>
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
        <p></p>
        <h3>Destination</h3>
        <input type="text" id="name" class="required-field" required="true" size="50"></input>
        <p></p>
        <h3>Is this a One-Way Trip?</h3>
        <input type="radio" id="destination" class="required-field" required="true"></input>
        <p></p>
        <h3>Pick-up Date and Time</h3>
        <p></p>
        <input type="datetime-local" id="pickup" name="pickup" required="true"></input>
        <p></p>
        <h3>Return Date and Time</h3>
        <p></p>
        <input type="datetime-local" id="return" name="return" required="true"></input>
        <p></p>
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
        <input type="radio" id="recurring" class="required-field" required="true"></input>
        <p></p>
        <button type="submit" onclick="alert('Form submitted!')">Submit</button>
        <p></p>
      </form>

          
    </div>

  );
}


export default App;
