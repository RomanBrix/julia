import { Outlet } from "react-router-dom";
import Map from "../Map";
import Contacts from "../Contacts";

export default function MainLayout() {
    return (
        <>
            <Outlet />
            <Contacts />
            <Map />
        </>
    );
}
