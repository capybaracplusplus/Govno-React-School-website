import "./Header.css";
import {useLocation } from 'react-router-dom';
import {NavLink} from "react-router-dom"
import faviconSrc from "./favicon.png"
//import React from 'react';

export interface ButtonProps {
    name: string;
    link: string;
}

export function Button(props: ButtonProps) {
    const location = useLocation();
    const isActive = location.pathname === props.link;

    return (
        <>
            <NavLink className={`mybutton ${isActive ? 'active' : ''}`} to={props.link}>
                {props.name}
            </NavLink>
        </>
    )
}

function Header() {
    return (
        <header className="hearder_container">
            <div className='hearder'>
                <nav className='hearder_nav'>
                    <div className='hearder_logo'>
                        <img src={faviconSrc} alt="Company Logo"></img>
                    </div>
                    <Button name="Главная" link="/" />
                    <Button name="О нас" link="/about" />
                    <Button name="Обучение" link="/education" />
                    <Button name="Педсостав" link="/staff" />
                    <Button name="Вакансии" link="/vacancies" />
                    <Button name="Новости" link="/news" />
                    <Button name="Контакты" link="/contacts" />
                    <Button name="Авторизоваться" link="/login" />
                </nav>
                <div className='hearder_icons'>
                    <a target = "_blank" className="icon_h" href="https://discord.com/"> 
                        <img src="https://img.icons8.com/?size=50&id=25627&format=png" alt="DS icon"></img>
                    </a>
                    <a target = "_blank" className="icon_h" href="https://web.telegram.org/a/">
                        <img src="https://img.icons8.com/?size=50&id=9R1sV3QvY18K&format=png" alt="TG icon"></img>
                    </a>
                    <a target = "_blank" className="icon_h" href="https://vk.com/">
                        <img src="https://img.icons8.com/?size=50&id=38514&format=png" alt="VK icon"></img>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;

