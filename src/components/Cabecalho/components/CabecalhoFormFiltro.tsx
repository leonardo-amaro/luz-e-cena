import Grupo from "../../Seletor/Grupo";
import Opcao from "../../Seletor/Opcao";
import { FaLocationDot } from "react-icons/fa6";

const cidades = [
    { id: 1, nome: "São Paulo" },
    { id: 2, nome: "Rio de Janeiro" },
    { id: 3, nome: "Belo Horizonte" },
    { id: 4, nome: "Curitiba" },
    { id: 5, nome: "Porto Alegre" },
];

const CabecalhoFormFiltro = () => {
  return (
    <form>
      <Grupo id="cidade" icone={ <FaLocationDot /> }>
        <Opcao value="" label="Escolha sua cidade..." />
        {cidades.map((item) => (
          <Opcao 
            key={item.id} 
            value={item.nome} 
            label={item.nome} 
          />
        ))}
      </Grupo>
    </form>
  );
}

export default CabecalhoFormFiltro;
