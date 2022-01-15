import axios from "axios";

const baseURL = `http://localhost:4000/api`;

export const api = {
    findOneCandidate: async (email: string) => {
        let response = await axios.get(`${baseURL}/candidate/${email}`)
        return response.data.candidate;
    },
    editOneCandidate: async (email: string, nome: string, sobrenome: string, data_nascimento: Date, cpf: string) => {
            const newData = {
                email,
                nome,
                sobrenome,
                data_nascimento,
                cpf 
            }
            console.log(newData)
                await axios.put(`${baseURL}/candidate/${email}`, newData
            ).then((data) => {
                console.log(data)
            }).catch((err) => {
                console.log(err)
            })
    },
    createNewCandidate: async (email: string, nome: string, sobrenome: string, data_nascimento: Date, cpf: string) => {
        let response = await axios.post(`${baseURL}/candidate`, {
            email,
            nome,
            sobrenome,
            data_nascimento,
            cpf
        })
        return response.data;
    },
    deleteOneCandidate: async( email: string) => {
        await axios.delete(`${baseURL}/candidate/${email}`) 
    }
}