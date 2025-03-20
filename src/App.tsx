import "./App.css";
import Buttons from "./components/Buttons";
import Monitor from "./components/monitor";

function App() {
  return (
    <>
      <div className="w-[320px] md:w-[540px]">
        <Monitor />
        <Buttons />
      </div>
    </>
  );
}

export default App;
