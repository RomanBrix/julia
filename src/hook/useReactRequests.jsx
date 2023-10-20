import { useMutation, useQuery } from "react-query";
import useRequestsMethods from "./useRequestsMethods";

export default function useReactRequest(
    url,
    options = { type: "GET", withToken: false, key: null }
) {
    const { type = "GET", withToken = false, key = null } = options;

    const { protectedRequest, publicRequest } = useRequestsMethods();
    const api = withToken ? protectedRequest() : publicRequest();
    // if (type === "POST") {
    //     const mutation = useMutation({
    //         mutationFn: (data) => {
    //             return api.post("url", data);
    //         },
    //     });

    //     return mutation;
    // }

    const {
        isLoading,
        error,
        data,
        mutation: upd,
    } = useQuery({
        queryKey: key ? key : [url],
        queryFn: () => api.get(url).then(({ data }) => data),
        retry: false,
    });
    return { isLoading, error, data, upd };
}

export function useReactMutation(
    url,
    options = { type: "POST", withToken: false, key: null }
) {
    const { type = "POST", withToken = false, key = null } = options;

    const { protectedRequest, publicRequest } = useRequestsMethods();
    const api = withToken ? protectedRequest() : publicRequest();

    const mutation = useMutation({
        mutationFn: (data) => {
            return api[type.toLowerCase()](url, data);
        },
    });

    return mutation;
}
