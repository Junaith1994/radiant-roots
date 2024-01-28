import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import useActivities from '../../hooks/useActivities';
import axios from 'axios';

const SingleActivity = ({ volunteerInfo, handleCancelEvent }) => {
    const [activityImgUrl, setActivityImgUrl] = useState('');
    // const [removeableEventId, setRemoveableEventId] = useState('');

    // Destructuring info
    const { _id, activity, date } = volunteerInfo;

    // loading all activities data Using custom hook to match registered activity
    const [activities] = useActivities();

    // Getting images from activities api for registered activities
    useEffect(() => {
        const matchedActivities = activities.filter(activ => activ.activityTitle === activity);
        matchedActivities.map(activ => setActivityImgUrl(activ.img));
        // matchedActivities.map(activ => setRemoveableEventId(activ._id));

    }, [activity, activities])

    return (
        <div className='d-flex col-12 col-md-6 border-0 shadow-lg p-2 mb-2 bg-body-tertiary rounded-4 pe-auto'>
            <div className='me-3'>
                <img className='img-fluid' src={activityImgUrl} alt={activity} />
            </div>
            <div className='col-6 text-start'>
                <h3>{activity}</h3>
                <h4>Joining Date: {date}</h4>
                <div className='text-end'>
                    <Button onClick={() => handleCancelEvent(activity, _id)} className='' variant='danger'>Cancel</Button>
                </div>
            </div>
        </div>
    );
};

export default SingleActivity;