import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const [linkVaildation, setLinkVaildation] = useState('');
    const [validationColor, setvalidationColor] = useState('red');
    const [url, setURL] = useState('');
    
    const validate = (value) => {
        if (value.match(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) != null) {
            setLinkVaildation('Valid URL')
            setvalidationColor('green')
            setURL(value)
        }
        else {
            setLinkVaildation('Invalid URL')
            setvalidationColor('red')
        }
    }

    return (
        <div className = "homeContent">
            <h1 className = "homeTitle">URL Validator</h1>
            <div className = "formContainer">
                <form>
                    <input
                        className = "linkInput"
                        type="text"
                        placeholder="Enter a valid URL..."
                        onChange={(e) => validate(e.target.value)}
                    ></input>
                    <Link to={{
                        pathname: '/results',
                        state: {
                            link: url
                        }
                    }}>
                        <input className = "submitButton" value="Submit"></input>
                    </Link>
                </form>
                <p style={{color: validationColor}} className='vaildationText'>{linkVaildation}</p>
                <ol id="list"></ol>
            </div>
        </div>
    );
}

export default HomePage;
