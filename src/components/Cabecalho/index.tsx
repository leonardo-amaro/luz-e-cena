import Logo from "../Logo";
import CabecalhoAcoes from "./components/CabecalhoAcoes";
import CabecalhoFormFiltro from "./components/CabecalhoFormFiltro";
import CabecalhoLinks from "./components/CabecalhoLinks";
import CabecalhoLista from "./components/CabecalhoLista";
import CabecalhoListaItem from "./components/CabecalhoListaItem";

const Cabecalho = () => {
  return (
    <header>
      <CabecalhoLista>
        <CabecalhoListaItem>
          <Logo src="/logo.png" alt="Logo do Luz e Cena." />
        </CabecalhoListaItem>
        <CabecalhoListaItem>
          <CabecalhoLinks />
        </CabecalhoListaItem>
        <CabecalhoListaItem>
          <CabecalhoFormFiltro />
        </CabecalhoListaItem>
        <CabecalhoListaItem>
          <CabecalhoAcoes />
        </CabecalhoListaItem>
      </CabecalhoLista>
    </header>
  );
}

export default Cabecalho;
