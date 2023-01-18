import { Component } from "react";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: props.age
        };
    }

    incrementAge = () => {
        this.setState({age: this.state.age + 1});
    }

    render() { 

        const {lastName, firstName, hairColor,cumple} = this.props;
        const { age } = this.state;
        return (
            <>
            <h1>{lastName} , {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={ () => this.incrementAge() }>{cumple}</button>
            </>
        )
    }
}

export default PersonCard;
