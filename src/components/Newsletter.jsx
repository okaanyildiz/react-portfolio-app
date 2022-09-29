import { useState, useEffect } from "react";
import { Alert } from "react-bootstrap";

function Newsletter({ status, message, onValidated }) {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
            email.indexOf("@") > -1 &&
            onValidated({ // onValidated is coming from module.
                EMAIL: email
            })
    }

    const clearFields = () => {
        setEmail('');
    }

    return (
        <div className="newsletter-bx wow slideInUp">
            <h3>Subscribe to my Newsletter<br></br> & Never miss latest updates</h3>
            {status === 'sending' && <Alert>Sending...</Alert>}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
            <form onSubmit={handleSubmit}>
                <div className="email-container">
                    <div className="new-email-bx">
                        <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                    </div>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    )
}

export default Newsletter