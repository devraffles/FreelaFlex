import './notfound.css';
import { ReactComponent as NotFoundPic } from '../../assets/img/notfound/notfoundimg.svg';

export default function NotFound() {
    return(
        <main>
            <NotFoundPic class="notfoundpic" data-aos="zoom-out-left" data-aos-duration="2000"/>
        </main>
    );
}