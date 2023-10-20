import { useContext } from "react";
import { RequestsMethodsContext } from "../hok/RequestsMethods";
// import { RequestsMethodsContext } from "../hoc/RequestsMethods";

export default function useRequestsMethods() {
    return useContext(RequestsMethodsContext);
}
