import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const ResultsPage = (props) => {
    const link = useLocation().state.link; // Fetches user's url from home page
    console.log(link)

    return (
        <div className='resultsPageContent'>
            <div className='resultsContainer'>
                <h1 className='greeting'>Thanks for your submission!</h1> {/* Thank user for their submission */}
                <a className='resultURL' href={'https://' + link}>{link}</a> {/* Display user's sumbitted URL */}
            </div>
            <Link to={{
                    pathname: '/'
                }}>
                    <button className = "backButton">Go Back</button> {/* Link to go back to the home page */}
            </Link>
        </div>
    )
}

export default ResultsPage
