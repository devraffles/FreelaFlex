import '../../pages/projeto/list/list.css'
import { useNavigate } from 'react-router-dom'

export default function ListProject({dados}) {
    const navigate = useNavigate()
    return(
        <>
        {dados.map((item)=>(

                <section className="section-projeto-list" key={item.codprojeto}>
                        <div className="projeto-list"  data-aos="fade-left" data-aos-duration="2000">
                            <div className="projetos">
                                <div className="row-projeto-list">
                                    <div className="nome-proj-list">
                                        <h1>{item.nome}</h1>
                                    </div>
                                    
                                </div>
                                <div className="row-projeto-list">
                                    <div className="descricao-div">
                                        <h1 className='text-start'>Descrição:</h1>
                                        <p>{item.descricao}</p>
                                    </div>
                                </div>
                                <div className="row-projeto-list">
                                    <div className="habilidades-div">
                                        <h1 className='text-start'>Habilidades:</h1>
                                        <p>{item.habilidades}</p>
                                    </div>
                                </div>
                                <div className="row-btn-projeto">
                                        <button className="btn-list-projeto" onClick={() =>navigate(`/proposta/${item.codprojeto}`)}>
                                            Fazer proposta
                                        </button>  
                                </div>
                            </div>
                        </div>
                </section>
        ))}
        </>

    )
}