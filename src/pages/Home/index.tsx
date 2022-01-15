import * as S from './styles'
import {BsBookmarkPlusFill} from 'react-icons/Bs';
import { ChangeEvent, useContext } from 'react';
import { Context } from '../../contexts/Context';
import { Link, useNavigate } from 'react-router-dom';

interface IHomeProps {
  submit: React.Dispatch<any>;
}

export const Home = ({submit}: IHomeProps) => {
  const navigate = useNavigate()
  const { state, dispatch } = useContext(Context);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'CHANGE',
      payload: {
        email: e.target.value
      }
    })
  };

  const handleClick = () => {
    if(!state.email.email){
      alert('Você deve Digitar um email para poder buscar por um candidato!');
      
    }else{
      navigate('/candidate');
      submit(true);
    }
  }

    return(
        <S.Initial>
         <S.SearchBox>
        <input type="text" onChange={handleEmailChange} placeholder="Search by an email"/>
        <button onClick={handleClick}>Pesquisar</button>
        </S.SearchBox>
        <Link to="/createCandidate"><BsBookmarkPlusFill/> Criar Candidato</Link>
      </S.Initial>
    )
}