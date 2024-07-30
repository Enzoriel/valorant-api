import { useContext, useState } from "react";
import styles from "./AgentAbilities.module.css";
import { Contexto } from "../../../Context";

function AgentAbilities() {
  const {
    agente: { abilities },
  } = useContext(Contexto);

  const abilitiesBySlot = abilities.reduce((acc, ability) => {
    acc[ability.slot] = ability;
    return acc;
  }, {});

  const { Ability1, Ability2, Grenade, Ultimate } = abilitiesBySlot;
  const [selectAbility, setSelectAbility] = useState(Ability1);

  const crearHabilidades = (habilidad) => {
    return (
      <li key={habilidad.slot} onClick={() => setSelectAbility(habilidad)}>
        <img className={styles.iconos} src={habilidad.displayIcon} alt={habilidad.displayName} />
      </li>
    );
  };

  const nombreDescripcion = () => {
    if (selectAbility) {
      return (
        <>
          <div className={styles.nombreHabilidad}>
            <h2>{selectAbility.displayName}</h2>
          </div>
          <div className={styles.descripcion}>
            <p>{selectAbility.description}</p>
          </div>
        </>
      );
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.imagenHabilidades}>
        <ul className={styles.lista}>
          {[Ability1, Ability2, Grenade, Ultimate].map((habilidad) => crearHabilidades(habilidad))}
        </ul>
      </div>
      {nombreDescripcion()}
    </section>
  );
}

export default AgentAbilities;
