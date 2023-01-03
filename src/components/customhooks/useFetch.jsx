import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    
    const fetchData = async () => {
        const response = await fetch(url);
        const dataResponse = await response.json();
        setData(dataResponse);
        setIsLoading(false);
        //console.log(dataResponse);        
    }
    
    useEffect(() => {
        fetchData();
    }, [url]);
    
    return {
        isLoading,
        data
    }
}

export {useFetch};