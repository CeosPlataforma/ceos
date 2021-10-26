import React, { Component } from "react";
import { Link } from "react-router-dom";

class SidebarMob extends Component {

    render() {
        return (
            <div className="sidebar--mobile">
                <ul className="nav_list nav_list-mobile">
                    <li>
                        <Link id={window.location.pathname == "/painel" ? "active" : ""} to={"painel"}>
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 512 512" xmlSpace="preserve">
                                <path d="M433,216.061c0-11.046-8.954-20-20-20H297c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h116
                                        C424.046,236.061,433,227.107,433,216.061z"/>
                                <path d="M297,276.061c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h76c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20H297
                                        z"/>
                                <path d="M492,236.061c11.046,0,20-8.954,20-20v-100c0-44.112-35.888-80-80-80H80c-44.112,0-80,35.888-80,80v200
                                        c0,44.112,35.888,80,80,80h156v39.878h-70c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h180c11.046,0,20-8.954,20-20
                                        c0-11.046-8.954-20-20-20h-70v-39.878h156c44.112,0,80-35.888,80-80c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20
                                        c0,22.056-17.944,40-40,40H80c-22.056,0-40-17.944-40-40v-200c0-22.056,17.944-40,40-40h352c22.056,0,40,17.944,40,40v100
                                        C472,227.107,480.954,236.061,492,236.061z"/>
                                <path d="M215,196.061H99c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h116c11.046,0,20-8.954,20-20
                                        C235,205.015,226.046,196.061,215,196.061z"/>
                                <path d="M413,116.061H297c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h116c11.046,0,20-8.954,20-20
                                        C433,125.015,424.046,116.061,413,116.061z"/>
                                <path d="M215,116.061H99c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h116c11.046,0,20-8.954,20-20
                                        C235,125.015,226.046,116.061,215,116.061z"/>
                                <path d="M215,276.061H99c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20h116c11.046,0,20-8.954,20-20
                                        C235,285.015,226.046,276.061,215,276.061z"/>
                            </svg>
                            <span className="links_name">Painel</span>
                        </Link>
                    </li>
                    <li>
                        <Link id={window.location.pathname == "/cronograma" ? "active" : ""} to={"cronograma"}>
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 512 512" xmlSpace="preserve">
                                <path d="M492,352c11.046,0,20-8.954,20-20V120c0-44.112-35.888-80-80-80h-26V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20
                                            v20h-91V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v20h-90V20c0-11.046-8.954-20-20-20s-20,8.954-20,20v20H80
                                            C35.888,40,0,75.888,0,120v312c0,44.112,35.888,80,80,80h352c44.112,0,80-35.888,80-80c0-11.046-8.954-20-20-20
                                            c-11.046,0-20,8.954-20,20c0,22.056-17.944,40-40,40h-76V352H492z M472,312H356V192h116V312z M156,472H80
                                            c-22.056,0-40-17.944-40-40v-80h116V472z M156,312H40V192h116V312z M316,472H196V352h120V472z M316,312H196V192h120V312z M40,152
                                            v-32c0-22.056,17.944-40,40-40h25v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80h90v20c0,11.046,8.954,20,20,20s20-8.954,20-20V80
                                            h91v20c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V80h26c22.056,0,40,17.944,40,40v32H40z"/>
                            </svg>
                            <span className="links_name">Cronograma</span>
                        </Link>
                    </li>
                    <li>
                        <Link id={window.location.pathname == "/materias" ? "active" : ""} to={"/materias"}>
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 512 512" xmlSpace="preserve">
                                <path d="M178,375c11.046,0,20-8.954,20-20V214c0-11.046-8.954-20-20-20s-20,8.954-20,20v141C158,366.046,166.954,375,178,375z" />
                                <path d="M402,164v151c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V164c0-11.046-8.954-20-20-20
                                        C410.954,144,402,152.954,402,164z"/>
                                <path d="M492,334c11.046,0,20-8.954,20-20V20c0-11.046-8.954-20-20-20H351c-11.046,0-20,8.954-20,20v60h-63V63
                                        c0-11.046-8.954-20-20-20H127V20c0-11.046-8.954-20-20-20H20C8.954,0,0,8.954,0,20v472c0,11.046,8.954,20,20,20h472
                                        c11.046,0,20-8.954,20-20v-80c0-11.046-8.954-20-20-20H371V40h101v274C472,325.046,480.954,334,492,334z M87,472H40v-40h47V472z
                                        M87,392H40V120h47V392z M87,80H40V40h47V80z M228,472H127V83h101V472z M331,472h-63V200h63V472z M331,160h-63v-40h63V160z
                                        M472,432v40H371v-40H472z"/>
                            </svg>
                            <span className="links_name">Matérias</span>
                        </Link>
                    </li>
                    <li>
                        <Link id={window.location.pathname == "/atividades" ? "active" : ""} to={"atividades"}>
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 512 512" xmlSpace="preserve">
                                <path d="M352.459,220c0-11.046-8.954-20-20-20h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206
                                        C343.505,240,352.459,231.046,352.459,220z"/>
                                <path d="M126.459,280c-11.046,0-20,8.954-20,20c0,11.046,8.954,20,20,20H251.57c11.046,0,20-8.954,20-20c0-11.046-8.954-20-20-20
                                        H126.459z"/>
                                <path d="M173.459,472H106.57c-22.056,0-40-17.944-40-40V80c0-22.056,17.944-40,40-40h245.889c22.056,0,40,17.944,40,40v123
                                        c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20V80c0-44.112-35.888-80-80-80H106.57c-44.112,0-80,35.888-80,80v352
                                        c0,44.112,35.888,80,80,80h66.889c11.046,0,20-8.954,20-20C193.459,480.954,184.505,472,173.459,472z"/>
                                <path d="M467.884,289.572c-23.394-23.394-61.458-23.395-84.837-0.016l-109.803,109.56c-2.332,2.327-4.052,5.193-5.01,8.345
                                        l-23.913,78.725c-2.12,6.98-0.273,14.559,4.821,19.78c3.816,3.911,9,6.034,14.317,6.034c1.779,0,3.575-0.238,5.338-0.727
                                        l80.725-22.361c3.322-0.92,6.35-2.683,8.79-5.119l109.573-109.367C491.279,351.032,491.279,312.968,467.884,289.572z
                                        M333.776,451.768l-40.612,11.25l11.885-39.129l74.089-73.925l28.29,28.29L333.776,451.768z M439.615,346.13l-3.875,3.867
                                        l-28.285-28.285l3.862-3.854c7.798-7.798,20.486-7.798,28.284,0C447.399,325.656,447.399,338.344,439.615,346.13z"/>
                                <path d="M332.459,120h-206c-11.046,0-20,8.954-20,20s8.954,20,20,20h206c11.046,0,20-8.954,20-20S343.505,120,332.459,120z" />
                            </svg>
                            <span className="links_name">Atividades</span>
                        </Link>

                    </li>
                    <li>
                        <Link id={window.location.pathname == "/desempenho" ? "active" : ""} to={"/desempenho"}>
                            <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 512.001 512.001" xmlSpace="preserve">
                                <path d="M506.617,46.371C502.833,42.308,497.531,40,491.979,40h-81.152c0.129-6.524,0.193-13.188,0.193-20
                                            c0-11.046-8.954-20-20-20h-270c-11.046,0-20,8.954-20,20c0,6.812,0.064,13.476,0.193,20H20.021
                                            c-5.552,0-10.854,2.308-14.637,6.371c-3.783,4.063-5.708,9.516-5.312,15.054c0.114,1.599,3.091,39.716,28.72,88.743
                                            c14.855,28.419,34.368,54.938,57.994,78.819c28.755,29.065,63.71,54.25,103.9,74.904c18.457,21.856,35.811,42.68,45.333,69.916
                                            l0.001,32.513c-10.341,2.857-24.442,7.336-38.639,13.662c-51.542,22.964-62.36,51.839-62.36,72.019c0,11.046,8.954,20,20,20h200
                                            c11.046,0,20-8.954,20-20c0-19.663-10.602-48.002-61.11-71.343c-13.925-6.435-27.755-11.074-37.89-14.059l-0.001-34.313
                                            c9.388-26.689,26.528-46.895,44.735-68.097c53.546-27.425,97.406-62.582,130.374-104.529c6.826-8.685,5.318-21.258-3.366-28.083
                                            c-8.686-6.826-21.258-5.318-28.083,3.366c-12.011,15.283-25.702,29.582-40.996,42.843C395.469,179.744,405.225,135.43,409.082,80
                                            h58.831c-1.128,4.366-2.554,9.287-4.35,14.66c-3.502,10.476,2.151,21.807,12.627,25.309c2.104,0.703,4.241,1.038,6.343,1.038
                                            c8.367-0.001,16.167-5.293,18.966-13.665c8.838-26.438,10.293-44.001,10.43-45.917C512.324,55.887,510.4,50.435,506.617,46.371z
                                            M65.216,133.486C53.918,112.279,47.6,93.469,44.109,80h58.85c3.866,55.563,13.661,99.953,30.522,138.057
                                            C104.887,193.352,82.05,165.087,65.216,133.486z M322.276,472h-134.81c8.52-7.008,19.373-12.416,25.657-15.24
                                            c17.333-7.791,35.083-12.433,42.807-14.253C276.216,447.486,305.628,458.545,322.276,472z M323.309,236.295
                                            c-9.55,14.645-20.464,27.353-32.019,40.806c-12.358,14.388-24.966,29.067-35.638,46.139
                                            c-10.649-17.032-23.143-31.823-35.391-46.324c-11.369-13.46-22.106-26.172-31.528-40.621
                                            C157.565,188.501,143.052,129.072,141.22,40h229.601C368.989,129.072,354.476,188.501,323.309,236.295z"/>
                                <path d="M236.021,139.322V195c0,11.046,8.954,20,20,20c11.046,0,20-8.954,20-20v-94c0-7.457-4.149-14.296-10.763-17.739
                                            c-6.616-3.445-14.597-2.921-20.706,1.354l-30,21c-9.049,6.333-11.25,18.804-4.916,27.854
                                            C215.634,142.036,227.133,144.465,236.021,139.322z"/>
                            </svg>
                            <span className="links_name">Desempenho</span>
                        </Link>

                    </li>
                    <li>
                        <Link id={window.location.pathname == "/dados-pessoais" ? "active" : ""} to={"/dados-pessoais"}>
                            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 456.368 456.368" xmlSpace="preserve">
                                <path d="M324.194,220.526c-6.172,7.772-13.106,14.947-21.07,21.423c45.459,26.076,76.149,75.1,76.149,131.158
                                        c0,30.29-66.367,54.018-151.09,54.018s-151.09-23.728-151.09-54.018c0-56.058,30.69-105.082,76.149-131.158
                                        c-7.963-6.476-14.897-13.65-21.07-21.423c-50.624,31.969-84.322,88.41-84.322,152.581c0,19.439,10.644,46.53,61.355,65.201
                                        c31.632,11.647,73.886,18.06,118.979,18.06c45.093,0,87.347-6.413,118.979-18.06c50.71-18.671,61.355-45.762,61.355-65.201
                                        C408.516,308.936,374.818,252.495,324.194,220.526z"/>
                                <path d="M228.182,239.795c56.833,0,100.597-54.936,100.597-119.897C328.779,54.907,284.993,0,228.182,0
                                        c-56.833,0-100.597,54.936-100.597,119.897C127.585,184.888,171.372,239.795,228.182,239.795z M228.182,29.243
                                        c39.344,0,71.354,40.667,71.354,90.654s-32.01,90.654-71.354,90.654s-71.354-40.667-71.354-90.654S188.838,29.243,228.182,29.243
                                        z"/>
                            </svg>
                            <span className="links_name">Dados pessoais</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/logout"}>
                            <svg viewBox="0 0 511 512" xmlns="http://www.w3.org/2000/svg" class="sidebar-icon--sair"><path d="m361.5 392v40c0 44.113281-35.886719 80-80 80h-201c-44.113281 0-80-35.886719-80-80v-352c0-44.113281 35.886719-80 80-80h201c44.113281 0 80 35.886719 80 80v40c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20v-40c0-22.054688-17.945312-40-40-40h-201c-22.054688 0-40 17.945312-40 40v352c0 22.054688 17.945312 40 40 40h201c22.054688 0 40-17.945312 40-40v-40c0-11.046875 8.953125-20 20-20s20 8.953125 20 20zm136.355469-170.355469-44.785157-44.785156c-7.8125-7.8125-20.476562-7.8125-28.285156 0-7.8125 7.808594-7.8125 20.472656 0 28.28125l31.855469 31.859375h-240.140625c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h240.140625l-31.855469 31.859375c-7.8125 7.808594-7.8125 20.472656 0 28.28125 3.90625 3.90625 9.023438 5.859375 14.140625 5.859375 5.121094 0 10.238281-1.953125 14.144531-5.859375l44.785157-44.785156c19.496093-19.496094 19.496093-51.214844 0-70.710938zm0 0" /></svg>
                            <span className="links_name">Sair</span>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default SidebarMob;