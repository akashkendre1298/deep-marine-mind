import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import DashBoard from "./Containers/DashBoard/DashBoard";
import "animate.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating a delay to display the name before loading the dashboard
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay time as needed (in milliseconds)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      {isLoading ? (
        // Displaying the name while loading
        <div className="w-full h-screen grid place-content-center bg-black">
          <h1 className="animate__animated animate__zoomIn callout-title">
            DEEPMARINEMIND
          </h1>
        </div>
      ) : (
        // Once loading is complete, display the dashboard
        <DashBoard />
      )}
    </div>
  );
}

export default App;
