import './formComponent.css';
import { useNavigate } from 'react-router-dom';
import SelectCargo from '../selectcargo/selectcargo.jsx';
import UrlAxios from '../../urlaxios/axios.js';
import { useEffect, useState } from "react";

export default function FormComponent({ funcformSub, funcformCreat, funcformUpdate, id, registroCargo, registrarInput, page, ActionUpdate}) {
    const navigate = useNavigate();

    function FromMyProjects() {
        navigate("/myprojects");
    }

    const [projeto, setProjeto] = useState([])

    useEffect(() => {
        async function handleGetProjeto() {
            try{  
                console.log(id.id);
                const response = await UrlAxios.get(`/projeto?codProjeto=${id.id}`)
                console.log("response:", response.data);
                return setProjeto(response.data)
            }catch (error) {
                console.error("Erro ao carrgar projeto:", error);
            }
        }
        handleGetProjeto()
    },[setProjeto, id]);

    return (
        page === "Create" ? (
            <>
                <main className="main-projeto-form">
                    <form onSubmit={funcformSub(funcformCreat)}>
                        <section className="section-projeto-form" data-aos="fade-right" data-aos-duration="2000">
                            <div className="row-projeto-form">
                                <div className="nome-proj">
                                    <input
                                        className="input-text"
                                        type="text"
                                        id="txtNomeProjeto"
                                        name="nomeProjeto"
                                        required
                                        placeholder="Nome do Projeto"
                                        {...registrarInput("NameProject", { required: 'Nome obrigatorio' })}
                                    />
                                </div>
                            </div>
                            <div className="row-projeto-form">
                                <div className="descricao-div">
                                    <h1>Descrição:</h1>
                                    <div className="descricao">
                                        <input
                                            id="txtDescricao"
                                            name="txtDescricao"
                                            className="input-text-area"
                                            type="text"
                                            required
                                            placeholder="Descrição..."
                                            {...registrarInput("Description", { required: 'descrição obrigatorio' })}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row-projeto-form">
                                <div className="habilidades-div">
                                    <h1>Habilidades:</h1>
                                    <div className="habilidades">
                                        <input
                                            id="txtHabilidades"
                                            name="txtHabilidades"
                                            className="input-text-area"
                                            type="text"
                                            required
                                            placeholder="Habilidades..."
                                            {...registrarInput("Activies", { required: 'Habilidade obrigatorio' })}
                                        />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-projeto-form" data-aos="fade-left" data-aos-duration="2000">
                            <h1>Selecione as categorias do projeto</h1>
                            <div className="row-projeto-form">
                                <div className="card">
                                    <SelectCargo register={registroCargo} />
                                </div>
                            </div>
                            <div className="row-btn">
                                <button className="btn-form-proposta" type="submit">
                                    Publicar
                                </button>
                            </div>
                        </section>
                    </form>
                    <button
                        className="btn-form-proposta btn-meus-projetos"
                        type="button"
                        data-aos="fade-up"
                        data-aos-duration="2000"
                        onClick={FromMyProjects}
                    >
                        Meus Projetos
                    </button>
                </main>
            </>
        ) : (
            <form onSubmit={funcformSub(funcformUpdate)}>
                <section className="section-projeto-form" data-aos="fade-right" data-aos-duration="2000">
                    <div className="row-projeto-form">
                        <div className="nome-proj">
                            <input
                                className="input-text"
                                type="text"
                                id="txtNomeProjeto"
                                name="nomeProjeto"
                                required
                                placeholder={projeto[0]?.nome}
                                {...registrarInput("NameProject", { required: 'Nome obrigatorio' })}
                            />
                        </div>
                    </div>
                    <div className="row-projeto-form">
                        <div className="descricao-div">
                            <h1>Descrição:</h1>
                            <div className="descricao">
                                <input
                                    id="txtDescricao"
                                    name="txtDescricao"
                                    className="input-text-area"
                                    type="text"
                                    required
                                    placeholder={projeto[0]?.descricao}
                                    {...registrarInput("Description", { required: 'descrição obrigatorio' })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row-projeto-form">
                        <div className="habilidades-div">
                            <h1>Habilidades:</h1>
                            <div className="habilidades">
                                <input
                                    id="txtHabilidades"
                                    name="txtHabilidades"
                                    className="input-text-area"
                                    type="text"
                                    required
                                    placeholder={projeto[0]?.habilidades}
                                    {...registrarInput("Activies", { required: 'Habilidade obrigatorio' })}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row-btn">
                            </div>
                </section>
                <section className="section-projeto-form" data-aos="fade-left" data-aos-duration="2000">
                            <h1>Selecione as categorias do projeto</h1>
                            <div className="row-projeto-form">
                                <div className="card">
                                    <SelectCargo register={registroCargo} />
                                </div>
                            </div>
                        
                            <div className="row-btn">
                                <button className="btn-form-proposta" type="submit">
                                    Alterar
                                </button>
                            </div>
                </section>
            </form>
        )
    );
}
