

import "../myprojects/myprojects.css";
import BoxMyProjects from "../../components/boxMyProjects/boxMyProjects";
import { useEffect, useState } from "react";
import UrlAxios from "../../urlaxios/axios";
import { Navigate, useNavigate } from "react-router-dom";
import NotFound from "../notfound/notfound";
export default function MyProjects() {
    const [projetos, setProjetos] = useState([]); 
    const navigate = useNavigate()

    async function fetchProjects() {
        try {
            const response = await UrlAxios.get("/projeto"); 
            setProjetos(response.data); 
        } catch (error) {
            console.error("Erro ao buscar projetos:", error);
        }
    }

    useEffect(() => {
        fetchProjects();
    }, []);
    async function handleDelete(id) {
        setProjetos(projetos.filter(projetos => projetos.codprojeto !== id))

        try{
           await UrlAxios.delete(`/projeto?codProjeto=${id}`)
            navigate("/myprojects")
        }
        catch(error){
            console.error("Erro ao buscar")
        }
    }

    return (
        <>
            {projetos.length === 0 ?
        <NotFound/>
        : (
            <>
            
            <h1>Meus Projetos</h1>
            {projetos.map((projeto) => (
                <BoxMyProjects 
                    key={projeto.codprojeto}
                    page="project" 
                    dados={projeto} 
                    DeleteProject={handleDelete}
                />
            ))}
            </>
        )
    }
        </>
    );
}
