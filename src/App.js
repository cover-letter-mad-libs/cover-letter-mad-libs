import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react"; 
import "./App.css";
import CoverLetter from "./Components/CoverLetter";
import UserInputs from "./Components/UserInputs";

function App() {

  return (
    <Router>
      <div className="App">
        <div className="cover-letter">
          <Routes>
            <Route index element={<UserInputs />} />
            <Route path='coverletter' element={<CoverLetter />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
