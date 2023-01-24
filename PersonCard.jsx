import React from 'react'

const PersonCard = ({ lastName, firstName, age, hairColor }) => {
    return (
        <>
            <h1>{lastName} , {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </>
    )
}

export default PersonCard