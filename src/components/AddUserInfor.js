import React from "react";
import { useState } from "react";

// class AddUserInfor extends React.Component {
//     state = {
//         name: "",
//         age: "",
//     };

//     handleClick() {
//         console.log(">> Click Event");
//         this.setState({
//             name: "Kien Cuong",
//             age: 33,
//         });
//     }

//     handleOnChangeInput = (event) => {
//         this.setState({
//             name: event.target.value,
//         });
//     };

//     handleOnChangeAge = (event) => {
//         this.setState({
//             age: event.target.value,
//         });
//     };

//     handleOnSubmitInput = (event) => {
//         event.preventDefault();

//         this.props.handleAddNewUser({
//             id: Math.floor(Math.random() * 100) + 1 + "-random",
//             name: this.state.name,
//             age: +this.state.age,
//         });
//     };
//     render() {
//         return (
//             <div>
//                 My first component <br />
//                 My name is {this.state.name}, I'm {this.state.age}
//                 {/* <button onClick={() => this.handleClick()}>Click Me</button> */}
//                 <form onSubmit={(event) => this.handleOnSubmitInput(event)}>
//                     Name:
//                     <input
//                         type="text"
//                         value={this.state.name}
//                         onChange={(event) => this.handleOnChangeInput(event)}
//                     />
//                     Age:{" "}
//                     <input
//                         type="text"
//                         value={this.state.age}
//                         onChange={(event) => this.handleOnChangeAge(event)}
//                     />
//                     <button>Submit</button>
//                 </form>
//             </div>
//         );
//     }
// }

const AddUserInfor = (props) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const handleClick = () => {
        console.log(">> Click Event");
        setName("Kien Cuong");
        setAge(33);
    };

    const handleOnChangeInput = (event) => {
        setName(event.target.value);
    };

    const handleOnChangeAge = (event) => {
        setAge(event.target.value);
    };

    const handleOnSubmitInput = (event) => {
        event.preventDefault();

        props.handleAddNewUser({
            id: Math.floor(Math.random() * 100) + 1 + "-random",
            name: name,
            age: +age,
        });
    };

    return (
        <div>
            My first component <br />
            My name is {name}, I'm {age}
            {/* <button onClick={() => this.handleClick()}>Click Me</button> */}
            <form onSubmit={(event) => handleOnSubmitInput(event)}>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(event) => handleOnChangeInput(event)}
                />
                Age:{" "}
                <input
                    type="text"
                    value={age}
                    onChange={(event) => handleOnChangeAge(event)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default AddUserInfor;
