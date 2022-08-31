import React from 'react'
import { Link, useParams, useLocation } from 'react-router-dom';

const ResultsPage = (props) => {
    const {type} = useParams();
    const link = useLocation().state.link;
    console.log(link)

    return (
        <div className='resultsPageContent'>
            <div className='resultsContainer'>
                <h1 className='greeting'>Thanks for your submission!</h1>
                <a className='resultURL' href={'https://' + link}>{link}</a>
            </div>
            <Link to={{
                    pathname: '/'
                }}>
                    <button className = "backButton">Go Back</button>
            </Link>
        </div>
    )
}

export default ResultsPage
