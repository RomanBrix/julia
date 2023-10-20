import { useState } from "react";
import useRequestsMethods from "../../hook/useRequestsMethods";
import { useDispatch } from "react-redux";
import { redux_adminLogin } from "../../redux/userApi";
import { toast } from "react-toastify";

export default function EnterPage({}) {
    const [values, setValues] = useState({
        password: "",
        login: "",
    });
    const dispatch = useDispatch();
    const { loginAdmin } = useRequestsMethods();

    return (
        <div className="enter-page">
            <div className="enter-container">
                <h1>Вхід</h1>
                <input
                    type="text"
                    placeholder="login"
                    id="login"
                    value={values.login}
                    onKeyDown={handleKeyPress}
                    onChange={changeValue}
                />
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={changeValue}
                    value={values.password}
                    onKeyDown={handleKeyPress}
                />
                <button onClick={Enter}>Увійти</button>
            </div>
        </div>
    );

    function handleKeyPress(event) {
        if (event.key === "Enter") {
            Enter();
        }
    }

    async function Enter() {
        try {
            const { data } = await loginAdmin(values.login, values.password);
            redux_adminLogin(dispatch, data);
        } catch (err) {
            if (err.response.data === "wrong input") {
                toast.error("Wrong username or password");
            }
        }
    }
    function changeValue({ target }) {
        setValues((prev) => ({
            ...prev,
            [target.id]: target.value,
        }));
    }
}
