import { useLocation, useNavigate } from "react-router-dom";

export default function AdminHeader() {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    console.log(pathname);
    return (
        <header className="admin">
            <ul>
                <li
                    className={
                        pathname === "/admin" || pathname === "/admin/"
                            ? "active"
                            : ""
                    }
                    onClick={() => {
                        navigate("/admin");
                    }}
                >
                    Новини
                </li>
                <li
                    className={pathname === "/settings" ? "active" : ""}
                    onClick={() => {
                        navigate("/admin/settings");
                    }}
                >
                    Налаштування
                </li>
            </ul>
        </header>
    );
}
