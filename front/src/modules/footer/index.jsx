import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

export default function MyFooter() {
    const [currentTime, setCurrentTime] = useState(Date.now());
    const [time, setTime] = useState('');
    useEffect(() => {
        getTime();
    }, [time]);
    const getTime = () => {
        const timeID = setInterval(() => {
            setCurrentTime(Date.now());
            const result = dayjs(currentTime).format('YYYY-MM-DD HH:mm:ss');
            setTime(result);
            clearInterval(timeID);
        }, 1000);
    };
    return (
        <div>{time}</div>
    )
}
