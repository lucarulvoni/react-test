import React from 'react'


class Customers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nazione: "Italia",
            indirizzo: "via roma 21",
            anno: 1999
        };
        this.state = {colorefavorito: "rosso"};
    }
    changeNation = () => {
        this.setState({nazione: "germania"});
    }

    changeAnno = () => {
        this.setState({anno: 2020});
    }

    changeColor = () => {
        this.setState({colorefavorito: "purple"});
    }
    render() {
        return (
        <div>
            <h2>ciao io sono un cliente</h2>
            <p>il mio colore preferito è {this.state.colorefavorito}</p>
            <p>
                arrivo da {this.state.nazione} 
                abito in {this.state.indirizzo} e sono nato nel {this.state.anno}
            </p>
            <button type="button" onClick={this.changeNation}>cambia nazione</button>
            <button type="button" onClick={this.changeAnno}>cambia anno</button>
            <button type="button" onClick={this.changeColor}>cambia color</button>
 
            </div>
        );
    }
}

   

export default Customers;

