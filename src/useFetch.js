import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)
    
    useEffect(()=>{
        const fetchData = async () => {
            const response = await fetch(url);
            if(!response.ok) {
                throw Error('Could not fetch the data for that resource');
            }
            const data = await response.json();
            setData(data);
            setIsPending(false);
            setError(null)
        }
            fetchData()
            .catch(err =>{
                setIsPending(false)
                setError(err.message)
            })  
    }, [url]);
    
    return { data, isPending, error }
}

export default useFetch