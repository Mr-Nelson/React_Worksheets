import React from 'react';


const SuperheroTable = (props) => {
    return (
        <table>
            <thead>
                <tr>Superhero Name</tr>
                <tr>Primary Ability</tr>
                <tr>Secondary Ability</tr>
            </thead>
            {props.superheroes.map((superhero, index) => {
                return (
                    <div key={index}>
                        <tbody>
                            <td>{superhero.name}</td>
                            <td>{superhero.primaryAbility}</td>
                            <td>{superhero.secondaryAbility}</td>
                        </tbody>
                    </div>
                );
            })}
        </table>
    );
}

export default SuperheroTable;