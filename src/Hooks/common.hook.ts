import { useEffect, useState } from "react";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE'

export function useFetch(method: HttpMethod, url: string) {
    const [data, setData] = useState(null);
    useEffect(() => {
        let ignore = false;
        fetch(url)
            .then(response => response.json())
            .then(json => {
                if (!ignore) {
                    setData(json);
                }
            });
        return () => {
            ignore = true;
        };
    }, [url]);
    return data;
}