import { FaSearch } from "react-icons/fa";
import Botao from "../Botao";
import Fieldset from "../Fieldset";
import InputTexto from "../InputTexto";
import styles from "./SectionFilmes.module.css";
import ListaFilmes from "../ListaFilmes";
import type { Filme } from "../../types";

const filmes: Filme[] = [
  {
    id: 1,
    src: "/images/cards/amanhecer.png",
    alt: "Imagem do filme Amanhecer",
    titulo: "Amanhecer",
    categoria: "2D",
    censura: "Livre",
    genero: "Romance",
    duracao: 90,
  },
  {
    id: 2,
    src: "/images/cards/amigo_da_sombra.png",
    alt: "Imagem do filme Amigo da sombra",
    titulo: "Amigo da sombra",
    categoria: "2D",
    censura: "12 anos",
    genero: "Suspense",
    duracao: 110,
  },
  {
    id: 3,
    src: "/images/cards/amigos_do_bosque_magico.png",
    alt: "Imagem do filme Amigo do bosque mágico",
    titulo: "Amigo do bosque mágico",
    categoria: "2D",
    censura: "Livre",
    genero: "Animação",
    duracao: 60,
  },
  {
    id: 4,
    src: "/images/cards/caminho_para_o_abismo.png",
    alt: "Imagem do filme Caminho para o abismo",
    titulo: "Caminho para o abismo",
    categoria: "2D",
    censura: "14 anos",
    genero: "Horror",
    duracao: 103,
  },
  {
    id: 5,
    src: "/images/cards/desastres_do_escritorio.png",
    alt: "Imagem do filme Desastres do Escritório",
    titulo: "Desastres do Escritório",
    categoria: "2D",
    censura: "Livre",
    genero: "Comédia",
    duracao: 85,
  },
  {
    id: 6,
    src: "/images/cards/mestres_do_futuro.png",
    alt: "Imagem do filme Mestres do Futuro",
    titulo: "Mestres do Futuro",
    categoria: "2D",
    censura: "Livre",
    genero: "Documentário",
    duracao: 120,
  },
  {
    id: 7,
    src: "/images/cards/la_Esperanza.png",
    alt: "Imagem do filme La Esperanza",
    titulo: "La Esperanza",
    categoria: "2D",
    censura: "12 anos",
    genero: "Drama",
    duracao: 98,
  },
  {
    id: 8,
    src: "/images/cards/o_nexus_do_tempo.png",
    alt: "Imagem do filme O nexus do tempo",
    titulo: "O nexus do tempo",
    categoria: "3D",
    censura: "10 anos",
    genero: "Ficcção Científica",
    duracao: 105,
  },
];

const SectionFilmes = () => {
  return (
    <main>
      <section className={styles.container}>
        <Fieldset variante="secondary">
          <InputTexto placeholder="Buscar filmes..." />
          <Botao variant="icon">
            <FaSearch />
          </Botao>
        </Fieldset>
        <h1 className={styles.titulo}>
          Em cartaz
        </h1>
        <ListaFilmes filmes={filmes} />
      </section>
    </main>
  );
}

export default SectionFilmes;
