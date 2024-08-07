import { useContext, useRef, useState } from "react";
import styles from "./Home.module.css";
import { Contexto } from "../../Context";
import AgentSelection from "../AgentSelection";

function Home() {
  const { setAgentName, agentes, agentName } = useContext(Contexto);
  const [mostrarError, setMostrarError] = useState(false);
  const inputRef = useRef();

  const cambiarAgente = (agente) => {
    if (agentes.some((item) => item.nombre.toLowerCase() === agente)) {
      setAgentName("");
      setTimeout(() => setAgentName(agente), 0);
      setMostrarError(false);
    } else {
      setMostrarError(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      cambiarAgente(inputRef.current.value.toLowerCase());
    }
  };

  return (
    <div className={styles.container}>
      <AgentSelection />
      <section className={styles.caja}>
        <label htmlFor="id">O ingresa el nombre del agente</label>
        <div className={styles.busqueda}>
          <div onClick={() => cambiarAgente(inputRef.current.value.toLowerCase())}>
            <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M7 9H2V7h5zm0 3H2v2h5zm13.59 7l-3.83-3.83c-.8.52-1.74.83-2.76.83c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L22 17.59zM17 11c0-1.65-1.35-3-3-3s-3 1.35-3 3s1.35 3 3 3s3-1.35 3-3M2 19h10v-2H2z"
              />
            </svg>
          </div>
          <input ref={inputRef} id="id" placeholder="Ej: Gekko" type="text" onKeyDown={handleKeyDown} />
        </div>
        <p className={styles.errorName} hidden={!mostrarError}>
          Agente no encontrado
        </p>
      </section>
    </div>
  );
}

export default Home;
