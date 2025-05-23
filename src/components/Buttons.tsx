interface ButtonsProps {
  handleButtonClick: (value: number | string) => void;
}

function Buttons({ handleButtonClick }: ButtonsProps) {
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

  return (
    <div className="grid grid-cols-4 gap-5 bg-blue-900 dark:bg-gray-900 light:bg-gray-300 rounded-md p-8 mt-8">
      {calcButtons.map((calc, index) => (
        <button
          key={index}
          onClick={() => handleButtonClick(calc)}
          className={`w-[101px] h-[64px] text-blue-700 bg-red-500 light:bg-red-200 dark:bg-violet-800 rounded-md font-bold text-lg light:text-gray-800 dark:text-yellow-800 cursor-pointer ${
            index >= calcButtons.length - 2 ? "col-span-2 w-[222px]" : ""
          } ${
            calc === "DEL"
              ? "bg-blue-400 text-white light:bg-blue-500 dark:bg-violet-600"
              : ""
          } ${
            calc === "RESET"
              ? "bg-blue-400 text-white light:bg-blue-500 dark:bg-violet-600"
              : ""
          } ${
            calc === "="
              ? "bg-red-700 text-white light:bg-blue-500 dark:bg-sky-700"
              : ""
          }`}
        >
          {calc}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
