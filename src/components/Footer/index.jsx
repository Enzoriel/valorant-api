import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <img
        src="https://static.vecteezy.com/system/resources/previews/022/636/388/non_2x/valorant-logo-valorant-icon-transparent-free-png.png"
        alt="Logo"
        className={styles.logo}
      />
      <p className={styles.texto}>Creado por EnzorielDev</p>
    </footer>
  );
}

export default Footer;
