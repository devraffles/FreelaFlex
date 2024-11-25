
import "../selectcargo/selectcargo.css";
import UrlAxios from '../../urlaxios/axios.js';
import { useEffect, useState } from "react";


export default function SelectCargoProject({ register , id}) {
    const [categoriaProjeto, setCategoriaProjeto] = useState([])

  

    useEffect(() => {
        async function handleRequestCategoriasProjeto() {
            try{  
                const response = await UrlAxios.get(`/projeto/cargo?codProjeto=${id.id}`)
    
                return setCategoriaProjeto(response.data)
            }catch (error) {
                console.error("Erro ao criar projeto:", error);
            }
        }
        handleRequestCategoriasProjeto()
    }, [setCategoriaProjeto, id]);

    return (
        <div>
            <div className="button-text-content">
                {categoriaProjeto.map((item) => (
                    <div className="cat" key={item.codprojetocargo}>
                        <label>
                            <input type="radio" name="area" value={item.codprojetocargo} 
                            {...register("Codprojetocargo", { required: "Selecione ao menos um cargo" })}
                             />
                            <span>{item.nomecargo}</span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}
