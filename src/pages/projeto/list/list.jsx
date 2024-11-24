import './list.css';
import ListProject from '../../../components/ListProject/ListProject';
import { useEffect, useState } from "react";
import UrlAxios from '../../../urlaxios/axios';
import { useNavigate, Navigate } from 'react-router-dom';
import NotFound from '../../notfound/notfound';


export default function List({dados}) {
    const navigate = useNavigate()
    const [projetos, setProjetos] = useState([]);
    async function GetProjects() {
        try {
            const response = await UrlAxios.get("/projeto"); 
            setProjetos(response.data); 
        } catch (error) {
            console.error("Erro ao buscar projetos:", error);
        }
    }

    useEffect(() => {
        GetProjects();
    }, []);
    return (
<>

<main className="main-projeto-list">
        {projetos.length === 0 ?
        <NotFound/>
        : (
        <ListProject dados={projetos}/>
        )
        }
</main>
</>

    );
}