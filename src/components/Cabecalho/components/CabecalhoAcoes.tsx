import { HiOutlineShoppingCart, HiOutlineUser } from 'react-icons/hi';
import Botao from '../../Botao';

const CabecalhoAcoes = () => {
  return (
    <div>
      <Botao variant='icon'>
        <HiOutlineShoppingCart />
      </Botao>
      <Botao variant='icon'>
        <HiOutlineUser />
      </Botao>
    </div>
  );
}

export default CabecalhoAcoes;
