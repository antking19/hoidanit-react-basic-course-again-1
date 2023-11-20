import React from "react";
import "./DisplayInfor.scss";
import { useState } from "react";

// class DisplayInfor extends React.Component {
//     state = {
//         hideShowListUser: true,
//     };

//     handleHideShowListUser = () => {
//         this.setState({
//             hideShowListUser: !this.state.hideShowListUser,
//         });
//     };

//     render() {
//         const { listUsers } = this.props;
//         return (
//             <div className="display-infor-container">
//                 <div onClick={() => this.handleHideShowListUser()}>
//                     {this.state.hideShowListUser
//                         ? "Hide List User"
//                         : "Show List User"}
//                 </div>
//                 {this.state.hideShowListUser && (
//                     <>
//                         {listUsers.map((user, index) => {
//                             return (
//                                 <div
//                                     key={index}
//                                     className={user.age >= 30 ? "green" : "red"}
//                                 >
//                                     My name is {user.name} <br />
//                                     I'm {user.age} years old <br />
//                                     <button
//                                         onClick={() =>
//                                             this.props.handleDeleteUser(user.id)
//                                         }
//                                     >
//                                         Delete
//                                     </button>
//                                     <hr />
//                                 </div>
//                             );
//                         })}
//                     </>
//                 )}
//             </div>
//         );
//     }
// }

const DisplayInfor = (props) => {
    const { listUsers } = props;
    const [isShowHideListUser, setShowHideListUser] = useState(true);

    const handleShowHideListUser = () => {
        setShowHideListUser(!isShowHideListUser);
    };

    return (
        <div className="display-infor-container">
            <div onClick={() => handleShowHideListUser()}>
                {isShowHideListUser ? "Hide List User" : "Show List User"}
            </div>
            {isShowHideListUser && (
                <>
                    {listUsers.map((user, index) => {
                        return (
                            <div
                                key={index}
                                className={user.age >= 30 ? "green" : "red"}
                            >
                                My name is {user.name} <br />
                                I'm {user.age} years old <br />
                                <button
                                    onClick={() =>
                                        props.handleDeleteUser(user.id)
                                    }
                                >
                                    Delete
                                </button>
                                <hr />
                            </div>
                        );
                    })}
                </>
            )}
        </div>
    );
};

export default DisplayInfor;
