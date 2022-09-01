import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    // Setting initail states of 'linkVaildationText', 'validationColor', 'url'
    const [linkVaildationText, setLinkVaildationText] = useState('');
    const [validationColor, setvalidationColor] = useState('red');
    const [url, setURL] = useState('');
    
    // Function checks if user's 'input' is a valid by checking if it matches the REGEX
    const validate = (input) => {
        // eslint-disable-next-line
        if (input.match(/[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g) != null) {
            setLinkVaildationText('Valid URL') // Set 'linkVaildationText' to 'Valid URL'
            setvalidationColor('green') // Set 'linkVaildationText' color to 'green'
            setURL(input) // Set 'url' to user's 'value'
        }
        else {
            setLinkVaildationText('Invalid URL') // Set 'linkVaildationText' to 'Invalid URL'
            setvalidationColor('red') // Set 'linkVaildationText' color to 'red'
        }
    }

    return (
        <div className = "homeContent">
            <div className = "formContainer">
                <h1 className = "homeTitle">URL Validator</h1>
                <form>
                    <input
                        className = "linkInput"
                        type="text"
                        placeholder="Enter a valid URL..."
                        onChange={(e) => validate(e.target.value)} // Checks if user's input is vaild while typing
                    ></input>
                    <Link to={{
                        pathname: '/results', 
                        state: {
                            link: url // Passes user's url to results page
                        }
                    }}>
                        <input className = "submitButton" value="Submit"></input>
                    </Link>
                </form>
                <p style={{color: validationColor}} className='vaildationText'>{linkVaildationText}</p>
                <ol id="linksList"></ol>
            </div>
        </div>
    );
}

export default HomePage;
