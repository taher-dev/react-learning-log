import Button from "./components/Button";
import { useState } from "react";
function App() {
  const [color, setColor] = useState("white");
  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-3xl font-bold text-center bg-blue-200 p-3 rounded-xl shadow-lg mb-10">
        BG Changer
      </h1>
      <div className="fixed bottom-10 left-0 right-0 flex justify-center">
        <div className="flex flex-wrap justify-center items-center gap-5 bg-blue-100 p-4 rounded-xl mx-10">
          <Button colorValue="red" setColor={setColor} />
          <Button colorValue="green" setColor={setColor} />
          <Button colorValue="blue" setColor={setColor} />
          <Button colorValue="purple" setColor={setColor} />
          <Button colorValue="#FF6B6B" setColor={setColor} /> {/* coral */}
          <Button colorValue="#4ECDC4" setColor={setColor} /> {/* mint */}
          <Button colorValue="#F7B801" setColor={setColor} /> {/* gold */}
          <Button colorValue="#9B5DE5" setColor={setColor} /> {/* violet */}
        </div>
      </div>
    </div>
  );
}

export default App;
