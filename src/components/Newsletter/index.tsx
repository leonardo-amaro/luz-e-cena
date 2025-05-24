import Botao from "../Botao";
import Fieldset from "../Fieldset";
import InputTexto from "../InputTexto";
import styles from "./Newsletter.module.css";

const Newsletter = () => {
  return (
    <section className={styles.newsletter}>
      <h2 className={styles.titulo}>Inscreva-se para ganhar descontos!</h2>
      <form className={styles.form}>
        <Fieldset>
          <InputTexto placeholder="Digite seu melhor e-mail..." />
        </Fieldset>
        <Botao type="submit" variant="default">
          Inscreva-se
        </Botao>
      </form>
    </section>
  );
}

export default Newsletter;
