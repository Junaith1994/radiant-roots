import React, { useEffect, useState } from 'react';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';
import SingleActivity from './SingleActivity';
import { toast } from 'react-toastify';
import axiosPrivate from '../../API/axiosPrivate';

const RegisteredActivity = () => {
    const [volunteersInfo, setVolunteersInfo] = useState([]);

    // Auth state & SignOut firebase hook
    const [user, loading, error] = useAuthState(auth);
    const [signOut, loading1, error1] = useSignOut(auth);

    const volunteerEmail = user.email;
    
    // Getting registered volunteers with registered activities
    useEffect(() => {
        axiosPrivate.get(`https://radiant-roots-server.vercel.app/registered-activities/${volunteerEmail}`)
            .then(res => {
                setVolunteersInfo(res.data);
            })
            .catch(error => {
                console.log('Access Token Related Error', error)
                // Signing out if access token is expired
                localStorage.removeItem("accessToken");
                signOut();
            });
    }, [volunteerEmail, signOut]);

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