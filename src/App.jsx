import React from "react";
import Card from "./components/Card";
import "./assets/styles/flipCard.css";

const App = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="flex -mx-2 flex-wrap">
        {/* Start card --> */}
        <div className="w-full w-1/2 md:w-1/3 lg:w-1/4 px-2">
          <Card
            photo="https://picsum.photos/340/480"
            name="Arturo Dangond"
            github_username="4rturd13"
            position="Front-End Developer"
            country="Colombia"
            city="Valledupar"
            language="JavaScript"
          />
        </div>
        {/* End card <-- */}
        {/* Start card --> */}
        <div className="w-full w-1/2 md:w-1/3 lg:w-1/4 px-2">
          <Card
            photo="https://picsum.photos/340/480"
            name="Angel Angel"
            github_username="Angel10050"
            position="Full-Stack Developer"
            country="Colombia"
            city="Medellín"
            language="JavaScript"
          />
        </div>
        {/* End card <-- */}
        <div className="w-full w-1/2 md:w-1/3 lg:w-1/4 px-2">
          <Card
            photo="David Londono"
            github_username="davidlondonor"
            position="Front end Developer"
            country="Colombia"
            city="Medellín"
            language="JavaScript, NextJS"
          />
        </div>
      </div>
    </div>
  );
};

export default App;
