import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.contenedor}>
      <img
        className={styles.logo}
        src="https://static.vecteezy.com/system/resources/previews/022/636/388/non_2x/valorant-logo-valorant-icon-transparent-free-png.png"
        alt="Imagen del encabezado"
      />
      <h1>Agentes de Valorant</h1>
    </header>
  );
}

export default Header;
