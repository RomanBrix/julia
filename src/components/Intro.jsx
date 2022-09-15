// import IntroImg from '../images/intro.jpg';
import IntroBgImg from '../images/kek2.png';
import Madam from '../images/kek1.png';


export default function Intro(){
    return (
        <div className="intro"style={{backgroundImage: `url(${IntroBgImg})`}}>
            <div className="content" >
                <div className="bgImg">
                    <img src={Madam} alt="" />
                </div>
                <div className="top">
                    <div className="block">
                        <div className="left">
                            Адвокат
                        </div>
                        <div className="right">
                        Балюк Юлія Олексійвна
                        </div>
                    </div>
                </div>

                <div className="center">
                    <h1>Ваші проблеми мають рішення</h1>
                    <p>Професійні юридичні послуги для фізичних та юридичних осіб</p>
                    <button>Отримати консультацію</button>
                </div>


                <div className="bottom">
                    <div className="block">Відповідальність за результат</div>
                    <div className="block">Фіксована вартість послуг</div>
                    <div className="block">Гарантія конфіденційності</div>
                </div>
            </div>
        </div>
    )
}