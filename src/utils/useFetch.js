import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null); 
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

    useEffect(() => {
        const fetchUrl = async () => {
            const myHeaders = new Headers({Origin: url})
            const res = await fetch(`${proxyUrl}${url}`, 
            {method: 'GET',
            headers: myHeaders})
            const json = await res.json()
            setData(json)
        };
        fetchUrl();
    }, [url]);

    return data;
};

export default useFetch

