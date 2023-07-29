import React from 'react';
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const MatchDate = ({matchFullDate}) => {
    
    return (
        <div className='fixture_rows'>
            <span className='matchdate'>{matchFullDate.toLocaleDateString(undefined, options)} </span>          
        </div>
    );
};

export default MatchDate;