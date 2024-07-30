import { useContext } from "react";
import styles from "./AgentData.module.css";
import { Contexto } from "../../Context";
import AgentDescription from "./AgentDescription";
import AgentAbilities from "./AgentAbilities";

function AgentData() {
  const { agente } = useContext(Contexto);

  if (!agente) {
    return null;
  }

  return (
    <>
      <nav className={styles.nav}>
        <ul>
          <li>
            <button aria-label="Ver descripción">Descripción</button>
          </li>
          <li>
            <button aria-label="Ver descripción">Habilidades</button>
          </li>
        </ul>
      </nav>
      <div className={styles.container}>
        <section className={styles.personaje}>
          <header>{agente.displayName}</header>
          <img className={styles.background} src={agente.background} alt="Imagen de fondo" />
          <img className={styles.agenteImagen} src={agente.fullPortrait} alt={`Imagen de ${agente}`} />
        </section>
        <section className={styles.descripcionContainer}>
          <AgentAbilities />
        </section>
      </div>
    </>
  );
}

export default AgentData;
