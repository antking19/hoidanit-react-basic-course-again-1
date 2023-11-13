import React from "react";

class AddUserInfor extends React.Component {
    state = {
        id: 1,
        name: "Marcus",
        age: 28,
    };

    handleClick() {
        console.log(">> Click Event");
        this.setState({
            name: "Kien Cuong",
            age: 33,
        });
    }

    handleOnChangeInput = (event) => {
        this.setState({
            name: event.target.value,
        });
    };

    handleOnChangeAge = (event) => {
        this.setState({
            age: event.target.value,
        });
    };

    handleOnSubmitInput = (event) => {
        event.preventDefault();

        this.props.handleAddNewUser({
            id: Math.floor(Math.random() * 100) + 1 + "-random",
            name: this.state.name,
            age: +this.state.age,
        });
    };
    render() {
        return (
            <div>
                My first component <br />
                My name is {this.state.name}, I'm {this.state.age}
                {/* <button onClick={() => this.handleClick()}>Click Me</button> */}
                <form onSubmit={(event) => this.handleOnSubmitInput(event)}>
                    Name:
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    Age:{" "}
                    <input
                        type="text"
                        value={this.state.age}
                        onChange={(event) => this.handleOnChangeAge(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddUserInfor;
