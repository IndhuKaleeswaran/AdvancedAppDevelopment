// PrivacyPolicy.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/css/privacy.css';

function PrivacyPolicy() {
    const navigate = useNavigate();

    const backHandler = (e) => {
        navigate('/start');
    };

    return (
        <>
            <Navbar />
            <div className="privacy-policy-container">
                <h1 className='privacy-head'>Privacy Policy</h1>
                <p>
                    At Events Park, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our event management app.
                </p>
                <h2>Information We Collect</h2>
                <p>
                    We may collect various types of information, including but not limited to:
                </p>
                <ul>
                    <li>Your name and contact details for account registration.</li>
                    <li>Event preferences and interests for personalized recommendations.</li>
                    <li>Usage data, such as your interactions with the app and the events you access.</li>
                </ul>
                <h2>How We Use Your Information</h2>
                <p>
                    We use your information for purposes such as:
                </p>
                <ul>
                    <li>Providing personalized event recommendations.</li>
                    <li>Improving our app's features and user experience.</li>
                    <li>Sending you notifications and updates about upcoming events.</li>
                </ul>
                <h2>Security Measures</h2>
                <p>
                    We implement security measures to protect your data from unauthorized access or disclosure.
                </p>
                <h2>Changes to this Policy</h2>
                <p>
                    We may update this Privacy Policy from time to time. Please review it periodically.
                </p>
                <p>
                    For any questions or concerns about your privacy, please contact us at privacy@eventspark.com.
                </p>
            </div>
            <button className='back-btn2' onClick={backHandler}>Back</button>
        </>
    );
}

export default PrivacyPolicy;
