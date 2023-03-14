import "./App.css";
import CoverLetter from "./CoverLetter";
import { useState } from "react";

function App() {
  const [companyName, setCompanyName] = useState("_____");
  const [userCompanyName, setUserCompanyName] = useState("");

  const [adjective, setAdjective] = useState(['_____', '_____', '_____', '_____']);
  const [userAdjective, setUserAdjective] = useState("");

  const [jobPosition, setJobPosition] = useState("_____");
  const [userJobPosition, setUserJobPosition] = useState("");

  const [place, setPlace] = useState("_____");
  const [userPlace, setUserPlace] = useState("");

  const [userAdjectiveTwo, setUserAdjectiveTwo] = useState("");
  const [userAdjectiveThree, setUserAdjectiveThree] = useState("");
  const [userAdjectiveFour, setUserAdjectiveFour] = useState("");

  let adjectiveList = [];

  function handleSubmit(e) {
    e.preventDefault();
    setCompanyName(userCompanyName);
    setUserCompanyName("");

    adjectiveList.push(
      userAdjective,
      userAdjectiveTwo,
      userAdjectiveThree,
      userAdjectiveFour
    );

    setAdjective(adjectiveList);
    setUserAdjective("");
    setUserAdjectiveTwo("");
    setUserAdjectiveThree("");
    setUserAdjectiveFour("");

    setJobPosition(userJobPosition);
    setUserJobPosition("");

    setPlace(userPlace);
    setUserPlace("");
  }
  console.log("adjective", adjective);
  console.log("adjectiveList", adjectiveList);

  return (
    <div className="App">
      
      <div role="header"></div>
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
      </div>
      <div className="cover-letter">
        <CoverLetter
          companyName={companyName}
          adjective={adjective}
          jobPosition={jobPosition}
          place={place}
        />
      </div>
    </div>
  );
}

export default App;
