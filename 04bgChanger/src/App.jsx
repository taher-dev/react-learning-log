import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("white");
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl font-bold text-center bg-amber-300">
        BG Changer
      </h1>
      <div className="fixed bottom-10 left-0 right-0 flex justify-center">
        <div className="flex gap-5 bg-gray-800 p-4 rounded-xl mx-10">
          <Button colorValue="red" setColor={setColor} />
          <Button colorValue="green" setColor={setColor} />
          <Button colorValue="blue" setColor={setColor} />
        </div>
      </div>
    </div>
  );
}

export default App;
