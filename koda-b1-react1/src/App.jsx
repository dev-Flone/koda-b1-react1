import { useState } from "react";

const App = () => {
  const [angka, setAngka] = useState(0);
  function Tambah() {
    setAngka(angka + 1);
  }
  function Kurang() {
    setAngka(angka - 1);
  }
  return (
    <>
      <div className="flex items-center flex-col bg-black gap-4 p-5 min-h-screen justify-center">
        <h1 className="text-white">Angka: {angka}</h1>
        <div className="flex gap-3">
          <button onClick={Tambah} className="bg-amber-300 rounded-md p-2">
            Tambah
          </button>
          <button
            onClick={Kurang}
            className="bg-cyan-400 rounded-md p-2"
            disabled={angka === 0}
          >
            Kurang
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
