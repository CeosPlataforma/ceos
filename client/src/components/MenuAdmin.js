import React from "react";
import { Link } from "react-router-dom";

export default function MenuAdmin() {
    return (
        <>
            <div className="sidebar-admin">
                <div className="logo_content">
                    <div className="logo">
                        <svg version="1.1" id="LogoOfc__Branco_1_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px"
                            y="0px" viewBox="0 0 720 720" xmlSpace="preserve">
                            <g id="Logo_1_">
                                <g id="Elipse_1">
                                    <g>
                                        <circle className="st0" cx="360.9" cy="301.03" r="298.65" />
                                    </g>
                                </g>
                                <g id="Coruja_1_">
                                    <polygon className="st1" points="410.91,436.31 410.17,435.69 495.38,336.65 496.12,337.27" />
                                    <g id="Corpo_2_">
                                        <g id="Pés">
                                            <g>
                                                <path className="st2" d="M424.02,486.88c-1.42-2.99-4.61-5.39-10.41-6.63c-9.21-1.96-15.72,2.73-25.56,0.95
                                                        c-3.34-0.6-5.43-1.51-5.68-2.84c-0.3-1.6,2.15-3.29,2.84-3.79c2.63-1.89,7.53-9.74,11.36-18.93c1.71-4.1,7.81-19.98,2.84-23.67
                                                        c-3.43-2.54-11.01,1.57-17.99,6.63c-23.94,17.35-36.71,51.58-28.4,58.69c1.05,0.9,5.17,1.46,10.41,0.95
                                                        c3.85-0.38,7.81-1.16,9.47-1.89c1.38-0.61,3.5-1.71,5.68-0.95c2.25,0.79,4.14,3.44,3.79,5.68c-0.28,1.79-2.09,2.64-3.79,4.73
                                                        c-1.45,1.8-2.08,3.25-1.89,3.79c1.03,3.04,12.68,4.01,18.93-1.89c1.08-1.02,4.73-4.83,3.79-8.52
                                                        c-0.42-1.64-2.25-3.05-1.89-3.79c0.35-0.71,2.16-0.19,4.73,0c3.41,0.25,5.56-0.43,6.63,0.95c0.81,1.05,0.86,2.91,0,3.79
                                                        c-0.87,0.9-2.52,0.31-2.84,0.95c-0.39,0.78,1.4,2.97,3.79,3.79c4.29,1.47,9.6-1.89,12.31-5.68
                                                        C423.71,496.97,426.35,491.81,424.02,486.88z"/>
                                            </g>
                                        </g>
                                        <g id="Corpo">
                                            <g>
                                                <path className="st3" d="M503.54,104.43c-3.11-3.62-7.62-7.54-13.25-11.36c-8.04-5.46-16.71-9.2-28.4-12.31
                                                        c-27.51-7.32-49.72-5.88-63.43-1.89c-5.56,1.62-10.15,3.49-14.2,5.68c-14.91,8.09-23.25,19.78-29.35,30.29
                                                        c-10.1,17.41-22.92,45.8-26.51,61.53c-1.27,5.58-5.57,13.17-8.52,17.04c-0.58,0.76-1.22,1.39-1.89,1.89
                                                        c-1.79,1.34-4.21,1.81-4.73,1.89c-3.87,0.59-11.01,3.97-17.99,7.57c-8.75,4.52-18.49,11.83-28.4,23.67
                                                        c-14.67,17.53-20.53,36.23-24.61,54.91c-4.92,22.54-5.54,44.87-8.52,64.37c-0.98,6.39-1.72,23.51-1.89,36.92
                                                        c-0.08,6.42,0.12,12.91,2.84,20.83c4.08,11.88,12.58,19.49,17.04,27.45c6.22,11.1,8.54,22.22,8.52,27.45
                                                        c-0.03,6.7-1.56,14.18-4.73,20.83c-2.59,5.42-5.8,9.54-4.73,15.15c0.83,4.33,5.52,7.8,4.73,12.31
                                                        c-0.5,2.84-2.74,3.98-3.79,6.63c-0.52,1.32-0.91,5.23,0,9.47c0.44,2.03,1.99,4.61,1.89,7.57c-0.08,2.36-1.28,3.96-0.95,6.63
                                                        c0.43,3.47,2.98,5.93,3.79,6.63c7.24,6.21,24.06-1.29,33.13-5.68c23.73-11.49,48.36-26.13,56.8-34.08
                                                        c12.44-11.73,25.82-28.36,33.13-44.49c2.9-6.39,7.41-15.12,7.57-16.09c0.09-0.54,0.37-2.51,1.89-3.79
                                                        c0.89-0.74,2.12-1.02,2.39-1.07c3.02-0.56,10.54-5.07,17.49-9.34c10.64-6.55,25.31-18,37.87-32.19
                                                        c14.59-16.48,28.86-39.8,39.76-72.89c5.74-17.43,7.57-32.22,11.36-50.17c5.83-27.65,18.25-79.72,19.88-119.28
                                                        C518.42,139.91,516.84,119.94,503.54,104.43z"/>
                                            </g>
                                        </g>
                                    </g>
                                    <g id="Rosto">
                                        <g>
                                            <path className="st4" d="M500.47,113.45c-5.6-8.78-11.82-14.22-17.72-17.72c-8.52-5.05-18.31-7.43-28.35-7.09
                                                    c-7.61,4.57-15.22,9.13-22.83,13.7c-7.61-4.57-15.22-9.13-22.83-13.7c-10.04-0.34-19.83,2.03-28.35,7.09
                                                    c-5.9,3.5-12.12,8.94-17.72,17.72c-13.94,21.85-15.64,56.57,3.54,81.52c9.39,12.21,22.7,20.61,37.81,24.81
                                                    c2.32,0.92,4.69,1.71,7.09,2.36c6.65,1.82,13.52,2.6,20.47,2.38c6.95,0.22,13.81-0.56,20.47-2.38c2.4-0.66,4.77-1.44,7.09-2.36
                                                    c15.11-4.2,28.42-12.6,37.81-24.81C516.11,170.02,514.41,135.29,500.47,113.45z"/>
                                        </g>
                                    </g>
                                    <g id="Olhos_x2F_Bico">
                                        <g>
                                            <path className="st5" d="M401.01,135.95c-4.22,0-7.65,4.47-7.65,9.99c0,5.52,3.42,9.99,7.65,9.99c4.22,0,7.65-4.47,7.65-9.99
                                                    C408.66,140.42,405.24,135.95,401.01,135.95z M462.48,135.95c-4.25,0-7.69,4.47-7.69,9.99c0,5.52,3.44,9.99,7.69,9.99
                                                    s7.69-4.47,7.69-9.99C470.17,140.42,466.73,135.95,462.48,135.95z M431.19,171.34c-2.97-0.27-5.22,2.54-5.91,3.54
                                                    c-2.45,3.56-1.78,8.13,0,14.18c2.44,8.31,4.31,13,5.91,13c2.03-0.01,3.79-5.35,5.91-15.36c0.66-3.11,1.42-7.79-1.18-11.81
                                                    C434.46,172.62,432.85,171.49,431.19,171.34z"/>
                                        </g>
                                    </g>
                                </g>
                                <g id="Constelação">
                                    <g>
                                        <path className="st1" d="M413.03,421.89c-7.05-1.49-13.96,2.94-15.44,9.9c-0.4,1.89-0.35,3.76,0.07,5.53l-24.19,3.39
                                                c-0.37-5.63-4.47-10.59-10.34-11.83c-4.03-0.85-8.01,0.23-10.96,2.62l-11.83-14.98c2.93-1.78,5.15-4.69,5.91-8.29
                                                c1.47-6.96-3.05-13.82-10.1-15.31c-4.37-0.93-8.68,0.43-11.68,3.24l-31.6-41.21c3.06-1.76,5.39-4.74,6.18-8.44
                                                c1.47-6.96-3.05-13.82-10.1-15.31c-2.51-0.53-5-0.3-7.23,0.52l-21.13-83.31c4.38-1.32,7.91-4.89,8.91-9.63
                                                c1.47-6.96-3.05-13.82-10.1-15.31c-5.9-1.25-11.68,1.66-14.29,6.71l-47.93-23.71c0.16-0.47,0.3-0.96,0.41-1.46
                                                c1.47-6.96-3.05-13.82-10.1-15.31c-7.05-1.49-13.96,2.94-15.44,9.9c-1.47,6.96,3.05,13.82,10.1,15.31
                                                c1.87,0.4,3.73,0.36,5.48-0.01l-2.65,30.37c-5.69,0.34-10.68,4.37-11.9,10.15c-1.47,6.96,3.05,13.82,10.1,15.31
                                                c0.41,0.09,0.82,0.15,1.23,0.2l16.3,138.91c-5.35,0.66-9.92,4.57-11.09,10.08c-1.04,4.91,0.91,9.76,4.62,12.72l-22.86,37.11
                                                c-1.05-0.55-2.19-0.98-3.42-1.24c-7.05-1.49-13.96,2.94-15.44,9.9c-1.47,6.96,3.05,13.82,10.1,15.31
                                                c6.89,1.46,13.64-2.75,15.32-9.44l23.69,5.02c-1.18,6.8,3.28,13.38,10.17,14.84c7.05,1.49,13.96-2.94,15.44-9.9
                                                c1.44-6.8-2.85-13.49-9.63-15.19l2.78-13.12c6.88,1.2,13.52-3.17,14.96-9.98c1.47-6.96-3.05-13.82-10.1-15.31
                                                c-3.36-0.71-6.67-0.07-9.39,1.54l-5.94-9.01c2.59-1.8,4.53-4.53,5.24-7.84c1.47-6.96-3.05-13.82-10.1-15.31
                                                c-1.14-0.24-2.28-0.31-3.39-0.26l-16.29-138.76c6.23,0.26,11.91-3.93,13.23-10.17c1.47-6.96-3.05-13.82-10.1-15.31
                                                c-0.86-0.18-1.72-0.27-2.56-0.29l2.67-30.59c3.64-1.08,6.7-3.72,8.22-7.29l47.85,23.67c-0.31,0.74-0.57,1.52-0.74,2.33
                                                c-1.47,6.96,3.05,13.82,10.1,15.31c1.91,0.4,3.81,0.36,5.59-0.04l21.17,83.44c-3.61,1.64-6.42,4.87-7.3,9.01
                                                c-1.47,6.96,3.05,13.82,10.1,15.31c2.96,0.63,5.88,0.2,8.4-1.01l31.79,41.45c-1.49,1.63-2.59,3.65-3.08,5.96
                                                c-1.47,6.96,3.05,13.82,10.1,15.31c3.07,0.65,6.1,0.18,8.68-1.14l11.95,15.13c-1.84,1.73-3.19,4.01-3.75,6.66
                                                c-1.47,6.96,3.05,13.82,10.1,15.31c7.05,1.49,13.96-2.94,15.44-9.9c0.18-0.85,0.27-1.69,0.27-2.52l24.4-3.42
                                                c1.36,4.33,4.98,7.84,9.79,8.85c7.05,1.49,13.96-2.94,15.44-9.9C424.6,430.24,420.08,423.38,413.03,421.89z M209.11,433.71
                                                l5.94,9.01c-2.59,1.8-4.53,4.53-5.24,7.84c-1.44,6.8,2.85,13.49,9.63,15.19l-2.78,13.12c-6.72-1.17-13.2,2.98-14.84,9.52
                                                l-23.69-5.02c0.91-5.26-1.56-10.38-5.92-13.11l22.8-37.01c1.38,0.94,2.96,1.64,4.7,2.01
                                                C203.08,435.96,206.39,435.31,209.11,433.71z M584.65,152.85c-7.05-1.49-13.96,2.94-15.44,9.9c-1.12,5.27,1.21,10.48,5.46,13.34
                                                l-21.72,28.56c-1.35-0.89-2.88-1.56-4.56-1.92c-7.05-1.49-13.96,2.94-15.44,9.9c-1.25,5.88,1.79,11.67,7.01,14.23l-40.25,96.4
                                                c-0.48-0.16-0.97-0.3-1.48-0.41c-7.05-1.49-13.96,2.94-15.44,9.9c-1.47,6.96,3.05,13.82,10.1,15.31
                                                c7.05,1.49,13.96-2.94,15.44-9.9c1.3-6.14-2.06-12.19-7.71-14.56l40.22-96.34c0.7,0.28,1.43,0.52,2.2,0.68
                                                c7.05,1.49,13.96-2.94,15.44-9.9c1.05-4.97-0.96-9.87-4.76-12.82l21.77-28.62c1.16,0.66,2.44,1.16,3.81,1.46
                                                c7.05,1.49,13.96-2.94,15.44-9.9C596.22,161.2,591.7,154.34,584.65,152.85z"/>
                                    </g>
                                </g>
                            </g>
                            <g id="CEOS">
                                <text transform="matrix(0.99 0 0 1.03 197.4575 716.0029)" className="st0 st6 st7 st8">CEOS</text>
                            </g>
                        </svg>
                    </div>
                </div>
                <ul className="nav_list">
                    <li>
                        <Link id={window.location.pathname === "/dashboard" ? "active" : ""} to={"/dashboard"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke-miterlimit="10" stroke-width="1.5" d="M21,17c0,0.552-0.448,1-1,1H5.586l-2.584,2.584L3.01,4.999C3.01,4.447,3.458,4,4.01,4H20c0.552,0,1,0.448,1,1V17z" /><path d="M11 7H13V9H11zM11 11H13V15H11z" /></svg>
                            <span className="links_name">Visão Geral</span>
                        </Link>
                    </li>
                    <li>
                        <Link id={window.location.pathname === "/dashboard/usuarios" ? "active" : ""} to={"/dashboard/usuarios"}>
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
                            <span className="links_name">Usuários</span>
                        </Link>
                    </li>
                    <li>
                        <Link id={window.location.pathname === "/dashboard/mensagens" ? "active" : ""} to={"/dashboard/mensagens"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8 12H16V14H8zM8 16H16V18H8z" /><path fill="none" stroke-miterlimit="10" stroke-width="1.5" d="M19,20c0,0.551-0.449,1-1,1H6c-0.551,0-1-0.449-1-1V4c0-0.551,0.449-1,1-1h7.586L19,8.414V20z" /><path d="M18.5 9L13 9 13 3.5z" /></svg>
                            <span className="links_name">Mensagens</span>
                        </Link>
                    </li>
                    <li>
                        <Link id={window.location.pathname === "/dashboard/tickets" ? "active" : ""} to={"/dashboard/tickets"}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke-miterlimit="10" stroke-width="2" d="M17 3h2c1.105 0 2 .895 2 2v2h-4M14 21H5c-1.105 0-2-.895-2-2v-2h10" /><path fill="none" stroke-miterlimit="10" stroke-width="1.5" d="M15.027 20.986c-1.104.015-2.012-.868-2.027-1.972l-.028-3M19 3H8C6.895 3 6 3.895 6 5v12" /><path fill="none" stroke-miterlimit="10" stroke-width="2" d="M14,21h1c1.105,0,2-0.895,2-2V5c0-1.105,0.895-2,2-2" /></svg>
                            <span className="links_name">Tickets</span>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/logout"}>
                            <svg viewBox="0 0 511 512" xmlns="http://www.w3.org/2000/svg" className="sidebar-icon--sair">
                                <path d="m361.5 392v40c0 44.113281-35.886719 80-80 80h-201c-44.113281 0-80-35.886719-80-80v-352c0-44.113281 35.886719-80 80-80h201c44.113281 0 80 35.886719 80 80v40c0 11.046875-8.953125 20-20 20s-20-8.953125-20-20v-40c0-22.054688-17.945312-40-40-40h-201c-22.054688 0-40 17.945312-40 40v352c0 22.054688 17.945312 40 40 40h201c22.054688 0 40-17.945312 40-40v-40c0-11.046875 8.953125-20 20-20s20 8.953125 20 20zm136.355469-170.355469-44.785157-44.785156c-7.8125-7.8125-20.476562-7.8125-28.285156 0-7.8125 7.808594-7.8125 20.472656 0 28.28125l31.855469 31.859375h-240.140625c-11.046875 0-20 8.953125-20 20s8.953125 20 20 20h240.140625l-31.855469 31.859375c-7.8125 7.808594-7.8125 20.472656 0 28.28125 3.90625 3.90625 9.023438 5.859375 14.140625 5.859375 5.121094 0 10.238281-1.953125 14.144531-5.859375l44.785157-44.785156c19.496093-19.496094 19.496093-51.214844 0-70.710938zm0 0" />
                            </svg>
                            <span className="links_name">Sair</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}