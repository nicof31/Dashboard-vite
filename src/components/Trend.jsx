import React from "react";
import useAxios from '../hooks/useAxios'

const Trend = () => {

    const { data, loading } = useAxios('http://localhost:8060/api/cyber/trend', true);
    if (loading == false) {
        console.log(data);
     }
    return(
        <div>

        </div>
    )
}

export default Trend