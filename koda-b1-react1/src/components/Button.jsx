import { useState } from "react";

// import React from 'react'

const Button = () => {
  const [angka, setAngka] = useState(0);
  function Tambah() {
    setAngka(angka + 1);
  }
  function Kurang() {
    setAngka(angka - 1);
  }
  return (
    <>
      <button onClick={Tambah}>Tambah</button>
      <button onClick={Kurang}>Kurang</button>
    </>
  );
};

export default Button;
