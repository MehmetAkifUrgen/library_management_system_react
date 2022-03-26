import React from 'react';

function CardHeader(props) {
    return (
        <div className="card-header">
            <p>{props.title}</p>
        </div>
    );
}

export default CardHeader;