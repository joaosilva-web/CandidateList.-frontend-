import { ChangeEvent, FormEvent, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from 'react-router-dom';
import * as S from './styles';
import { FaArrowLeft } from "react-icons/fa";

export const CreateCandidateForm = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState<string>()
    const [name, setName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [bornDate, setBornDate] = useState<Date>();
    const [cpf, setCpf] = useState<string>();

    const handleEditEmail = (e:ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

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

      const handleCreateCandidate = async(email: string, nome: string, sobrenome: string, data_nascimento: Date, cpf: string,) => {
        await api.createNewCandidate(email, nome, sobrenome, data_nascimento, cpf);
          alert("Candidato criado com sucesso");
      
      }

      const handleClick = (e: FormEvent<HTMLInputElement>) => {
          if( email && name && lastName && bornDate && cpf) {
           handleCreateCandidate( email, name, lastName, bornDate, cpf );
           alert("Candidato criado com sucesso, você será redirecionado para a página inicial!");
            navigate('/')
          } else {
              alert("Por favor preencha todos os campos!");
            }
      }

      const handleBackClick = () => {
        navigate('/')
      }

    return(
        <S.Cotntent>
          <S.HomeButton onClick={handleBackClick}><FaArrowLeft/></S.HomeButton>
          <S.CreateCandidateForm>
            <h1>Cadastro de Candidato</h1>
            <label>
                <h2>Email</h2>
                <input type="text" onChange={handleEditEmail}/>
            </label>
           <label>
             <h2>Nome</h2>
             <input type="text" onChange={handleEditName}/>
           </label>
           <label>
             <h2>Sobrenome</h2>
             <input type="text" onChange={handleEditLastName}/>
           </label>
           <label>
             <h2>Data de nascimento</h2>
             <input type="date" onChange={handleEditBornDate}/>
           </label>
           <label>
             <h2>CPF</h2>
             <input type="text" onChange={handleEditCpf}/>
           </label>
           <S.InputButton type="submit" bg='success' value="Cadastrar" onClick={(e) => handleClick(e)}/>
         </S.CreateCandidateForm>
        </S.Cotntent>
    );
}