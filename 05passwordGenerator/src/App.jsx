import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const [copied, setCopied] = useState(false);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_=+[]{}`~";

    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numberAllowed, charAllowed, generatePassword]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="shadow-[0_0_40px_rgba(56,189,248,0.15)] w-full max-w-lg rounded-2xl p-6 bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20">
        {/* card content */}
        {/* Title */}
        <h1 className="text-white text-center mb-6 text-2xl font-semibold tracking-wide">
          🔐 Password Generator
        </h1>

        {/* Input */}
        <div className="flex rounded-xl overflow-hidden mb-5 border border-white/20">
          <input
            type="text"
            value={password}
            className="w-full px-4 py-2 bg-transparent text-white text-lg outline-none"
            placeholder="Your secure password"
            readOnly
            ref={passwordRef}
          />
          <button
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-5 font-medium hover:opacity-90 transition cursor-pointer"
            onClick={copyPasswordToClipboard}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-4 text-sm text-gray-200">
          {/* Length */}
          <div>
            <label className="flex justify-between mb-1">
              <span>Password Length</span>
              <span className="text-cyan-400 font-semibold">{length}</span>
            </label>
            <input
              type="range"
              value={length}
              min={4}
              max={30}
              className="w-full accent-cyan-500 cursor-pointer"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          {/* Options */}
          <div className="flex justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-cyan-500"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
              />
              Include Numbers
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="accent-cyan-500"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
              />
              Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
