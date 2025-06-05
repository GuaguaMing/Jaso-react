import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../css/style.min.css';
// import '../main.css';
import Navbar from "../1components/Navbar";
export default function AppGuide() {
    useEffect(() => {
        console.log('AppGuide rendered');
    }, []);
    return (
        <>
            <Navbar />

            <>
                <div>
                    <h1>Guide</h1>
                </div>
            </>
        </>
    )
}