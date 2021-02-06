import React, { Component } from "react";

class DropDown extends Component {

    state = {
        dropDownOptions: [
            {
                id: 1,
                name: "Option-1",
                value: "1 is the number of Gods in monotheism."
            },
            {
                id: 2,
                name: "Option-2",
                value: "2 is the number of stars in a binary star system (a stellar system consisting of two stars orbiting around their center of mass)."
            },
            {
                id: 3,
                name: "Option-3",
                value: "3 is the number of notes in a triad, the basic form of any chord."
            },
            {
                id: 4,
                name: "Option-4",
                value: "4 is the number of legs most furniture has"
            }
        ]
    };

    changeHandler = (event) => {

        this.state.dropDownOptions.forEach((item) => {
            if (item.name === event.target.value) {
                console.log("click " + event.target.value);
                this.setState({ cardValue: item });
            }
        }

        );
    }
    render() {
        return (
            <div className="container">
                <div className="row text-center">
                    <div className="col align-self-center">
                        <h1> Tutorial-4 Website</h1>
                        <h3> Select the below number to show a Trivia</h3>
                    </div>
                </div>
                <div className="row mt-5 text-center">
                    <div className="col align-self-center">

                        <select name="options" id="dropdown-menu" onChange={this.changeHandler}>
                            {
                                this.state.dropDownOptions.map(dropDownOptions => (
                                    <option
                                        key={dropDownOptions.id}>
                                        {dropDownOptions.name}
                                    </option>
                                ))
                            }
                        </select>
                    </div>
                </div>

                <div className={this.checkCard() ? "card mt-5" : "invisible"}>
                    <div className="card-body">
                        <h5 className="card-title">{this.checkCard() ? this.state.cardValue.name : ""}</h5>
                        <p className="card-text">{this.checkCard() ? this.state.cardValue.value : ""}</p>
                    </div>
                </div>

            </div >
        );
    }
    //check if data for card exist
    checkCard() {
        if (this.state.cardValue === undefined) {
            return false
        }
        return true
    }
}
export default DropDown;