import React from "react";

import "./App.css";

function App() {
  return (
    <div>
      <div className="App">
        <header className="App-header">
          <h5>Automated Unit Test</h5>
        </header>
      </div>
      <div>
        <section>
          <h3>Module Overview:</h3>
          <h4>Learning Objective</h4>
          <p>
            In this module I will learn about automated testing, and how to
            write unit test, with{" "}
            <span style={{ fontWeight: "bold" }}>Jest</span> . Jest is a React
            testing-library
          </p>
        </section>
        <h4>Learning Outcomes:</h4>
        <ul>
          <li>
            I should be able to define what automated testing is and its
            importance.
          </li>
          <li>
            I will be demonstrate the ability to write a test on react
            components using "react-testing-library"
          </li>
          <li>
            Use the <span style={{ fontWeight: "bold" }}>"testFire()"</span>{" "}
            event to test user interactions from the "react-testing-library"
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
