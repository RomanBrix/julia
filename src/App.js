import { Route, Routes } from "react-router-dom";

import HeroPage from "./pages/HeroPage";
import MainLayout from "./components/layouts/MainLayout";
import AllNews from "./pages/AllNews";
import AdminPage from "./pages/admin";
import SingleNews from "./pages/SingleNews";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route element={<MainLayout />}>
                    <Route index element={<HeroPage />} />
                    <Route path="news" element={<AllNews />} />
                    <Route path="news/:id" element={<SingleNews />} />
                </Route>
                <Route path="admin/*" element={<AdminPage />} />
                <Route path="*" element={<>Not Found</>} />
            </Routes>
        </div>
    );
}

export default App;
