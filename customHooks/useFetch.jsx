import { useEffect, useState } from 'react';

function useFetch(api) {
    const [loading, setLoading] = useState(false);
    const [apiData, setApiData] = useState([]);

    async function fetchData(apilink) {

        try {
            setLoading(true);
            const response = await fetch(apilink);
            const data = await response.json();
            if (data) {
                setApiData(data);
            }
            setLoading(false);
        } catch (error) {
            console.log('Error fetching data:', error);
            setLoading(false);
        }
    }

    useEffect(() => {
        if (api) {
            fetchData(api);
        }
    }, [api]);

    return { loading, apiData };
}

export default useFetch;
