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
      <h1>Angka: {angka}</h1>
      <div className="flex gap-3">
        <button onClick={Tambah} className="border bg-amber-400">
          Tambah
        </button>
        <button onClick={Kurang} className="border bg-cyan-400">
          Kurang
        </button>
      </div>
      <br />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
        voluptatibus accusamus modi distinctio, natus facilis, sunt laborum
        voluptas iusto deserunt quibusdam et earum itaque eligendi quas quidem
        dolores incidunt accusantium.
      </p>
    </>
  );
};

export default App;
