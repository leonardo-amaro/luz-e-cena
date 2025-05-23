import Banner from "./components/Banner";
import Cabecalho from "./components/Cabecalho";
import SectionFilmes from "./components/SectionFilmes";

function App() {
  return (
    <>
      <Cabecalho />
      <Banner src="/images/banner.png" alt="Banner do Luz e Cena" />
      <SectionFilmes />
    </>
  );
}

export default App;
