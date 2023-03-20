import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CoverLetter from './CoverLetter';

export default function UserInputs() {
  const [isFilled, setIsFilled] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [userCompanyName, setUserCompanyName] = useState("");

  const [adjective, setAdjective] = useState([""]);
  const [noun, setNoun] = useState([""]);
  
  const [jobPosition, setJobPosition] = useState([""]);
  const [userJobPosition, setUserJobPosition] = useState("");
  const [userJobPositionTwo, setUserJobPositionTwo] = useState("");
  
  const [place, setPlace] = useState("");
  const [userPlace, setUserPlace] = useState("");

  const [userNoun, setUserNoun] = useState("");
  const [userNounTwo, setUserNounTwo] = useState("");
  const [userNounThree, setUserNounThree] = useState("");
  const [userNounFour, setUserNounFour] = useState("");
  
  const [userAdjective, setUserAdjective] = useState("");
  const [userAdjectiveTwo, setUserAdjectiveTwo] = useState("");
  const [userAdjectiveThree, setUserAdjectiveThree] = useState("");
  const [userAdjectiveFour, setUserAdjectiveFour] = useState("");
  const [userAdjectiveFive, setUserAdjectiveFive] = useState("");
  const [userAdjectiveSix, setUserAdjectiveSix] = useState("");
  const [userAdjectiveSeven, setUserAdjectiveSeven] = useState("");
  const [userAdjectiveEight, setUserAdjectiveEight] = useState("");
  const [userAdjectiveNine, setUserAdjectiveNine] = useState("");
  const [userAdjectiveTen, setUserAdjectiveTen] = useState("");
  const [userAdjectiveEleven, setUserAdjectiveEleven] = useState("");
  const [userAdjectiveTwelve, setUserAdjectiveTwelve] = useState("");
  const [userAdjectiveThirteen, setUserAdjectiveThirteen] = useState("");
  const [userAdjectiveFourteen, setUserAdjectiveFourteen] = useState("");

  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");

  let jobPositionList = [];
  let adjectiveList = [];
  let nounList = [];

  function handleSubmit(e) {
    e.preventDefault();
    setCompanyName(userCompanyName);

    jobPositionList.push(
      userJobPosition,
      userJobPositionTwo,
    );

    adjectiveList.push(
      userAdjective,
      userAdjectiveTwo,
      userAdjectiveThree,
      userAdjectiveFour,
      userAdjectiveFive,
      userAdjectiveSix,
      userAdjectiveSeven,
      userAdjectiveEight,
      userAdjectiveNine,
      userAdjectiveTen,
      userAdjectiveEleven,
      userAdjectiveTwelve,
      userAdjectiveThirteen,
      userAdjectiveFourteen,
    );

    nounList.push(
      userNoun,
      userNounTwo,
      userNounThree,
      userNounFour,
    )

    setAdjective(adjectiveList);

    setJobPosition(jobPositionList);

    setNoun(nounList);

    setPlace(userPlace);
    setName(userName);

    setUserCompanyName("");
    setUserJobPosition("");
    setUserJobPositionTwo("");
    setUserPlace("");
    setUserNoun("");
    setUserNounTwo("");
    setUserNounThree("");
    setUserNounFour("");
    setUserAdjective("");
    setUserAdjectiveTwo("");
    setUserAdjectiveThree("");
    setUserAdjectiveFour("");
    setUserAdjectiveFive("");
    setUserAdjectiveSix("");
    setUserAdjectiveSeven("");
    setUserAdjectiveEight("");
    setUserAdjectiveNine("");
    setUserAdjectiveTen("");
    setUserAdjectiveEleven("");
    setUserAdjectiveTwelve("");
    setUserAdjectiveThirteen("");
    setUserAdjectiveFourteen("");
    setUserName("");
    
    setIsFilled(true);
  }

  function handleClick() {
    setIsFilled(false);
  };

  return (
    <div className="user-inputs">
      <div className='header'
      role='heading' 
      aria-level={1}>
        Cover Letter MadLibs!
        </div>

        <form onSubmit={handleSubmit} style={{ display: isFilled ? 'none' : 'flex'}}>
        <div class="all-inputs">
        <div class="input-col">
          <input required={true}
              placeholder="a noun"
              name="companyName"
              value={userCompanyName}
              onChange={(e) => setUserCompanyName(e.target.value)}
            />
          <br />
          <input required={true}
              placeholder="an adjective"
              name="adjective"
              value={userAdjective}
              onChange={(e) => setUserAdjective(e.target.value)}
            />
          <br />
          <input required={true}
          placeholder="a job/career"
          name="jobPosition"
          value={userJobPosition}
          onChange={(e) => setUserJobPosition(e.target.value)}
        />
        <br />
        <input required={true}
        placeholder="place or location"
        name="place"
        value={userPlace}
        onChange={(e) => setUserPlace(e.target.value)}
      />
      <br />
      <input required={true}
              placeholder="an adjective"
              name="adjectiveTwo"
              value={userAdjectiveTwo}
              onChange={(e) => setUserAdjectiveTwo(e.target.value)}
            />
      <br />
      <input required={true}
              placeholder="an adjective"
              name="adjectiveThree"
              value={userAdjectiveThree}
              onChange={(e) => setUserAdjectiveThree(e.target.value)}
            /> <br />
      <input required={true}
            placeholder="an adjective"
            name="adjectiveFour"
            value={userAdjectiveFour}
            onChange={(e) => setUserAdjectiveFour(e.target.value)}
          />
      <br />
      <input required={true}
          placeholder="a job/career"
          name="jobPosition"
          value={userJobPositionTwo}
          onChange={(e) => setUserJobPositionTwo(e.target.value)}
        />
      <br />
      <input required={true}
        placeholder="an adjective"
        name="adjectiveFive"
        value={userAdjectiveFive}
        onChange={(e) => setUserAdjectiveFive(e.target.value)}
      />
      <br />
      <input required={true}
      placeholder="a noun"
      name="nounOne"
      value={userNoun}
      onChange={(e) => setUserNoun(e.target.value)}
    />
    <br />
    <input required={true}
    placeholder="an adjective"
    name="adjectiveSix"
    value={userAdjectiveSix}
    onChange={(e) => setUserAdjectiveSix(e.target.value)}
  />
  <br />
  <input required={true}
      placeholder="a noun"
      name="nounTwo"
      value={userNounTwo}
      onChange={(e) => setUserNounTwo(e.target.value)}
    />
  <br />
</div>
<div class="input-col">
<input required={true}
  placeholder="an adjective"
  name="adjectiveSeven"
  value={userAdjectiveSeven}
  onChange={(e) => setUserAdjectiveSeven(e.target.value)}
/>
<br />
<input required={true}
    placeholder="a noun"
    name="nounThree"
    value={userNounThree}
    onChange={(e) => setUserNounThree(e.target.value)}
  />
  <br />
  <input required={true}
  placeholder="an adjective"
  name="adjectiveEight"
  value={userAdjectiveEight}
  onChange={(e) => setUserAdjectiveEight(e.target.value)}
/>
<br />
<input required={true}
  placeholder="an adjective"
  name="adjectiveNine"
  value={userAdjectiveNine}
  onChange={(e) => setUserAdjectiveNine(e.target.value)}
/>
<br />
<input required={true}
    placeholder="a noun"
    name="nounFour"
    value={userNounFour}
    onChange={(e) => setUserNounFour(e.target.value)}
  />
<br />
<input required={true}
  placeholder="an adjective"
  name="adjectiveTen"
  value={userAdjectiveTen}
  onChange={(e) => setUserAdjectiveTen(e.target.value)}
/>
<br /><input required={true}
  placeholder="an adjective"
  name="adjectiveEleven"
  value={userAdjectiveEleven}
  onChange={(e) => setUserAdjectiveEleven(e.target.value)}
/>
<br />
<input required={true}
  placeholder="an adjective"
  name="adjectiveTwelve"
  value={userAdjectiveTwelve}
  onChange={(e) => setUserAdjectiveTwelve(e.target.value)}
/>
<br />
<input required={true}
  placeholder="an adjective"
  name="adjectiveThirteen"
  value={userAdjectiveThirteen}
  onChange={(e) => setUserAdjectiveThirteen(e.target.value)}
/>
<br />
<input required={true}
  placeholder="an adjective"
  name="adjectiveFourteen"
  value={userAdjectiveFourteen}
  onChange={(e) => setUserAdjectiveFourteen(e.target.value)}
/>
<br />
<input required={true}
  placeholder="a person or name"
  name="name"
  value={userName}
  onChange={(e) => setUserName(e.target.value)}
/>
<br />
</div>
        </div>


          <button type="submit">Submit</button>
        </form>

        <div className='cover-letter' style={{ display: isFilled ? 'flex' : 'none'}}>
        <CoverLetter 
          companyName={companyName} 
          adjective={adjective} 
          jobPosition={jobPosition} 
          place={place} 
          noun={noun} 
          name={name}
        />
        <button onClick={handleClick}>
          Start over
        </button>
        </div>
      </div>
      
  )
}
