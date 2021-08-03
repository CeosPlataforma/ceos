import React, { useState } from "react";
import Axios from "axios";

export default function Fuck() {
    
    const [texto, setTexto] = useState("");
    const [vapo, setVapo] = useState("");
    const [cuzinho, setCuzinho] = useState("");

    cuzinho === '' ? setCuzinho("SUBMIT") : cuzinho

    const cu = () => {
        Axios.post("http://localhost:3333/fuck", {

            fodase: texto,
            fods: vapo

        }).then((response) => {

            console.log(response.data);
            setCuzinho(response.data.return);

        });
    };

    return (
        <div className="App">
            <div className="fuck">
                <h1>teste fodido</h1>

                <label>texto</label>&nbsp;
                <input type="text" onChange={(e) => {
                    setTexto(e.target.value);
                }}/> <br />

                <label>vapo</label>&nbsp;
                <input type="text" onChange={(e) => {
                    setVapo(e.target.value);
                }}/> <br />

                <button onClick={cu}>{cuzinho}</button>
            </div>
        </div>
    );
}