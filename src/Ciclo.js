import React, { Component } from 'react';

class Ciclo extends Component {

    state = {
        dataCorrente: ""
    }

    componentDidMount = () => {
        console.log("componentDidMount foi chamado")

        let dataAtual = new Date()
            
        this.setState({dataCorrente: dataAtual})
    }

    componentDidUpdate = () => {
        if(this.state.dataCorrente.getTime() !== new Date().getTime() ){
            console.log("O tempo mudou")
        }
    }

    componentWillUnmount = () => {
        clearInterval()
    }

    setarIntervalo = () => {
        setInterval(() => {
            let dataAtual = new Date()
            
            this.setState({dataCorrente: dataAtual})
        }, 5000)
    }

    mostraState = () => {
        console.log(this.state.dataCorrente)
    }

    render() {
        return(
            <div>
                <p>
                    Data atual: { this.state.dataCorrente.toString() }
                </p>
                <button onClick={this.setarIntervalo}>Setar intervalo</button>
                <button onClick={this.mostraState}>Mostrar State</button>
            </div>
        );
    }
}

export default Ciclo;
