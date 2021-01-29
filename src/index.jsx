import React, { useEffect, useState, Select } from "react";
import ReactDOM from "react-dom";
import Contador from "./Contador";
import Botao from "./Botao";
import LabelRelogio from "./LabelRelogio";

const App = () => {
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [stop, setStop] = useState(true);
  const [nameStop, setNameStop] = useState("Iniciar");
  const [name, setName] = useState("Cronômetro");
  const [parcial, setParcial] = useState("");

  const zerarCronometro = () => {
    clearTimeout();
    zerarSegundos();
    setMinutos(0);
    setStop(true);
    setNameStop("Iniciar");
    console.log("Zerado");
  };

  const iniciarCronometro = () => {
    if (stop == true) {
      setStop(false);
      setNameStop("Pausar");
      setSegundos(segundos + 1);
      console.log("inicio")
    } else {
      setStop(true);
      setNameStop("Iniciar");
      console.log("Pausa")
    }
  };

  const incrementarSegundo = () => {
    if (stop == false) {
      console.log("incremento")
      if (segundos == 4) {
        setTimeout(() => {
          zerarSegundos();
          incrementarMinuto();
          console.log("Incrementar minuto");
        }, 1000);
      } else {
        console.log("Incrementar segundo")
        setTimeout(() => setSegundos(segundos + 1), 1000);
      }
    }
  };

  const incrementarMinuto = () => {
    setMinutos(minutos + 1);
  };

  const zerarSegundos = () => {
    setSegundos(0);
  };

  useEffect(() => {
    incrementarSegundo();
  }, [segundos]);

  return (
    <div>
      <LabelRelogio name={name} />
      <Contador minutos={minutos} segundos={segundos} />
      <Botao onClick={() => iniciarCronometro()} label={nameStop} />
      <Botao onClick={() => zerarCronometro()} label={"Zerar"} />
      <LabelRelogio name={parcial} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
