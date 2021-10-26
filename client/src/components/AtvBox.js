import React from "react";

export default function AtvBox({ title, materia, tipo, data, excluir }) {

    return (
        <div className="atvBox">
            <h2>{title}</h2>
            <hr />


            <div className="topic">
                <svg viewBox="-77 0 512 512" xmlns="http://www.w3.org/2000/svg" className="atvSvg">
                    <path d="m234.324219 387.695312h124.304687v-387.695312h-358.628906v512h234.324219zm-149.800781-299.476562h190.492187v30h-190.492187zm0 69.78125h190.492187v30h-190.492187zm0 69.78125h190.492187v30h-190.492187zm0 69.78125h190.492187v30h-190.492187zm0 0" />
                    <path d="m349.84375 417.695312h-85.519531v85.519532zm0 0" />
                </svg> {materia != null ? <h5>{materia}</h5> : ""}
            </div>

            <div className="topic">
                <svg viewBox="-86 0 512 512.00003" xmlns="http://www.w3.org/2000/svg" className="atvSvg">
                    <path d="m60.191406 0h219.367188v82.042969h-219.367188zm0 0" />
                    <path d="m244.597656 174.105469v-62.074219h-149.449218v62.070312c-56.796876 27.769532-93.472657 84.578126-95.148438 148.132813h339.75c-1.679688-63.554687-38.351562-120.363281-95.152344-148.128906zm0 0" />
                    <path d="m122.523438 352.226562v107.160157l47.351562 52.613281 47.355469-52.613281v-107.160157zm0 0" />
                </svg> <h5>{tipo}</h5>
            </div>

            <div className="topic">
                <svg viewBox="0 -22 512 512" xmlns="http://www.w3.org/2000/svg" className="atvSvg">
                    <path d="m215.167969 189.589844h81.667969v72.785156h-81.667969zm0 0" />
                    <path d="m104.5 189.589844h80.667969v72.785156h-80.667969zm0 0" />
                    <path d="m104.5 292.375h80.667969v80.214844h-80.667969zm0 0" />
                    <path d="m443.53125 53.589844v53.589844h-30v-53.589844h-29.78125v53.589844h-30v-53.589844h-195.5v53.589844h-30v-53.589844h-29.78125v53.589844h-30v-53.589844h-68.46875v106h512v-106zm0 0" /><path d="m437.5 402.589844h-363v-213h-74.5v279h512v-279h-74.5zm0 0" /><path d="m326.832031 189.589844h80.667969v72.785156h-80.667969zm0 0" /><path d="m326.832031 292.375h80.667969v80.214844h-80.667969zm0 0" /><path d="m215.167969 292.375h81.667969v80.214844h-81.667969zm0 0" /><path d="m68.46875 0h30v53.589844h-30zm0 0" />
                    <path d="m128.25 0h30v53.589844h-30zm0 0" />
                    <path d="m353.75 0h30v53.589844h-30zm0 0" />
                    <path d="m413.53125 0h30v53.589844h-30zm0 0" />
                </svg> <h5>{data}</h5>
            </div>

            <div className="d-flex justify-content-between">
                <button type="button" className={excluir == true ? "btn btn-light" : "btn btn-light w-100"}>Visualizar</button>
                <button type="button" className="btn btn-danger" id={excluir == true ? "" : "none"}>X</button>
            </div>
        </div>
    );
}