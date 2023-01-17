import { Component } from "react";

class MiComponente extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "Daniel",
            apellido: 'Ayala'
        };
    }
    render() { 

        const {titulo, subtitulo, children} = this.props;
        const alertar = () => {
            alert("This button has been clicked!");
            this.setState({
                nombre:'Cesar',
                apellido:'Olivera'
            });
        };
        const {nombre, apellido} = this.state;
        return (
        <> 
            <h1>{titulo}</h1>
            <p><strong>{subtitulo}</strong></p>
            {children}
            <button onClick={ alertar }>Click Me</button>
            <h3>{nombre} {apellido}</h3>
        </>
        )
    }
}
 
export default MiComponente;