
import { useInView } from 'react-hook-inview';
import IamImg from '../images/iam.png';
import {ReactComponent as Line} from '../images/Line.svg';



export default function About() {
    
    const [line, isLineVisible] =useInView({
        threshold: 1,
      });
    return(

        <>
            <div className="about">
                <div className="content" ref={line} >
                    <div className={`line ${isLineVisible && 'drawLine'}`}>
                        <Line />
                    </div>
                    <div className="left">
                        <h1>Про мене</h1>
                        <p>
                            Для мене юриспруденція та адвокатура – це життя, а не просто бізнес, де для мене люди, які звертаються до мене за допомогою не просто Клієнти, а мої Друзі! Я ніколи не уявляла та не уявляю себе в іншій сфері діяльності! Потрібно бути по-справжньому закоханим у свою роботу та отримувати від неї справжнє задоволення.
                        </p>
                        <button className="secondary">Більше інформації</button>
                    </div>
                    <div className="right">
                        <img src={IamImg} alt="IamImg" />
                    </div>
                </div>
            </div>

            <div className="about-plus">
                <div className="content">
                    <div className="block">
                        <div className="head">20 </div>
                        <div className="text">років досвіду</div>
                    </div>
                    <div className="block">
                        <div className="head">96%</div>
                        <div className="text">виграних справ</div>
                    </div>
                    <div className="block">
                        <div className="head">100+</div>
                        <div className="text">закінчених справ щорічно</div>
                    </div>
                </div>
            </div>
        </>
    )
}