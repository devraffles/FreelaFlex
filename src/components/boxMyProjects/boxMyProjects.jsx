import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import '../boxMyProjects/boxMyProjects.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function BoxMyProjects({page, dados, DeleteProject}) {
    const navigate = useNavigate()
    const dadosProjetoProps = dados
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
            
            <div className="row-projeto-form">
                <div className="descricao-div">
                    {page === "project" ? (<h1>Descrição:</h1>) : (<h1>Detalhes:</h1>)} 
                    <p>{dadosProjetoProps?.descricao}</p>
                </div>
            </div>
            
            <div className="row-projeto-form">
                <div className="habilidades-div">
                    {page === "project" ? (<h1>Habilidade</h1>) : (<h1>Habilidade:</h1>)} 
                    <p>{dadosProjetoProps?.habilidades}</p>
                </div>
            </div>
            
            <div>
                {page === "project" ? (
                    <div className="button-box">
                        
                        <button className="button-edit" 
                        onClick={() => navigate(`/atualiza/projeto/${dados.codprojeto}`)}>
                            Editar
                        </button>

                        <button className="button-delete" onClick={() =>DeleteProject(dadosProjetoProps.codprojeto)}>Deletar</button>
                        <Link to="/myproposals">
                            <button className='button-proposta'>Proposta</button>
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="row-projeto-form">
                            <div className="habilidades-div">
                                <h1>Dados Pessoais:</h1>
                                <p>Nome</p>
                                <p>Telefone</p>
                                <p>E-mail</p>
                            </div>
                        </div>
                        <div className='content-myproposal'>  
                            <div className="card">
                                <h2 className="title-cargo">Cargo</h2>
                                <div className="input-cargos">
                                    <input className="input-cargo" type="text" name="cargo" readOnly />
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
                                        placeholder="XX,XX"
                                    />
                                </div>
                            </div>
                            
                            <div className="card">
                                <h2 className="title-card">Duração estimada</h2>
                                <div className="input-cards">
                                    <h3 className="tipo-input-card">Dias</h3>
                                    <input
                                        className="input-card"
                                        type="date"
                                        name="data"
                                        required
                                        placeholder="XX/XX/XXXX"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row-projeto-form">
                            <div className='box-button-proposal'>
                                <Link> 
                                    <button className='button-proposal'>Aceitar</button>
                                </Link> 
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
