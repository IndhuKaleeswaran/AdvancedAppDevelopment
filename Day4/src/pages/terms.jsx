import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/css/terms.css';

function Terms() {
    const navigate = useNavigate();

    const backHandler = (e) => {
        navigate('/start');
    };

    return (
        <>
            <Navbar />
            <div className="terms-and-conditions-container">
                <h1>Terms and Conditions</h1>
                <ol>
                    <li>
                        By using this party management app, you agree to comply with and be bound by the following terms and conditions.
                    </li>
                    <li>
                        You must be at least 18 years old to use this app.
                    </li>
                    <li>
                        You are solely responsible for the events you organize through this app, including but not limited to venue selection, guest invitations, and event management.
                    </li>
                    <li>
                        The app provides tools and features to assist in party planning, but we do not guarantee the success or outcome of any event organized using this app.
                    </li>
                    <li>
                        You agree not to use this app for any unlawful or prohibited activities.
                    </li>
                    <li>
                        You may not use this app to organize events that promote hate speech, violence, or discrimination based on race, gender, religion, or any other characteristic.
                    </li>
                    <li>
                        We reserve the right to suspend or terminate your account if you violate these terms and conditions.
                    </li>
                    <li>
                        The app may collect and store personal information as outlined in our Privacy Policy. By using this app, you consent to the collection and use of your information as described.
                    </li>
                    <li>
                        We may update or modify these terms and conditions from time to time without prior notice. It is your responsibility to review these terms periodically for any changes.
                    </li>
                    <li>
                        We disclaim any warranties or representations, express or implied, regarding the accuracy, completeness, or reliability of the information provided in this app.
                    </li>
                </ol>
                <h2>Changes to Terms and Conditions</h2>
                <p>
                    We reserve the right to modify these terms and conditions at any time. Your continued use of the app after any changes indicates your acceptance of the modified terms.
                </p>
                <p>
                    If you have any questions or concerns about these terms and conditions, please contact us at info@partymgmtapp.com.
                </p>
            </div>
            <button className='back-btn1' onClick={backHandler}>Back</button>
        </>
    );
}

export default Terms;
