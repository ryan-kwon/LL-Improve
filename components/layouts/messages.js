import React, {useEffect, useState} from "react";
import { supabase } from '../../server/supabase'

export default function DataFetcher(){
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const { data, error } = await supabase
            .from('User')
            .select('*'); // Retrieve all rows from table
    
            if (error) console.log('Error fetching data:', error);
            else {
                console.log('nice');
                setData(data); // Set data to state if successful
            }
        };
        fetchData();
    }, []);
}

