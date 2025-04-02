import "./App.css";
import Buttons from "./components/Buttons";
import Monitor from "./components/monitor/Monitor";

function App() {
  return (
    <>
      <div className="min-h-screen w-screen bg-blue-600 light:bg-gray-200 dark:bg-dark-blue light: flex justify-center items-center">
        <div className="w-[320px] md:w-[540px]">
          <Monitor />
          <Buttons />
        </div>
      </div>
    </>
  );
}

export default App;
