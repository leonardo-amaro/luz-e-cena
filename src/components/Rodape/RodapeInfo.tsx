import styles from "./Rodape.module.css";

const RodapeInfo = () => {
  return (
    <div className={styles.funcionamento}>
      <h4 className={styles.titulo}>Funcionamento</h4>
      <span>Segunda a Sexta - 16h às 00h</span>
      <span>ola@luzecena.com.br</span>
      <span>0800 541 320</span>
    </div>
  );
}

export default RodapeInfo;