import FormComponent from "../../../../components/createProject/formComponent"
import { useParams } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import UrlAxios from "../../../../urlaxios/axios"
import { useForm } from "react-hook-form"
export default function AtualizarProjeto() {

    const params = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit} = useForm()

    async function handleUpdate(data) {
        try{  
            const formattedData = {
                codprojeto: params.id,
                nome: data.NameProject,
                descricao: data.Description,
                habilidades: data.Activies,
                cargos: data.cargoSelect,
            };
            console.log("data a enviar", formattedData );
            const response = await UrlAxios.put('/projeto', formattedData)
            console.log("Projeto criado com sucesso:", response.data);
            navigate("/myprojects", { state: response.data });
        }catch (error) {
            console.error("Erro ao criar projeto:", error);
        }
    }

   
    
    return(<>
    <h1>Editar Projeto</h1>
    <FormComponent funcformSub={handleSubmit} funcformUpdate={handleUpdate} registroCargo={register} registrarInput={register} id={params}/>
    </>

      
    )
}