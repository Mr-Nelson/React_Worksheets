import React from 'react';


const DisplayName = (props) => {
    return (
        <ul>
            {props.person.map((person, index) => {
                return (
                    <div key={index}>
                        <h1>{person.firstName}</h1>
                        <h2>{person.lastName}</h2>
                    </div>
                );
            })}
        </ul>
    );
}

export default DisplayName;