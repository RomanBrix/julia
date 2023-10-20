import { Navigate, Route, Routes } from "react-router-dom";
import AdminLayout from "../../components/layouts/AdminLayouts";
import EnterPage from "./EnterPage";
import { useSelector } from "react-redux";
import NewsPage from "./NewsPage";
import SingleNews from "./SingleNews";
import SettingsPage from "./SettingsPage";

export default function AdminPage() {
    const { currentUser } = useSelector((state) => state.persistedReducer.user);

    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route index element={<NewsPage />} />
                <Route path={"/news/:id"} element={<SingleNews />} />
                <Route path={"/settings"} element={<SettingsPage />} />
            </Route>
            <Route
                path={"/enter"}
                element={
                    currentUser ? <Navigate to={".."} replace /> : <EnterPage />
                }
            />
        </Routes>
    );
}
