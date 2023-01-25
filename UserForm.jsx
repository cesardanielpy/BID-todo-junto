import React, { useState } from 'react';


const UserForm = (props) => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confpassword, setConfpassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        const newUser = {firstname, lastname, email, password, confpassword };
        console.log("Welcome", newUser);
    };

    return (
        <>
        <form onSubmit={createUser}>
            <div>
                <label>First Name: </label>
                <input value={firstname} type="text" onChange={(e) => setFirstname(e.target.value)} />
            </div>
            <div>
                <label>Last Name: </label>
                <input value={lastname} type="text" onChange={(e) => setLastname(e.target.value)} />
            </div>
            <div>
                <label>Email: </label>
                <input value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <label>Password: </label>
                <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
                <label>Confirm Password: </label>
                <input value={confpassword} type="password" onChange={(e) => setConfpassword(e.target.value)} />
            </div>
            <input type="submit" value="Create User" />
        </form>
        <h1>Your Form Data</h1>
        <h4>First Name: {firstname} </h4>
        <h4>Last Name:{lastname} </h4>
        <h4>Email :{email} </h4>
        <h4>Password:{password} </h4>
        <h4>Confirm Password:{confpassword} </h4>
        </>
    );
};

export default UserForm;
