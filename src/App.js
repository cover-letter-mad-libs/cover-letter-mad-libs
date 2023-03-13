import './App.css';
import CoverLetter from './CoverLetter';
import { useState } from 'react';

function App() {
  const [companyName, setCompanyName] = useState('');
  const [userCompanyName, setUserCompanyName] = useState('');

  const [adjective, setAdjective] = useState('');
  const [userAdjective, setUserAdjective] = useState('');

  const [jobPosition, setJobPosition] = useState('');
  const [userJobPosition, setUserJobPosition] = useState('');

  const [place, setPlace] = useState('');
  const [userPlace, setUserPlace] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setCompanyName(userCompanyName)
    setUserCompanyName('');

    setAdjective(userAdjective);
    setUserAdjective('');

    setJobPosition(userJobPosition);
    setUserJobPosition('');

    setPlace(userPlace);
    setUserPlace('');
  }

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="user-inputs">

        <form onSubmit={handleSubmit}>
          {/* Company Input */}
          <input 
          placeholder='Company Name'
          name='companyName'
          value={userCompanyName}
          onChange={e => setUserCompanyName(e.target.value)}/>

          {/* Adjective Input */}
          <input 
          placeholder='How are you feeling?'
          name='adjective'
          value={userAdjective}
          onChange={e => setUserAdjective(e.target.value)}/>

          {/* Job Position Input */}
          <input 
          placeholder='Job Position'
          name='jobPosition'
          value={userJobPosition}
          onChange={e => setUserJobPosition(e.target.value)}/>

          {/* Job Board Input */}
          <input 
          placeholder='Job Board'
          name='place'
          value={userPlace}
          onChange={e => setUserPlace(e.target.value)}/>
          <button type="submit">Submit Me</button>
        </form>
      </div>
      <div className="cover-letter">
        <CoverLetter 
        companyName = {companyName}
        adjective = {adjective}
        jobPosition = {jobPosition}
        place = {place}
        />
      </div>
    </div>
  );
}

export default App;
