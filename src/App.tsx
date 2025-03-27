import "./App.css";
import Buttons from "./components/Buttons";
import Monitor from "./components/monitor/Monitor";

function App() {
  return (
    <>
      <div className="min-h-screen w-screen bg-[#5656b6] flex justify-center items-center">
        <div className="w-[320px] md:w-[540px]">
          <Monitor />
          <Buttons />
        </div>
      </div>
    </>
  );
}

export default App;
