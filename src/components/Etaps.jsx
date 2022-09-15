
import EtapImg from '../images/etaps.jpg';



export default function Etaps() {
    return(
        <div className="etaps about">
            <div className="content">
                <h1>Етапи роботи</h1>

                <div className="left">
                    <div className="block">
                        <div className="number">1</div>
                        <div className="text">
                            <div className="head">Зустріч</div>
                            <div className="info">Ми обговорюємо Вашу проблему</div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="number">2</div>
                        <div className="text">
                            <div className="head">Дослідження проблеми</div>
                            <div className="info">Детально аналізую матеріали Вашої справи</div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="number">3</div>
                        <div className="text">
                            <div className="head">Переговори</div>
                            <div className="info">Обговорюю з Вами стратегію захисту в судді</div>
                        </div>
                    </div>

                    <div className="block">
                        <div className="number">4</div>
                        <div className="text">
                            <div className="head">Захист у суді</div>
                            <div className="info">Представляю Ваші інтереси у судовому процесі</div>
                        </div>
                    </div>

                    
                </div>

                <div className="right">
                    <img src={EtapImg} alt="EtapImg" />
                </div>
            </div>
        </div>
    )
}