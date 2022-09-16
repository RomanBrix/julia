import {ReactComponent as Clock} from '../images/clock.svg';
import {ReactComponent as Chat} from '../images/chat.svg';
import {ReactComponent as Location} from '../images/location.svg';
import {ReactComponent as Phone} from '../images/phone.svg';



export default function Contacts() {
    

    return (
        <div className="contacts">
            <div className="content">
                <div className="left">
                    <h1>Контакти</h1>
                    <div className="contact">

                        <div className="block">
                            <div className="img">
                                <Clock/>
                            </div>
                            <div className="text">
                                <div className="top">Пн-Пт </div>
                                <div className="bottom">8:00 - 18:00</div>
                            </div>
                        </div>

                        <div className="block">
                            <div className="img">
                                <Location/>
                            </div>
                            <div className="text">
                                <div className="top">м. Київ Печерский район</div>
                                <div className="bottom">вул. Московська 5</div>
                            </div>
                        </div>

                        <div className="block">
                            <div className="img">
                                <Phone/>
                            </div>
                            <div className="text">
                                <div className="top"><a href="tel:380987890987">098 789 09 87</a></div>
                                <div className="bottom"><a href="tel:380934567898">093 456 78 98</a></div>
                            </div>
                        </div>


                        <div className="block">
                            <div className="img">
                                <Chat/>
                            </div>
                            <div className="text">
                                <div className="top"><a href="https://www.instagram.com/" rel="noreferrer" target='_blank'>Instagram</a></div>
                                <div className="bottom"><a href="https://www.facebook.com/" rel="noreferrer" target='_blank'>Facebook</a></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="right">
                        <h1>Вирішую питання будь-якої складності</h1>
                        <p>Запишіться на косультацію та отримайте попередній план вирішення цього питання.</p>
                        <h2>Записатись на консультацію</h2>
                        <div className="form">
                            <input type="text" placeholder='Ім’я' name='name' />
                            <input type="text" name="phone" placeholder="Телефон"/>

                            <button className="secondary">Відправити</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}