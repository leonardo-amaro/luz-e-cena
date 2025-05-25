import styles from "./Rodape.module.css";
import Logo from "../Logo";

const RodapeLogo = () => {
  return (
    <div className={styles.logo}>
      <Logo src="/Logo_branca.png" alt="Logo Luz e Cena" />
      <p>Onde a realidade encontra a fantasia!</p>
    </div>
  );
}

export default RodapeLogo;
