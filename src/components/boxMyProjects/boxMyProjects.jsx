import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import '../boxMyProjects/boxMyProjects.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from 'react';
import UrlAxios from '../../urlaxios/axios';
import NotFound from '../../pages/notfound/notfound';


export default function BoxMyProjects({page, dados, DeleteProject,DeletaProposta,id}) {
    const navigate = useNavigate()
    const dadosProjetoProps = dados

    const [proposta, setProposta] = useState([])

    useEffect(() => {
        async function handlePropostaProjeto() {
            try{  
                const response = await UrlAxios.get(`/proposta/projeto?codProjeto=${id.id}`)
    
                return setProposta(response.data)
            }catch (error) {
                console.error("Erro ao criar projeto:", error);
            }
        }
        handlePropostaProjeto()
        
    }, [setProposta, id]);

    return (
        <section className="section-projeto-form" data-aos="fade-right" data-aos-duration="2000">
            <div className="row-projeto-form">
                <h1>{dadosProjetoProps?.nome}</h1>
                {page === "project" ? 
                    (
                        <div className="qtd-frela">
                            <span id="spnQtdFreela" className="show">
                                X
                            </span>
                            <FontAwesomeIcon icon={faUser} size="2x" />
                        </div>
                    )
                    :
                    (
                        <div className="qtd-frela">
                        </div>
                    )
                }
                
            </div>
            
            {
                page === "project" ? (
                    <>
                        <div className="row-projeto-form">
                            <div className="descricao-div">
                                {page === "project" ? (<h1>Descrição:</h1>) : (<h1></h1>)} 
                                <p>{dadosProjetoProps?.descricao}</p>
                            </div>
                            </div>
                            
                            <div className="row-projeto-form">
                                <div className="habilidades-div">
                                    {page === "project" ? (<h1>Habilidade</h1>) : (<h1></h1>)} 
                                    <p>{dadosProjetoProps?.habilidades}</p>
                                </div>
                        </div>
                    </>
                ) : (
                    <>
                    </>
                )
            }
            <div>
                {page === "project" ? (
                    <div className="button-box">
                        
                        <button className="button-edit" 
                        onClick={() => navigate(`/atualiza/projeto/${dados.codprojeto}`)}>
                            Editar
                        </button>

                        <button className="button-delete" onClick={() =>DeleteProject(dadosProjetoProps.codprojeto)}>Deletar</button>
                        
                        <button className='button-proposta' onClick={() => navigate(`/myproposals/${dadosProjetoProps.codprojeto}`)}>Proposta</button>
                        
                    </div>
                ) : (
                    <>
                        {proposta.length === 0 ? (
                            <NotFound/>
                        ) : (
                            <>
                                {proposta.map((item) =>(
                                    <>

                                    <div className="row-projeto-form">
                                    <div className="descricao-div">
                                            <h1>Detalhes:</h1>
                                            <p>{item?.descricao}</p>
                                        </div>
                                    </div>
                                    <div className="row-projeto-form">
                                        <div className="habilidades-div">
                                            <h1>Dados Pessoais:</h1>
                                            <p>{item.nome}</p>
                                            <p>{item.telefone}</p>
                                            <p>{item.email}</p>
                                        </div>
                                    </div>
                                    <div className='content-myproposal'>  
                                        <div className="card">
                                            <h2 className="title-cargo">Cargo</h2>
                                            <div className="input-cargos">
                                                <input className="input-cargo" placeholder={item.nomecargo} type="text" name="cargo" readOnly />
                                            </div>
                                        </div>
                                            
                                        <div className="card">
                                            <h2 className="title-card">Sua Oferta</h2>
                                            <div className="input-cards">
                                                <h3 className="tipo-input-card">R$</h3>
                                                <input
                                                    className="input-card"
                                                    type="number"
                                                    name="price"
                                                    required
                                                    placeholder={item.oferta}
                                                />
                                            </div>
                                        </div>
                                        
                                        <div className="card">
                                            <h2 className="title-card">Duração estimada</h2>
                                            <div className="input-cards">
                                                <h3 className="tipo-input-card">Dias</h3>
                                                <input
                                                    className="input-card"
                                                    type="text"
                                                    name="data"
                                                    required
                                                    placeholder={item.duracao_estimada}
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row-projeto-form">
                                        <div className='box-button-proposal'>
                                            
                                                <button className='button-proposal' onClick={() =>DeletaProposta(item.codproposta)}>Aceitar</button>
                                        
                                        </div>
                                    </div>
                                    </>
                                ))}
                            </>
                        )}
                    </>
                )}
            </div>
        </section>
    );
}
