import { useContext, useEffect, useState } from "react"
import { PutForm } from "../../components/PutForm/";
import { Context } from "../../contexts/Context";
import { api } from "../../services/api";
import { Candidate } from "../../types/candidate";
import {FaTimes, FaEdit, FaArrowLeft} from 'react-icons/fa';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import * as S from './styles'


export const CandidatePage = () => {
  const navigate = useNavigate()
    const [candidate, setCandidate] = useState<Candidate>(Object);
    const [onEdit, setOnEdit] = useState(false);
    const { state, dispatch } = useContext(Context);

    useEffect(() => {
        console.log(state.email.email)
        if(state.email.email){
          const loadCandidate = async () => {
            let response = await api.findOneCandidate(state.email.email);
            console.log(state.email.email)
            setCandidate(response);
          };
          loadCandidate()
        }
      }, [])

      const handleDelete = () => {
        api.deleteOneCandidate(candidate.email);
        alert("Usuário Deletado com sucesso, você será redirecionado para a página inicial!")
        navigate(-1);
      }

      const handleEdit = () => {
       onEdit?
       setOnEdit(false)
       :
       setOnEdit(true)
      }

      const handleBackClick = () => {
        navigate('/')
      }

    return(
        <div>
            {candidate &&
                <S.Candidate>
                  <S.HomeButton onClick={handleBackClick}><FaArrowLeft/></S.HomeButton>
                  <S.CandidateCard>
                    <h1>{candidate?.nome} {candidate?.sobrenome}</h1>
                    <h2>E-mail: {candidate?.email}</h2>
                    <h2>CPF: {candidate?.cpf}</h2>
                    <h2>Data de nascimento: {candidate?.data_nascimento}</h2>
                    <h2>Data de Cadastro: {candidate?.data_criacao}</h2>
                    <h2>Data de Atualização: {candidate?.data_atualizacao}</h2>
                    <S.Actions>
                    <S.Btn bg={'normal'} onClick={handleEdit}><p>Editar</p><FaEdit/></S.Btn>
                    <S.Btn bg={'danger'} onClick={handleDelete}><p>Deletar</p><FaTimes/></S.Btn>
                    </S.Actions>
                </S.CandidateCard>
                </S.Candidate>
            }
            {candidate && onEdit &&
              <PutForm candidate={candidate} onClose={setOnEdit}/>
            }
            {!candidate &&
                <S.Error>
                  <h1>Usuario não encontrado...</h1>
                  <h2>Por favor tente novamente ou crie um candidato</h2>
                  <Link to="/">Tentar novamente</Link>
                  <Link to="/createCandidate">Criar candidato</Link>
                </S.Error>
            }
        </div>
    )
}