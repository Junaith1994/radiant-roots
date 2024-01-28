import React, { useEffect, useState } from 'react';
import './Activities.css';
import Activity from './Activity/Activity';
import useActivities from '../../hooks/useActivities';

const Activities = () => {
    // loading all activities data Using custom hook
    const [activities] = useActivities();
    
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