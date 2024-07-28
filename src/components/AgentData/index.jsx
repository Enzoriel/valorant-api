import { useContext } from "react";
import styles from "./AgentData.module.css";
import { Contexto } from "../../Context";

function AgentData() {
  const { agente, dbAgente } = useContext(Contexto);

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
          <div className={styles.descripcion}>
            <table className={styles.datosPersonaje}>
              <tbody>
                <tr>
                  <th>Nombre real</th>
                  <td>{dbAgente.realName}</td>
                </tr>
                <tr>
                  <th>Developer Name</th>
                  <td>{agente.developerName}</td>
                </tr>
                <tr>
                  <th>Descripción</th>
                  <td>{agente.description}</td>
                </tr>
                <tr>
                  <th>Origen</th>
                  <td>{dbAgente.origin}</td>
                </tr>
                <tr>
                  <th>Cumpleaños</th>
                  <td>{dbAgente.birthday}</td>
                </tr>
                <tr>
                  <th>Rol</th>
                  <td>{agente.role.displayName}</td>
                </tr>
                <tr>
                  <th>Historia</th>
                  <td>{dbAgente.funFact}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
}

export default AgentData;
