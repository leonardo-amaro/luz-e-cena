import Banner from "./components/Banner";
import Cabecalho from "./components/Cabecalho";
import Link from "./components/Link";

function App() {
  return (
    <>
      <Cabecalho />
      <Banner src="/images/banner.png" alt="Banner do Luz e Cena" />
      <Link href="/" target="_blank">Link</Link>
    </>
  );
}

export default App;
