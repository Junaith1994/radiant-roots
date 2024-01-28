import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import SingleActivity from './SingleActivity';
import useActivities from '../../hooks/useActivities';
import { toast } from 'react-toastify';

const RegisteredActivity = () => {
    const [volunteersInfo, setVolunteersInfo] = useState([]);

    // Auth state firebase hook
    const [user, loading, error] = useAuthState(auth);

    const volunteerEmail = user.email;
    // Getting registered volunteers with registered activities
    useEffect(() => {
        axios.get(`https://radiant-roots-server.vercel.app/registered-activities/${volunteerEmail}`)
            .then(res => {
                setVolunteersInfo(res.data);
            })
            .catch(error => console.log(error));
    }, [volunteerEmail]);

    // Cancel event handler
    const handleCancelEvent = (title, id) => {
        const confirmation = window.confirm(`Do you want to cancel "${title}" event?`);

        // Sending removeable volunteer id to the server on cancel event confirmation
        if (confirmation) {
            axios.delete(`https://radiant-roots-server.vercel.app/remove-volunteer/${id}`)
                .then(res => {
                    console.log(res);
                    if (res.data.deletedCount === 1) {
                        const remainingVolunteersInfo = volunteersInfo.filter(volunteerInfo => volunteerInfo._id !== id);
                        const newVolunteersInfo = [...remainingVolunteersInfo];
                        setVolunteersInfo(newVolunteersInfo);
                        toast(`${title} event has been successfully cancelled`);
                    }
                })
                .catch(error => console.log(error))
        }

    }

    return (
        <div className='container'>
            <h1 className='text-center'>Registered Activity : {volunteersInfo.length}</h1>
            <div className='row row-gap-2'>
                {
                    volunteersInfo.map(volunteer => <SingleActivity
                        key={volunteer._id}
                        volunteerInfo={volunteer}
                        handleCancelEvent={handleCancelEvent}
                    ></SingleActivity>)
                }
            </div>
        </div>
    );
};

export default RegisteredActivity;