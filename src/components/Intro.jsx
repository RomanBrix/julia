// import IntroImg from '../images/intro.jpg';
import IntroBgImg from '../images/kek2.png';
import Madam from '../images/kek1.png';
import { useEffect } from 'react';


export default function Intro(){
    useEffect(()=>{
        console.log(window.outerWidth)
        if(window.outerWidth < 500){
            const bt = document.getElementById('bottom');
            const childs = bt.childNodes;
            changeClassByTime(childs, 0)
        }
        // eslint-disable-next-line
    },[])
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


                <div className="bottom" id="bottom">
                    <div className="block">Відповідальність за результат</div>
                    <div className="block">Фіксована вартість послуг</div>
                    <div className="block">Гарантія конфіденційності</div>
                </div>
            </div>
        </div>
    )


    async function changeClassByTime(childs, elem){
        const w8 = (ms) => new Promise(resolve => setTimeout(resolve, ms));
        childs[elem].classList.add('active-show');
        await w8(3500);
        childs[elem].classList.remove('active-show');
        await w8(500);

        changeClassByTime(childs, elem + 1 > childs.length -1 ? 0 : elem + 1);
    }
}