import styles from "./AgentData.module.css";

function AgentData() {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.personaje}>
          <header>Nombre</header>
          <img
            className={styles.background}
            src="https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/background.png"
            alt="Imagen de fondo"
          />
          <img
            className={styles.agenteImagen}
            src="https://media.valorant-api.com/agents/dade69b4-4f5a-8528-247b-219e5a1facd6/fullportrait.png"
            alt="Imagen de Fade"
          />
        </section>
        <section className={styles.descripcionContainer}>
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
          <div className={styles.descripcion}>
            <table className={styles.datosPersonaje}>
              <tbody>
                <tr>
                  <th>Nombre real</th>
                  <td>Fade</td>
                </tr>
                <tr>
                  <th>Descripción</th>
                  <td>
                    Cazarrecompensas turca que utiliza el poder de las pesadillas para atrapar a sus
                    objetivos.
                  </td>
                </tr>
                <tr>
                  <th>Origen</th>
                  <td>Canada</td>
                </tr>
                <tr>
                  <th>Cumpleaños</th>
                  <td>Ayer</td>
                </tr>
                <tr>
                  <th>Rol</th>
                  <td>Iniciador</td>
                </tr>
                <tr>
                  <th>Historia</th>
                  <td>Comía pan</td>
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
