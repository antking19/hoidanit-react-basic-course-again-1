import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";
import { useState } from "react";

// class MyComponent extends React.Component {
//     state = {
//         listUsers: [
//             { id: 1, name: "Marcus", age: 18 },
//             { id: 2, name: "Cheung", age: 30 },
//             { id: 3, name: "Cuong", age: 33 },
//         ],
//     };

//     handleAddNewUser = (userObj) => {
//         console.log(userObj);
//         this.setState({
//             listUsers: [userObj, ...this.state.listUsers],
//         });
//     };

//     handleDeleteUser = (userId) => {
//         let listUsersClone = [...this.state.listUsers];
//         listUsersClone = listUsersClone.filter((item) => item.id !== userId);
//         this.setState({
//             listUsers: listUsersClone,
//         });
//     };

//     render() {
//         return (
//             <div>
//                 <AddUserInfor handleAddNewUser={this.handleAddNewUser} />
//                 <br />
//                 <br />
//                 <DisplayInfor
//                     listUsers={this.state.listUsers}
//                     handleDeleteUser={this.handleDeleteUser}
//                 />
//             </div>
//         );
//     }
// }

const MyComponent = (props) => {
    const [listUsers, setListUsers] = useState([
        { id: 1, name: "Marcus", age: 18 },
        { id: 2, name: "Cheung", age: 30 },
        { id: 3, name: "Cuong", age: 33 },
    ]);

    const handleAddNewUser = (userObj) => {
        console.log(userObj);
        setListUsers([userObj, ...listUsers]);
    };

    const handleDeleteUser = (userId) => {
        let listUsersClone = [...listUsers];
        listUsersClone = listUsersClone.filter((item) => item.id !== userId);
        setListUsers(listUsersClone);
    };
    return (
        <div>
            <AddUserInfor handleAddNewUser={handleAddNewUser} />
            <br />
            <br />
            <DisplayInfor
                listUsers={listUsers}
                handleDeleteUser={handleDeleteUser}
            />
        </div>
    );
};

export default MyComponent;
