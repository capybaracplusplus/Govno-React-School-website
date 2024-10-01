import "./Header.css";
import { useLocation } from 'react-router-dom';

export interface ButtonProps {
    name: string;
    link: string;
}

export function Button(props: ButtonProps) {
    const location = useLocation();
    const isActive = location.pathname === props.link;

    return (
        <>
            <a className={`mybutton ${isActive ? 'active' : ''}`} href={props.link}>
                {props.name}
            </a>
        </>
    )
}

function Header() {
    return (
        <header className="hearder_container">
            <div className='hearder'>
                <div className='hearder_logo'>
                    <img src="/favicon.png" alt="Company Logo"></img>
                </div>
                <nav className='hearder_nav'>
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
                    <a className="icon_h" href="https://discord.com/"> 
                        <img src="https://img.icons8.com/?size=50&id=25627&format=png" alt="DS icon"></img>
                    </a>
                    <a className="icon_h" href="https://web.telegram.org/a/">
                        <img src="https://img.icons8.com/?size=50&id=9R1sV3QvY18K&format=png" alt="TG icon"></img>
                    </a>
                    <a className="icon_h" href="">
                        <img src="https://img.icons8.com/?size=50&id=38514&format=png" alt="VK icon"></img>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;