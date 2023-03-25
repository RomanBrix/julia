import { ReactComponent as Clock } from "../images/clock.svg";
import { ReactComponent as Chat } from "../images/chat.svg";
import { ReactComponent as Location } from "../images/location.svg";
import { ReactComponent as Phone } from "../images/phone.svg";
import { useState } from "react";
import { notifyAdmin } from "../notify";

export default function Contacts() {
    const [inputs, setInputs] = useState({
        name: "",
        phone: "",
    });

    return (
        <div className="contacts">
            <div className="content">
                <div className="left">
                    <h1>Контакти</h1>
                    <div className="contact">
                        <div className="block">
                            <div className="img">
                                <Clock />
                            </div>
                            <div className="text">
                                <div className="top">Пн-Пт </div>
                                <div className="bottom">8:00 - 18:00</div>
                            </div>
                        </div>

                        <div className="block">
                            <div className="img">
                                <Location />
                            </div>
                            <div className="text">
                                <div className="top">
                                    м. Київ Печерский район
                                </div>
                                <div className="bottom">
                                    Вул Князів Острозьких 17/2
                                </div>
                            </div>
                        </div>

                        <div className="block">
                            <div className="img">
                                <Phone />
                            </div>
                            <div className="text">
                                {/* <div className="top">
                                    <a href="tel:380987890987">098 789 09 87</a>
                                </div> */}
                                <div className="bottom">
                                    <a href="tel:380672099645">067 209 96 45</a>
                                </div>
                            </div>
                        </div>

                        <div className="block">
                            <div className="img">
                                <Chat />
                            </div>
                            <div className="text">
                                <div className="top">
                                    <a
                                        href="https://www.instagram.com/yulia100782?igshid=YmMyMTA2M2Y="
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Instagram
                                    </a>
                                </div>
                                <div className="bottom">
                                    <a
                                        href="https://www.facebook.com/profile.php?id=100013308438425"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        Facebook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h1>Вирішую питання будь-якої складності</h1>
                    <p>
                        Запишіться на косультацію та отримайте попередній план
                        вирішення цього питання.
                    </p>
                    <h2>Записатись на консультацію</h2>
                    <div className="form">
                        <input
                            type="text"
                            name="name"
                            placeholder="Ім’я"
                            value={inputs.name}
                            onChange={changeInputs}
                        />
                        <input
                            type="text"
                            name="phone"
                            placeholder="Телефон"
                            value={inputs.phone}
                            onChange={changeInputs}
                        />

                        <button
                            className="secondary"
                            onClick={() => {
                                send();
                            }}
                        >
                            Відправити
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

    function send() {
        // alert("Відправлено " + inputs.name + " " + inputs.phone);
        if (inputs.name === "" || inputs.phone === "") {
            alert("Заповніть всі поля");
            return;
        }
        const text = `Ім'я: ${inputs.name} Телефон: ${inputs.phone}`;
        notifyAdmin(text);
        setInputs({
            name: "",
            phone: "",
        });
        alert("Відправлено, зв'яжемося з вами найближчим часом");
    }

    function changeInputs(e) {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value,
        });
    }
}
