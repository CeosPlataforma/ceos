import React, { Component } from 'react'
import axios from 'axios';

function arrayBufferToBase64(buffer) {
    var binary = '';
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => binary += String.fromCharCode(b));
    return window.btoa(binary);
}

class Avatar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: ''
        }
    }

    componentDidMount() {
        axios.get("http://localhost:3333/get-foto")
        .then((response) => {
            console.log(response.data.foto.data.data);
            var base64Flag = `data:image/jpeg;base64,`;
            var imageString = arrayBufferToBase64(response.data.foto.data.data);
            this.setState({
                image: base64Flag + imageString
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() {
        const { image } = this.state;

        return (
            <div>
                <img src={image} className="dados-pessoais--user-img" alt="Foto de perfil" />
            </div>
        )
    }
}

export default Avatar;