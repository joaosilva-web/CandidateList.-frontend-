import { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../../services/api";
import { Candidate } from "../../types/candidate";
import { useNavigate } from 'react-router-dom'
import * as S from './styles'

interface IPutFormProps {
    candidate: Candidate;
    onClose: React.Dispatch<any>
}

export const PutForm = ({candidate, onClose}: IPutFormProps) => {
  const navigate = useNavigate()
    const [name, setName] = useState<string>(candidate.nome);
    const [lastName, setLastName] = useState<string>(candidate.sobrenome);
    const [bornDate, setBornDate] = useState<Date>(candidate.data_nascimento);
    const [cpf, setCpf] = useState<string>(candidate.cpf);


    const handleEditName = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
      }
      const handleEditLastName = (e:ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
      }
      const handleEditBornDate = (e:ChangeEvent<HTMLInputElement>) => {
        setBornDate(new Date(e.target.value));
      }
      const handleEditCpf = (e:ChangeEvent<HTMLInputElement>) => {
        setCpf(e.target.value);
      }

      const handleEditCandidate = async(email: string, nome: string, sobrenome: string, data_nascimento: Date, cpf: string,) => {
        await api.editOneCandidate(email, nome, sobrenome, data_nascimento, cpf);
      }

      const handleEditClick = (e: FormEvent<HTMLInputElement>) => {
          e.preventDefault();
          if(candidate.email && name && lastName && bornDate && cpf) {
            handleEditCandidate(candidate.email, name, lastName, bornDate, cpf);
            alert("Candidato editado com sucesso, você séra redirecionado para a página inicial!");
            navigate('/');
          } else {
              alert("Por favor preencha todos os campos!");
          }

      }

      const handleCloseClick = () => {
        onClose(false);
      }

    return(
      <S.Cotntent onClick={handleCloseClick}>
        <S.PutForm>
            <h1>Editando: {candidate.email}</h1>
           <label>
             <h2>Nome</h2>
             <input type="text" value={name} onChange={handleEditName}/>
           </label>
           <label>
             <h2>Sobrenome</h2>
             <input type="text" value={lastName} onChange={handleEditLastName}/>
           </label>
           <label>
             <h2>Data de nascimento</h2>
             <input type="date" value={bornDate.toString()} onChange={handleEditBornDate}/>
           </label>
           <label>
             <h2>CPF</h2>
             <input type="text" value={cpf} onChange={handleEditCpf}/>
           </label>
           <S.InputButton type="submit" bg={'normal'} onClick={(e) => handleEditClick(e)}/>
           <S.Btn className="close" type="button" color={'danger'} onClick={(e) => handleCloseClick()}>
             X
             </S.Btn>
         </S.PutForm>
      </S.Cotntent>
    );
}