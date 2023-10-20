import axios from "axios";
import { createContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { redux_logoutUser } from "../redux/userApi";
// import { redux_logoutUser } from "../Redux/userControl";

// import { io } from "socket.io-client";

export const RequestsMethodsContext = createContext(null);

function RequestsMethodsProvider({ children }) {
    // const [protectedUrl, setProtected] = useState(null);
    const { currentUser, token } = useSelector(
        (state) => state.persistedReducer.user
    );
    const dispatch = useDispatch();
    // const baseApi = "https://api.chillbar.com.ua/api/";
    const baseApi = "http://localhost:1488/api/";
    // console.log(user);
    const publicRequest = () =>
        axios.create({
            baseURL: baseApi,
            // rejectUnauthorized: false,
        });

    const protectedRequest = (tk = token, user = currentUser?._id) => {
        const api = axios.create({
            baseURL: baseApi,
            headers: { token: tk, user },
            // rejectUnauthorized: false, // ssl off while develop
        });
        api.interceptors.response.use(
            (response) => response,
            (error) => {
                //handle error at top level
                // console.log("handle error at top level");
                // console.log(error);

                if (error.response.data.auth) {
                    switch (error.response.data.auth) {
                        case "1":
                            toast.warning("Сессия устарела, перезайдите");
                            break;
                        case "2":
                            toast.error("Попытка подобрать юзера");
                            break;
                        default:
                            toast.warn("Перезайдите");
                            break;
                    }
                    redux_logoutUser(dispatch);
                }
                throw error;
            }
        );

        return api;
    };
    const loginAdmin = (username, password) => {
        return publicRequest().post("auth", {
            username,
            password,
        });
    };
    //ORDERS
    const getOrdersList = () => {
        // console.log(currentUser);
        return protectedRequest(token, currentUser._id).get("order/list");
    };

    const crateProduct = (formData) => {
        return protectedRequest(token, currentUser._id).post(
            "/products/",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );
    };

    const val = {
        publicRequest,
        protectedRequest,

        loginAdmin,
        getOrdersList,
        crateProduct,
    };
    return (
        <RequestsMethodsContext.Provider value={val}>
            {children}
        </RequestsMethodsContext.Provider>
    );
}

export default RequestsMethodsProvider;
