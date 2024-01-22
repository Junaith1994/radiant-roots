import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Activity = ({ activity }) => {
    const { activityTitle, img } = activity;
    const [color, setColor] = useState('');
    const navigate = useNavigate();
    
    // Creating random background colors for activities 
    const setRandomBgColor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        setColor('#' + randomColor);
    }
    useEffect(() => {
        setRandomBgColor();
    }, [])

    return (
        <Card onClick={() => navigate(`/volunteer-register/${activityTitle}`)} className='col-6 col-md-3 border-0 shadow-lg p-2 mb-2 bg-body-tertiary rounded-4 pe-auto'>
            <Card.Img className='' variant="" src={img} />
            <Card.Body style={{ "backgroundColor": color !== '#f8f9fa' && color }} className='text-center'>
                <Card.Title className='text-white'>{activityTitle}</Card.Title>
            </Card.Body>
        </Card>
    );
};

export default Activity;