import axios from 'axios';
import React, {useEffect, useState} from 'react';

const useAxios = (url, state) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(state);

    useEffect(() => {
     setLoading(true);
     axios(url).then((res) => {
        setData(res.data);
        
        setTimeout(() => {
            setLoading(false);
        },1500)
        
     }); 
    }, [url])

    return { data, loading }

}

export default useAxios;