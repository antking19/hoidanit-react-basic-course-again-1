import React from "react";

class MyComponent extends React.Component {
    state = {
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
        event.preventDefault();
        this.setState({
            name: event.target.value,
        });
    };

    render() {
        return (
            <div>
                My first component <br />
                My name is {this.state.name}, I'm {this.state.age}
                {/* <button onClick={() => this.handleClick()}>Click Me</button> */}
                <form>
                    <input
                        type="text"
                        onChange={(event) => this.handleOnChangeInput(event)}
                    />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default MyComponent;
