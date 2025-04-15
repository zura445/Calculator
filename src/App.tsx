import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Monitor from "./components/monitor/Monitor";

function App() {
  const [displayText, setDisplayText] = useState<string>("");

  const handleButtonClick = (value: number | string) => {
    if (value === "RESET") {
      setDisplayText("");
    } else {
      setDisplayText((prev) => prev + value);
    }
  };

  return (
    <>
      <div className="min-h-screen w-screen bg-blue-600 light:bg-gray-200 dark:bg-dark-blue light: flex justify-center items-center">
        <div className="w-[320px] md:w-[540px]">
          <Monitor displayText={displayText} />
          <Buttons handleButtonClick={handleButtonClick} />
        </div>
      </div>
    </>
  );
}

export default App;
