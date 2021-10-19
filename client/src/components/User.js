import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
    render() {
        return (
            <Link to={"/dados-pessoais"} className="user">
                <p className="user--name">Nome do usuário</p>
                <div className="user--photo"></div>
            </Link>
        )
    }
}

export default User;