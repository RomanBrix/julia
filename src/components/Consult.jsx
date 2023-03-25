import { useState } from "react";
import ConsultImg from "../images/consult.png";
import { notifyAdmin } from "../notify";

export default function Consult() {
    const [fields, setFields] = useState({
        name: "",
        phone: "",
    });

    return (
        <div className="consult" id="consult">
            <div className="content">
                <h1>Запишіться на консультацію</h1>
                <div className="img">
                    <img src={ConsultImg} alt="consult" />
                </div>
                <div className="form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Ім’я"
                        value={fields.name}
                        onChange={changeFieldaValue}
                    />
                    <input
                        type="text"
                        name="phone"
                        placeholder="Телефон"
                        value={fields.phone}
                        onChange={changeFieldaValue}
                    />
                    <button className="send" onClick={send}>
                        Відправити
                    </button>
                </div>
            </div>
        </div>
    );

    function send() {
        // alert("Відправлено " + inputs.name + " " + inputs.phone);
        if (fields.name === "" || fields.phone === "") {
            alert("Заповніть всі поля");
            return;
        }
        const text = `Ім'я: ${fields.name} Телефон: ${fields.phone}`;
        notifyAdmin(text);

        setFields({
            name: "",
            phone: "",
        });
        alert("Відправлено, зв'яжемося з вами найближчим часом");
    }

    function changeFieldaValue(e) {
        setFields({
            ...fields,
            [e.target.name]: e.target.value,
        });
    }
}
