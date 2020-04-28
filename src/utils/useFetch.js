import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchUrl = async () => {
            const res = await fetch(url)
            const json = await res.json()
            setData(json)
        };
        fetchUrl();
    },
    []);

    return data;
};

export default useFetch

