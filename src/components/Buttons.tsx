let calcButtons: (number | string)[] = [
  7,
  8,
  9,
  "DEL",
  4,
  5,
  6,
  "+",
  1,
  2,
  3,
  "-",
  ".",
  0,
  "/",
  "X",
  "RESET",
  "=",
];

function Buttons() {
  return (
    <div className="grid grid-cols-4 gap-2 bg-blue-900 dark:bg-gray-900  p-8 mt-8 ">
      {calcButtons.map((calc, index) => (
        <button
          key={index}
          className="w-[101px] h-[64px] text-blue-700 bg-gray-500 light:bg-gray-300 dark:bg-violet-800 rounded-md font-bold text-lg light:text-gray-800 dark:text-yellow-800"
        >
          {calc}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
