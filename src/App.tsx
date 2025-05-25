import Banner from "./components/Banner";
import Cabecalho from "./components/Cabecalho";
import Newsletter from "./components/Newsletter";
import Rodape from "./components/Rodape";
import SectionFilmes from "./components/SectionFilmes";

function App() {
  return (
    <>
      <Cabecalho />
      <Banner src="/images/banner.png" alt="Banner do Luz e Cena" />
      <SectionFilmes />
      <Newsletter />
      <Rodape />
    </>
  );
}

export default App;
