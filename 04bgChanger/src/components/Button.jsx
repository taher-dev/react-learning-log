function Button({ colorValue, setColor }) {
  return (
    <>
      <button
        className={
          "text-white font-bold px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer border-2 w-24"
        }
        onClick={() => setColor(colorValue)}
        style={{ backgroundColor: colorValue }}
      >
        {/* {colorValue} */}
        {/* Capitalize the first letter */}
        {colorValue.charAt(0).toUpperCase() + colorValue.slice(1)}
      </button>
    </>
  );
}

export default Button;
