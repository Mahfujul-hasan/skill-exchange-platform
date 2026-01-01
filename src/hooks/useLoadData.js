import React, { useEffect, useState } from 'react';

const useLoadData = () => {
    const[skillData, setSkillData]=useState([]);
    const[loading, setLoading]=useState(true);
    const[error, setError]=useState("");
    const[processData, setProcessData]=useState([]);

    useEffect(()=>{
        fetch('/skillData.json')
        .then(res=>res.json())
        .then(data=> {
            setSkillData(data)
            setLoading(false)
        })
        .catch(err=>{
            setError(err.message);
            setLoading(false);
        })
         

        
    },[])
    useEffect(()=>{
        fetch('/howItWorks.json')
        .then(res=>res.json())
        .then(data =>{
            setProcessData(data);
        })
    },[setProcessData])
    return {skillData, loading, setLoading, error, processData};
    
};

export default useLoadData;