import "../myproposals/proposals.css"
import BoxMyProjects from "../../components/boxMyProjects/boxMyProjects"
import { useParams } from "react-router-dom"
import { useState } from "react"
import UrlAxios from "../../urlaxios/axios"
import { useNavigate } from "react-router-dom"
export default function MyProposal() {
    const navigate = useNavigate()
    const [proposta, setProposta] = useState([])

    const parms = useParams()
    async function handleDeleteProposta(id) {
        setProposta(proposta.filter(proposta => proposta.codproposta !== id))
        try{
           await UrlAxios.delete(`/proposta?codProposta=${id}`)
            navigate("/myprojects")
        }
        catch(error){
            console.error("Erro ao buscar")
        }
    }
    return(

        <BoxMyProjects id={parms} DeletaProposta={handleDeleteProposta}/>    
    )
}