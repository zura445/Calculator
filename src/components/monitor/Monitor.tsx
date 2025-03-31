import { useState } from "react";
import "./monitor.css";

function Monitor() {
  const [calcColor, setCalcColor] = useState<number>(0);
  console.log("🚀 ~ Monitor ~ calcColor:", calcColor);

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-white text-[32px] font-bold">calc</p>
        <div className="flex items-end">
          <p className="text-xs text-white pb-1.5">THEME</p>
          <div className="ml-6.5">
            <div className="text-white">
              <div className="flex justify-center gap-3">
                <p>1</p>
                <p>2</p>
                <p>3</p>
              </div>
            </div>
            <div className="relative">
              <input
                onChange={(e) => {
                  setCalcColor(parseInt(e.target.value));
                }}
                type="range"
                defaultValue={1}
                min="1"
                max="3"
                // ვერ ვუცვლი ფერს მოძრავ წრეს
                className="w-[71px] px-2 h-6.5 bg-blue-900 rounded-[13px] appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monitor;
