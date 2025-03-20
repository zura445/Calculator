function Monitor() {
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
            <div className="w-[71px] h-[26px] bg-blue-900 rounded-[13px] mt-1.5 p-[5px]">
              <div className="w-4 h-4 bg-red-700 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Monitor;
