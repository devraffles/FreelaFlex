import './proposta.css'
import { useNavigate, useParams } from 'react-router-dom';
import SelectCargoProject from '../../components/selectcargoProject/SelectCargoProject';
import { useForm } from 'react-hook-form';
import UrlAxios from '../../urlaxios/axios';


export default function Proposta() {
    const { register, handleSubmit} = useForm()
    const id = useParams()
    const navigate = useNavigate()
    const handleCreatProposta = async (data) => {
        try{  
            const formattedData = {
                oferta: data.Oferta,
                descricao: data.Descricao,
                duracao_estimada: data.Duracao_estimada,
                codprojetocargo: data.Codprojetocargo, 
                codprojeto: id.id,
                nome: data.Nome, 
                email: data.Email, 
                telefone: data.Telefone, 
        };
        const response = await UrlAxios.post('/proposta', formattedData)
        console.log("proposta criado com sucesso:", response.data);
        navigate("/", { state: response.data });
    }catch (error) {
        console.error("Erro ao criar proposta:", error);
    
    }

};
    return (
        <main className="main-proposta-form" data-aos="fade-up" data-aos-duration="2000">
            <h1>Nome do Projeto</h1>
            <form onSubmit={handleSubmit(handleCreatProposta)}>
                <div className="content-proposta">
                    <div className="row-card">
                        <div className="inputs-content">
                            <div className="card">
                                <h2 className="title-card">Sua Oferta</h2>
                                <div className="input-cards">
                                    <h3 className="tipo-input-card">R$</h3>
                                    <input className="input-card" type="number" name="price" required  placeholder="XX,XX" {...register("Oferta")}/>
                                </div>
                            </div>
                            <div className="card">
                                <h2 className="title-card">Duração estimada</h2>
                                <div className="input-cards">
                                    <h3 className="tipo-input-card">Dias</h3>
                                    <input className="input-card" type="number" name="data" required placeholder="Ex: 2"{...register("Duracao_estimada")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <SelectCargoProject id={id} register={register}/>
                    {/* <div className="row-card">
                        <div className="card">
                            <h2 className="title-card">Cargo</h2>
                            <div className="button-text-content">
                                <div className="cat">
                                    <label>
                                       <input type="radio" name="area" value="Design e Multimedia"/><span>Design e Multimedia</span> 
                                    </label>
                                </div>
                                <div className="cat">
                                    <label>
                                       <input type="radio" name="area" value="Tradução e conteúdos"/><span>Tradução e conteúdos</span> 
                                    </label>
                                </div>
                                <div className="cat">
                                    <label>
                                       <input type="radio" name="area" value="Marketing e Vendas"/><span>Marketing e Vendas</span> 
                                    </label>
                                </div>
                                <div className="cat">
                                    <label>
                                       <input type="radio" name="area" value="Jurídico"/><span>Jurídico</span> 
                                    </label>
                                </div>
                            </div>
                            <div className="button-text-content">
                                <div className="cat">
                                    <label>
                                       <input type="radio" name="area" value="Finanças e Administração"/><span>Finanças e Administração</span> 
                                    </label>
                                </div>
                                <div className="cat">
                                    <label>
                                       <input type="radio" name="area" value="Engenharia e Manufatura"/><span>Engenharia e Manufatura</span> 
                                    </label>
                                </div>
                                <div className="cat">
                                    <label>
                                       <input type="radio" name="area" value="TI e Programação"/><span>TI e Programação</span> 
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>  */}
                    <div className="row-card">
                        <div className="card">
                            <div className="card-text">
                                <h2 className="title-card">Dados Pessoais</h2>
                                <div className="input-text-content">
                                    <input className="input-text" name="name" type="text" required placeholder="Nome" {...register("Nome")}/>
                                    <input className="input-text"  name="phone" type="tel" maxlength="19" pattern="+\d{2} \(\d{2}\) \d{4,5}-\d{4}" required placeholder="Telefone" {...register("Telefone")}/>
                                    <input className="input-text"  name="email" type="email" required placeholder="Email" {...register("Email")}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-card">
                        <div className="card">
                            <div className="card-text">
                                <h2 className="title-card">Detalhes</h2>
                                <div className="input-text-content">
                                    <textarea rows="5" cols="120" name="detalhes" required placeholder="Detalhes de como vai ser feito o projeto" {...register("Descricao")}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-text">
                            <button className="btn-form-proposta" type="submit">
                                Enviar proposta
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </main>
    );
}