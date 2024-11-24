
import { useForm } from 'react-hook-form';
import UrlAxios from '../../../urlaxios/axios';
import FormComponent from '../../../components/createProject/formComponent';
import { useNavigate } from 'react-router-dom';
export default function Projeto() {

    const navigate = useNavigate()
    const { register, handleSubmit, formState:{ errors }} = useForm()

    const handleCreatPost = async (data) => {
        try{  
            const formattedData = {
                nome: data.NameProject,
                descricao: data.Description,
                habilidades: data.Activies,
                cargos: data.cargoSelect,
        };
        const response = await UrlAxios.post('/projeto', formattedData)
        console.log("Projeto criado com sucesso:", response.data);
        navigate("/myprojects", { state: response.data });
    }catch (error) {
        console.error("Erro ao criar projeto:", error);
    
    }

};


    return (
        <>
        <FormComponent funcformSub={handleSubmit} funcformCreat={handleCreatPost} registroCargo={register} registrarInput={register} page="Create"/>
        </>
       
    );
}