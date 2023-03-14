import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import CoverLetter from './CoverLetter';

export default function UserInputs() {
    const [companyName, setCompanyName] = useState("");
  const [userCompanyName, setUserCompanyName] = useState("");

  const [adjective, setAdjective] = useState(['']);
  const [userAdjective, setUserAdjective] = useState("");

  const [jobPosition, setJobPosition] = useState("");
  const [userJobPosition, setUserJobPosition] = useState("");

  const [place, setPlace] = useState("");
  const [userPlace, setUserPlace] = useState("");

  const [userAdjectiveTwo, setUserAdjectiveTwo] = useState("");
  const [userAdjectiveThree, setUserAdjectiveThree] = useState("");
  const [userAdjectiveFour, setUserAdjectiveFour] = useState("");

  const navigate = useNavigate();
  let adjectiveList = [];

  function handleSubmit(e) {
    e.preventDefault();
    setCompanyName(userCompanyName);
    // setUserCompanyName("");

    adjectiveList.push(
      userAdjective,
      userAdjectiveTwo,
      userAdjectiveThree,
      userAdjectiveFour
    );

    setAdjective(adjectiveList);
    // setUserAdjective("");
    // setUserAdjectiveTwo("");
    // setUserAdjectiveThree("");
    // setUserAdjectiveFour("");

    setJobPosition(userJobPosition);
    // setUserJobPosition("");

    setPlace(userPlace);
    // setUserPlace("");
    navigate('coverletter');
  }
  console.log("adjective", adjective);
  console.log("adjectiveList", adjectiveList);
  return (
    <div className="user-inputs">
        <form onSubmit={handleSubmit}>
          {/* Company Input */}
          <input
            placeholder="Someone you dislike"
            name="companyName"
            value={userCompanyName}
            onChange={(e) => setUserCompanyName(e.target.value)}
          />

          {/* Adjective Input */}
          <input
            placeholder="One word description"
            name="adjective"
            value={userAdjective}
            onChange={(e) => setUserAdjective(e.target.value)}
          />

          {/* Job Position Input */}
          <input
            placeholder="Job Position"
            name="jobPosition"
            value={userJobPosition}
            onChange={(e) => setUserJobPosition(e.target.value)}
          />

          {/* Job Board Input */}
          <input
            placeholder="A place or location"
            name="place"
            value={userPlace}
            onChange={(e) => setUserPlace(e.target.value)}
          />

          <input
            placeholder="A descriptive word"
            name="adjectiveTwo"
            value={userAdjectiveTwo}
            onChange={(e) => setUserAdjectiveTwo(e.target.value)}
          />

          <input
            placeholder="Describe how you feel when you eat a food that should be crunchy, but is instead soft"
            name="adjectiveThree"
            value={userAdjectiveThree}
            onChange={(e) => setUserAdjectiveThree(e.target.value)}
          />

          <input
            placeholder="How do you feel when you hear the phrase 'right', or 'yeah'?"
            name="adjectiveFour"
            value={userAdjectiveFour}
            onChange={(e) => setUserAdjectiveFour(e.target.value)}
          />
          <button type="submit">Submit Me</button>
        </form>
        {/* <CoverLetter
          companyName={companyName}
          adjective={adjective}
          jobPosition={jobPosition}
          place={place}
        /> */}
      </div>
      
  )
}
