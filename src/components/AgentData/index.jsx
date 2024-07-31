import { useContext, useState } from "react";
import styles from "./AgentData.module.css";
import { Contexto } from "../../Context";
import AgentAbilities from "./AgentAbilities";
import AgentDescription from "./AgentDescription";

function AgentData() {
  const { agente } = useContext(Contexto);
  const [buttonActive, setButtonActive] = useState("Descripción");

  if (!agente) {
    return null;
  }

  return (
    <>
      <div className={styles.container}>
        <section className={styles.personaje}>
          <header>{agente.displayName}</header>
          <img className={styles.background} src={agente.background} alt="Imagen de fondo" />
          <img className={styles.agenteImagen} src={agente.fullPortrait} alt={`Imagen de ${agente}`} />
        </section>
        <section className={styles.descripcionContainer}>
          <nav className={styles.nav}>
            <ul>
              <li>
                <button
                  aria-label="Ver descripción"
                  onClick={() => setButtonActive("Descripción")}
                  className={buttonActive === "Descripción" ? styles.active : ""}
                >
                  Descripción
                </button>
              </li>
              <li>
                <button
                  aria-label="Ver descripción"
                  onClick={() => setButtonActive("Habilidades")}
                  className={buttonActive === "Habilidades" ? styles.active : ""}
                >
                  Habilidades
                </button>
              </li>
            </ul>
          </nav>
          {buttonActive === "Habilidades" ? <AgentAbilities /> : <AgentDescription />}
        </section>
      </div>
    </>
  );
}

export default AgentData;
