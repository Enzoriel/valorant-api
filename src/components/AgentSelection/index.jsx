import { useContext, useEffect, useState } from "react";
import styles from "./AgentSelection.module.css";
import { Contexto } from "../../Context";

function AgentSelection() {
  const { agentes, setAgentName, agentesRol, selectRol, setSelectRol, agentesByRol } = useContext(Contexto);

  const changeAgent = (agente) => {
    setAgentName(agente);
  };

  const crearRoles = () => {
    return (
      <>
        <p className={styles.filtro}>Filtrar por rol</p>
        <div className={styles.rolContainer}>
          {agentesRol &&
            agentesRol.map((roles) => (
              <img
                src={roles.icono}
                alt={roles.rol}
                key={roles.rol}
                title={roles.rol}
                onClick={(e) => setSelectRol(e.target.alt)}
              />
            ))}
        </div>
      </>
    );
  };

  const displayAgentes = () => {
    return (
      <>
        <div className={styles.container}>
          {agentesByRol &&
            agentesByRol.map((agente, index) => (
              <div key={index} className={styles.caja}>
                <div className={styles.sombreado}></div>
                <img
                  src={agente.icono}
                  alt={`Icono de ${agente.nombre}`}
                  className={styles.agenteIcono}
                  title={agente.nombre}
                  onClick={() => {
                    changeAgent(agente.nombre.toLowerCase());
                  }}
                />
              </div>
            ))}
        </div>
      </>
    );
  };

  return (
    <>
      {crearRoles()}
      {displayAgentes()}
    </>
  );
}

export default AgentSelection;
