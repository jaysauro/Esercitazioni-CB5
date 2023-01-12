import {useEffect, useState} from 'react';

export function useFetch(url) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        setData(null);
        setError(null);
        setLoading(true);

        try {
            const data = await fetch(url).then(r => r.json());
            setData(data);
        } catch (error) {
            console.error(error)
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return {
        data, 
        error, 
        loading, 
        refetch: fetchData
    };
}