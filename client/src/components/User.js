import React, { Component } from "react";
import { Link } from "react-router-dom";
import Avatar from '../components/Avatar'

class User extends Component {
    render() {
        return (
            <Link to={"/dados-pessoais"} className="user">
                <p className="user--name">Nome do usuário</p>
                <Avatar className="user--photo" />
            </Link>
        )
    }
}

export default User;