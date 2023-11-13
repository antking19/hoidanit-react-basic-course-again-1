import React from "react";

class DisplayInfor extends React.Component {
    state = {
        hideShowListUser: true,
    };

    handleHideShowListUser = () => {
        this.setState({
            hideShowListUser: !this.state.hideShowListUser,
        });
    };

    render() {
        const { listUsers } = this.props;
        return (
            <div>
                <div onClick={() => this.handleHideShowListUser()}>
                    {this.state.hideShowListUser
                        ? "Show List User"
                        : "Hide List User"}
                </div>
                {this.state.hideShowListUser && (
                    <div>
                        {listUsers.map((user, index) => {
                            return (
                                <div
                                    key={index}
                                    className={user.age >= 30 ? "green" : "red"}
                                >
                                    My name is {user.name} <br />
                                    I'm {user.age} years old
                                    <hr />
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    }
}

export default DisplayInfor;
