import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/css/faq.css';

function Faq() {
    const navigate = useNavigate();

    const backHandler = () => {
        navigate('/start');
    };

    return (
        <>
            <Navbar />
            <div className="faq-container">
                <h1>Frequently Asked Questions</h1>

                <div className="faq-item">
                    <h2>What is Events Park?</h2>
                    <p>Events Park is an event management platform that helps users organize, discover, and book various events ranging from concerts to conferences and parties.</p>
                </div>

                <div className="faq-item">
                    <h2>How can I create an event?</h2>
                    <p>To create an event, simply sign up or log in to your Events Park account, navigate to the 'Create Event' section, fill in the event details, and publish your event for attendees to discover.</p>
                </div>

                <div className="faq-item">
                    <h2>Is there a fee for using Events Park?</h2>
                    <p>Events Park offers both free and premium plans. While basic features are available for free, premium plans provide additional functionalities such as advanced event analytics and promotional tools.</p>
                </div>

                <div className="faq-item">
                    <h2>How do I contact support?</h2>
                    <p>If you have any questions or need assistance, you can reach out to our support team via email at support@eventspark.com or through the 'Contact Us' section of the app.</p>
                </div>

            </div>
            <button onClick={backHandler} className='back-btn3'>Back</button>
        </>
    );
}

export default Faq;
