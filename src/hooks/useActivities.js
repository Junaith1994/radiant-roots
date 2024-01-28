import { useEffect, useState } from 'react';
import axios from 'axios';

const useActivities = () => {
    const [activities, setActivities] = useState([]);

    useEffect(() => {
        axios.get('https://radiant-roots-server.vercel.app/activities')
            .then(res => setActivities(res?.data))
            .catch(err => console.log(err))
    }, [])

    return [activities];
};

export default useActivities;