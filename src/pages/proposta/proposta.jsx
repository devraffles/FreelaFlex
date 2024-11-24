import './proposta.css'

export default function Proposta() {
    return (
        <main className="main-proposta-form" data-aos="fade-up" data-aos-duration="2000">
            <h1>Nome do Projeto</h1>
            <form action="https://webhook.site/33b53b1b-040b-4860-bcf4-2cb3c4700b9e" method="post">
                <div className="content-proposta">
                    <div className="row-card">
                        <div className="inputs-content">
                            <div className="card">
                                <h2 className="title-card">Sua Oferta</h2>
                                <div className="input-cards">
                                    <h3 className="tipo-input-card">R$</h3>
                                    <input className="input-card" type="number" name="price" required  placeholder="XX,XX"/>
                                </div>
                            </div>
                            <div className="card">
                                <h2 className="title-card">Duração estimada</h2>
                                <div className="input-cards">
                                    <h3 className="tipo-input-card">Dias</h3>
                                    <input className="input-card" type="date" name="data" required placeholder="XX/XX/XXXX"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-card">
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
                    </div>
                    <div className="row-card">
                        <div className="card">
                            <div className="card-text">
                                <h2 className="title-card">Dados Pessoais</h2>
                                <div className="input-text-content">
                                    <input className="input-text" name="name" type="text" required placeholder="Nome"/>
                                    <input className="input-text"  name="phone" type="tel" maxlength="19" pattern="+\d{2} \(\d{2}\) \d{4,5}-\d{4}" required placeholder="Telefone"/>
                                    <input className="input-text"  name="email" type="email" required placeholder="Email"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-card">
                        <div className="card">
                            <div className="card-text">
                                <h2 className="title-card">Detalhes</h2>
                                <div className="input-text-content">
                                    <textarea rows="5" cols="120" name="detalhes" required placeholder="Detalhes de como vai ser feito o projeto"></textarea>
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