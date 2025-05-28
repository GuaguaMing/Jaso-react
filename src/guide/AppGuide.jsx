import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.min.css';
import '../main.css';
export default function AppGuide() {
    useEffect(() => {
        console.log('AppGuide rendered');
    }, []);
    return (
        <>
            <div>
                <h1>Guide</h1>
            </div>
        </>
    )
}