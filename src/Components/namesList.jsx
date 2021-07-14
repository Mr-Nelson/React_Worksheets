import React from 'react';


function NamesList(props) {
    return(
        <ul>
            {props.names.map((names, index) => {
                return (
                    <div key={index}>
                        <li>{names.name}</li>
                        <hr />
                    </div>
                );
            })}
        </ul>
    );
}

export default NamesList;