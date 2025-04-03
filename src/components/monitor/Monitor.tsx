import { useState } from "react";
import "./monitor.css";

function Monitor() {
  const [calcColor, setCalcColor] = useState<number>(0);
  console.log("🚀 ~ Monitor ~ calcColor:", calcColor);

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-white text-[32px] font-bold light:text-gray-800 dark:text-yellow-800">
          calc
        </p>
        <div className="flex items-end">
          <p className="text-xs text-white pb-1.5 light:text-gray-800 dark:text-yellow-800 pb-2">
            THEME
          </p>
          <div className="ml-6.5">
            <div className="text-white">
              <div className="flex justify-center gap-3 light:text-gray-800 dark:text-yellow-800">
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
            </div>
            <div className="relative">
              <input
                onChange={(e) => {
                  const value = parseInt(e.target.value);
                  setCalcColor(value);

                  if (value === 3) {
                    document.body.classList.add("dark");
                    document.body.classList.remove("light");
                  } else if (value === 2) {
                    document.body.classList.add("light");
                    document.body.classList.remove("dark");
                  } else {
                    document.body.classList.remove("dark");
                    document.body.classList.remove("light");
                  }
                }}
                type="range"
                defaultValue={1}
                min="1"
                max="3"
                className="w-[71px] px-2 h-6.5 bg-blue-800 rounded-[13px] appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
      <input
        type="text"
        className="w-full h-[128px] text-[56px] text-right text-white bg-blue-800 px-4 light:bg-red-100 dark:bg-gray-900 light:text-gray-800 dark:text-yellow-800 mt-8 rounded-md"
      />
    </div>
  );
}

export default Monitor;
