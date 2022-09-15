import { useState } from "react"
import ConsultImg from '../images/consult.png';




export default function Consult(){
    const [fields, setFields] = useState({
        name:'',
        phone: ''
    })

    return(
        <div className="consult">
            <div className="content">
                <h1>Запишіться на консультацію</h1>
                <div className="img">
                    <img src={ConsultImg} alt="consult"/>
                </div>
                <div className="form">
                    <input type="text" name="name" placeholder="Ім’я" value={fields.name} onChange={changeFieldaValue}/>
                    <input type="text" name="phone" placeholder="Телефон" value={fields.phone} onChange={changeFieldaValue}/>
                    <button className="send">Відправити</button>
                </div>
            </div>
        </div>
    )


    function changeFieldaValue(e){
        setFields({
            ...fields,
            [e.target.name]: e.target.value
        })
    }
}