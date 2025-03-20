import { useState } from "react";

function Monitor() {
  const [calcColor, setCalcColor] = useState<number>(0);

  return (
    <div>
      <div className="flex justify-between items-center">
        <p className="text-white text-[32px] font-bold">calc</p>
        <div className="flex items-center">
          <p className="text-xs text-white">THEME</p>
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
                min="1"
                max="3"
                // ვერ ვუცვლი ფერს მოძრავ წრეს
                className="peer w-[71px] px-2 h-6.5 bg-blue-900  rounded-[13px] appearance-none cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monitor;
