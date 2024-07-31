import { useContext } from "react";
import styles from "./AgentDescription.module.css";
import { Contexto } from "../../../Context";

function AgentDescription() {
  const { agente, dbAgente } = useContext(Contexto);

  return (
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
          <th>Nacimiento</th>
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
  );
}

export default AgentDescription;
