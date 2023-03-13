import './App.css';
import CoverLetter from './CoverLetter';
import { useState } from 'react';

function App() {
  const [companyName, setCompanyName] = useState('')
  const [userCompanyName, setUserCompanyName] = useState('')
  
  function handleSubmit(e) {
    e.preventDefault();
    setCompanyName(userCompanyName)
    setUserCompanyName('');
  }

  console.log(userCompanyName);

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="user-inputs">
        <form onSubmit={handleSubmit}>
          <input 
          placeholder='Company Name'
          name='companyName'
          value={userCompanyName}
          onChange={e => setUserCompanyName(e.target.value)}/>
          <button type="submit">Submit Me</button>
        </form>
      </div>
      <div className="cover-letter">
        <CoverLetter 
        companyName = {companyName}
        // adjective = {adjective}
        // jobPosition = {jobPosition}
        // place = {place}
        />
      </div>
    </div>
  );
}

export default App;
