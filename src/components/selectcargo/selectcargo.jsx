
import "../selectcargo/selectcargo.css";
import UrlAxios from '../../urlaxios/axios.js';
import { useEffect, useState } from "react";

export default function SelectCargo({ page, register , id}) {
    const [categoria, setCategoria] = useState([])

    async function handleRequestCategorias() {
        try{  
            const response = await UrlAxios.get('/cargo')

            return setCategoria(response.data)
        }catch (error) {
            console.error("Erro ao criar projeto:", error);
        }
    }

    useEffect(() => {
        handleRequestCategorias()
    }, []);

    return (
        <div>
            <div className="button-text-content">
                {
                categoria.map((item) => (
                    <div className="cat" key={item.codcargo}>
                        <label>
                            <input
                                type="checkbox"
                                value={item.codcargo}
                                {...register("cargoSelect", { required: "Selecione ao menos um cargo" })}
                            />
                            <span>{item.cargo_nome}</span>
                        </label>
                    </div>
                ))
                }
            </div>
        </div>
    );
}
