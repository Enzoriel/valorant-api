import { Link } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.contenedor}>
      <Link to="/">
        <img
          className={styles.logo}
          src="https://static.vecteezy.com/system/resources/previews/022/636/388/non_2x/valorant-logo-valorant-icon-transparent-free-png.png"
          alt="Imagen del encabezado"
        />
      </Link>
      <h1 className={styles.titulo}>Agentes de Valorant</h1>
    </header>
  );
}

export default Header;
