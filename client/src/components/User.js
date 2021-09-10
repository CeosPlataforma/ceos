import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
    render() {
        return (
            <div className="materias--user">
                <Link className="materias--user--name" to={"/dados-pessoais"}>Nome do usuário</Link>
            </div>
        )
    }
}

export default User;