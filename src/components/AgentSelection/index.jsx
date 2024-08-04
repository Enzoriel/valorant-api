import { useContext } from "react";
import styles from "./AgentSelection.module.css";
import { Contexto } from "../../Context";

function AgentSelection() {
  const { agentes, setAgentName } = useContext(Contexto);

  const changeAgent = (agente) => {
    setAgentName(agente);
  };

  const displayAgentes = () => {
    return (
      <div className={styles.container}>
        {agentes &&
          agentes.map((agente, index) => (
            <div key={index} className={styles.caja}>
              <div className={styles.sombreado}></div>
              <img
                src={agente.icono}
                alt={`Icono de ${agente.nombre}`}
                className={styles.agenteIcono}
                onClick={() => {
                  changeAgent(agente.nombre.toLowerCase());
                }}
              />
            </div>
          ))}
      </div>
    );
  };

  return <>{displayAgentes()}</>;
}

export default AgentSelection;
