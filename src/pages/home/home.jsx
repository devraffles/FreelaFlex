import './home.css';
import { ReactComponent as HomeIMG } from "../../assets/img/home/homeIMG.svg"
import Carrossel from "./carrossel"
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <main class="main-content">
            <section class="row-home">
                <article class="text-button" data-aos="zoom-out-right" data-aos-duration="2000">
                    <div class="div-Main-Title">
                        <div class="underline-home"></div>
                        <div>
                            <h3 class="title-main">Você precisa contratar um Freelance? É fácil, rápido e seguro</h3>
                            <p class="p-main">Entregas no prazo e qualidade garantidas na FreelaFlex, o maior site freelancer do mundo.</p>
                        </div>
                    </div>
                    <div class="buttons-home">
                        <Link to="/projeto"><button class="btn-blue">Eu quero trabalhar</button></Link>
                        <Link to="/criar/projeto"><button class="btn-white">Você quer contratar?</button></Link>
                    </div>
                </article>
                <aside data-aos="zoom-out-left" data-aos-duration="2000">
                    <HomeIMG class="home-img" alt="homeIMG"/>
                </aside>
            </section>
            <section class="row-home" data-aos="fade-up" data-aos-duration="3000">
                <aside>
                    <div>
                        <Carrossel/>
                    </div>
                </aside>
                <article class="text-button">
                    <div class="div-Main-Title">
                        <div class="underline-home2"></div>
                        <div>
                            <h3 class="title-main">Serviços</h3>
                            <p class="p-main">Encontre freelancers qualificados para diversos serviços, desde design gráfico e desenvolvimento web até redação e marketing digital. Soluções sob medida, entregues com qualidade e no prazo.</p>    
                        </div>
                    </div>
                </article>  
            </section>
        </main>
    );
}