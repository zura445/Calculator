import { useState } from "react";
import "./App.css";
import Buttons from "./components/Buttons";
import Monitor from "./components/monitor/Monitor";

const multiplicators = ["+", "-", ".", "X", "/"];

function App() {
  const [displayText, setDisplayText] = useState<string>("");
  const [calculated, setCalculated] = useState<boolean>(false);

  const handleButtonClick = (value: string | number) => {
    if (value === "RESET") {
      setDisplayText("");
    } else if (value === "=") {
      setDisplayText(eval(displayText.replace("X", "*")).toString());
      setCalculated(true);
    } else if (value === "DEL") {
      setDisplayText(displayText.slice(0, -1));
    } else {
      if (!displayText && multiplicators.includes(value as string)) {
        return;
      }
      setDisplayText((prev) => (calculated ? value.toString() : prev + value));
      setCalculated(false);
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
