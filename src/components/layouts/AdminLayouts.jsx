// import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet, } from "react-router-dom";
import AdminHeader from "./AdminHeader";

export default function AdminLayout() {
    const { currentUser } = useSelector((state) => state.persistedReducer.user);

    // const { pathname } = useLocation();

    return (
        <>
            {currentUser ? (
                <>
                <AdminHeader/>
                <Outlet />
                </>
            ) : (
                <Navigate to={"/admin/enter"} replace />
            )}
        </>
    );
}
