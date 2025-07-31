import React from "react";
import Header from "../../components/header/Header";
import { setActualPlayer } from "../../entitys/Player";
import { TestPlayer } from "../../constants/dev_vars";

export default function HomePage() {

  return (
    <>
      <Header/>
      <div>Bienvenido a bardeck</div>
    </>
  );
}
