import styles from "./Rodape.module.css";
import RodapeInfo from "./RodapeInfo";
import RodapeInstitucional from "./RodapeInstitucional";
import RodapeLogo from "./RodapeLogo";
import RodapeSocial from "./RodapeSocial";

const Rodape = () => {
  return (
    <footer className={styles.rodape}>
      <div className={styles.rodape_informacoes}>
        <RodapeLogo />
        <RodapeInfo />
        <RodapeInstitucional />
        <RodapeSocial />
      </div>
    </footer>
  );
}

export default Rodape;
