import { useEffect, useState } from 'react'

function useCategory(api) {
    const [loading, setLoading] = useState(false);
    const [allCategory, setAllCategory] = useState([])

    async function fetchData(apilink) {
        try {
            setLoading(true);
            const response = await fetch(apilink);
            const data = await response.json();
            if (data && data.products && data.products.length) {
                setAllCategory([...new Set(data.products.map((item) => item.category))])
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

    return { loading, allCategory };
}

export default useCategory