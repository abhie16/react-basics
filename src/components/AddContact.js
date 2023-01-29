import React from "react";

class AddContact extends React.Component {
    render() {
        return (
            <div className="ui container main">
            <h2>Add Contact</h2>
            <form className="ui container form">
                <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" placeholder="Name"></input>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type="text" name="email" placeholder="Email"></input>
                </div>
            </form>
            </div>
        );
    }
}

export default AddContact;