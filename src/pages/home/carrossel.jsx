import programmingPic from '../../assets/img/slider/programming-pic.jpg';
import audioPic from '../../assets/img/slider/audio-pic.jpg';
import marketingPic from '../../assets/img/slider/marketing-pic.jpg';
import videoPic from '../../assets/img/slider/video-pic.jpg';
import buildingPic from '../../assets/img/slider/bulding-pic.jpg';

export default function Carrossel() {
    return (       
        <div class="pic-ctn">
            <img src={programmingPic} alt="Programming" className="pic" />
            <img src={audioPic} alt="Audio" className="pic" />
            <img src={marketingPic} alt="Marketing" className="pic" />
            <img src={videoPic} alt="Video" className="pic" />
            <img src={buildingPic} alt="Building" className="pic" />
        </div>
    );
}