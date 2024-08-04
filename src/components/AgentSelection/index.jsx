import { useContext } from "react";
import styles from "./AgentSelection.module.css";
import { Contexto } from "../../Context";

function AgentSelection() {
  const { agentes } = useContext(Contexto);

  const displayAgentes = () => {
    return (
      <div className={styles.container}>
        {agentes &&
          agentes.map((agente, index) => (
            <div className={styles.caja}>
              <div className={styles.sombreado}></div>
              <img
                key={index}
                src={agente.icono}
                alt={`Icono de ${agente.nombre}`}
                className={styles.agenteIcono}
              />
            </div>
          ))}
      </div>
    );
  };

  return <>{displayAgentes()}</>;
}

export default AgentSelection;
