import React, { useEffect, useState } from 'react';
import './Activities.css';
import axios from 'axios';
import Activity from './Activity/Activity';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        axios.get('activitiesData.json')
            .then(res => setActivities(res?.data))
            .catch(err => console.log(err))
    }, [])
    
    return (
        <div className='container'>
            <div className='row row-gap-3'>
                {
                    activities.map(activity => <Activity
                        key={activity._id}
                        activity={activity}
                    ></Activity>)
                }
            </div>
        </div>
    );
};

export default Activities;