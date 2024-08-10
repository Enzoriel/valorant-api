import { useContext, useState } from "react";
import styles from "./AgentSelection.module.css";
import { Contexto } from "../../Context";

function AgentSelection() {
  const { setAgentName, agentesRol, setSelectRol, agentesByRol, selectRol } = useContext(Contexto);
  const [filterActive, setFilterActive] = useState("Todos");

  const changeAgent = (agente) => {
    setAgentName("");
    setTimeout(() => setAgentName(agente));
  };

  const crearRoles = () => {
    return (
      <>
        <p className={styles.filtro}>Filtrar por rol</p>
        <div className={styles.rolContainer}>
          {agentesRol &&
            agentesRol.map((roles) => (
              <div className={filterActive === roles.rol ? styles.rolActivo : styles.rolCaja} key={roles.rol}>
                <img
                  className={styles.rolImg}
                  src={roles.icono}
                  alt={roles.rol}
                  title={roles.rol}
                  onClick={(e) => {
                    setSelectRol(e.target.alt);
                    setFilterActive(e.target.alt);
                  }}
                />
              </div>
            ))}
        </div>
      </>
    );
  };

  const displayAgentes = () => {
    return (
      <>
        <div className={styles.agentContainer}>
          {selectRol !== "Todos" && selectRol && <h2 className={styles.nombreRol}>{selectRol}</h2>}
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
