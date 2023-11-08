import React from "react";

class MyComponent extends React.Component {
    state = {
        name: "Marcus",
        age: 28,
    };
    render() {
        return (
            <div>
                My first component <br />
                My name is {this.state.name}, I'm {this.state.age}
            </div>
        );
    }
}

export default MyComponent;
