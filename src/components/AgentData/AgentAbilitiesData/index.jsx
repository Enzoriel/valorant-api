import { useContext } from "react";
import styles from "./AgentAbilitiesData.module.css";
import { Contexto } from "../../../Context";

function AgentAbilitiesData() {
  const { dbAbilities } = useContext(Contexto);

  return (
    <section className={styles.container}>
      <table className={styles.tabla}>
        <tbody>
          <tr>
            <th>Ranura</th>
            <td>Ultimate</td>
          </tr>
          <tr>
            <th>Tiempo de lanzamiento</th>
            <td>2 segundos</td>
          </tr>
          <tr>
            <th>Efecto</th>
            <td>Detención</td>
          </tr>
          <tr>
            <th>Daño</th>
            <td>0</td>
          </tr>
          <tr>
            <th>Cargas</th>
            <td>1</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Daño en el tiempo</th>
            <td>No</td>
          </tr>
          <tr>
            <th>Duración</th>
            <td>10 segundos</td>
          </tr>
          <tr>
            <th>Radio</th>
            <td>30</td>
          </tr>
          <tr>
            <th>Daño inicial</th>
            <td>0</td>
          </tr>
          <tr>
            <th>Enfriamiento</th>
            <td>N/A</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th>Alcance</th>
            <td>N/A</td>
          </tr>
          <tr>
            <th>Daño por tick</th>
            <td>0</td>
          </tr>
          <tr>
            <th>Costo</th>
            <td>7</td>
          </tr>
          <tr>
            <th>Velocidad</th>
            <td>N/A</td>
          </tr>
          <tr>
            <th>Utilidad</th>
            <td>Detención</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default AgentAbilitiesData;
