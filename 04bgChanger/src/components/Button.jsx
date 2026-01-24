function Button({ colorValue, setColor }) {
  return (
    <>
      <button
        className={
          "text-white  font-semibold px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer w-24 min-w-1/12}"
        }
        onClick={() => setColor(colorValue)}
        style={{
          backgroundColor: colorValue,
          textShadow: "0 0 1px #000, 0 0 1px #000",
        }}
      >
        {/* {colorValue} */}
        {/* Capitalize the first letter */}
        {colorValue.charAt(0).toUpperCase() + colorValue.slice(1)}
      </button>
    </>
  );
}

export default Button;
