import moment from "moment";
import useReactRequest, { useReactMutation } from "../../hook/useReactRequests";
import "moment/locale/uk";
import { useSelector } from "react-redux";
import { useState } from "react";
import { toast } from "react-toastify";
import { useQueryClient } from "react-query";
moment.locale("uk");

export default function SettingsPage() {
    const [newUser, setNewUser] = useState({
        username: "",
        password: "",
    });
    const queryClient = useQueryClient();
    const {
        isLoading,
        error,
        data: users = [],
    } = useReactRequest("/user/list", { withToken: true });

    const postMutation = useReactMutation("/user/new", {
        withToken: true,
        type: "POST",
    });

    const deleteMutation = useReactMutation(`/user/`, {
        withToken: true,
        type: "delete",
    });
    const updMutation = useReactMutation(`/user/`, {
        withToken: true,
        type: "PUT",
    });

    const { currentUser } = useSelector((state) => state.persistedReducer.user);

    // console.log(currentUser);

    return (
        <div className="admin-page">
            <h1>Налаштування</h1>

            <div className="block">
                <h2>Додати Коритсувача</h2>
                <div className="add-user">
                    <input
                        type="text"
                        placeholder="Username"
                        value={newUser.username}
                        name="username"
                        onChange={changeInputs}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={newUser.password}
                        name="password"
                        onChange={changeInputs}
                    />
                    <div className="btn" onClick={addNewUser}>
                        Добавити
                    </div>
                </div>
                <h2>Наявні Коритсувачі</h2>

                <div className="user-list">{rednderUsers(users)}</div>
            </div>
        </div>
    );

    function addNewUser() {
        console.log(newUser);
        if (!newUser.password || !newUser.username) return;
        postMutation.mutate(
            { ...newUser, isAdmin: true },
            {
                onSuccess: () => {
                    toast.success("Добавленно");
                    queryClient.invalidateQueries({ queryKey: ["/user/list"] });
                },
            }
        );
    }
    function deleteUser(id) {
        deleteMutation.mutate(
            { data: { id } },
            {
                onSuccess: () => {
                    toast.success("Удаленно");
                    queryClient.invalidateQueries({ queryKey: ["/user/list"] });
                },
            }
        );
    }

    function changeInputs({ target }) {
        setNewUser((prev) => ({
            ...prev,
            [target.name]: target.value,
        }));
    }
    function rednderUsers(users) {
        return users.map((item) => {
            return (
                <div className="user">
                    <div className="name">{item.username}</div>
                    <div className="time">
                        {moment(item.createdAta).format("DD.MM.YY")}
                    </div>
                    {item.username !== currentUser.username ? (
                        <div
                            className="btn"
                            onClick={() => {
                                deleteUser(item._id);
                            }}
                        >
                            Видалити
                        </div>
                    ) : (
                        <div className="btn" onClick={changePass}>
                            Пароль
                        </div>
                    )}
                </div>
            );
        });
    }

    function changePass() {
        const pass = window.prompt("Новий пароль:");
        if (!pass) return;
        updMutation.mutate(
            { user: { id: currentUser._id, password: pass } },
            {
                onSuccess: () => {
                    toast.success("Пароль змінено");
                    queryClient.invalidateQueries({ queryKey: ["/user/list"] });
                },
            }
        );
        console.log(pass);
    }
}
