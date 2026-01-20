import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-200 p-10">
      <h1 className="bg-gray-500 p-5 rounded-2xl mb-5 text-xl font-bold text-gray-700">
        Tailwind Props Demo
      </h1>

      <div className="flex gap-5">
        <Card title="Card 1" />
        <Card title="Card 2" />
        <Card />
      </div>
    </div>
  );
}

export default App;
