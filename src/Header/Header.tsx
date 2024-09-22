import "./Header.css"

export interface ButtonProps {
    name: string;
    link: string;
}

export function Button(props: ButtonProps) {
    return (
        <>
            <a className='mybutton' href={props.link}>
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
                    <img src="/public/favicon.png" alt="Company Logo"></img>
                </div>
                <nav className='hearder_nav'>
                    <Button name="Главная" link="" />
                    <Button name="О нас" link="" />
                    <Button name="Обучение" link="" />
                    <Button name="Педсостав" link="" />
                    <Button name="Вакансии" link="" />
                    <Button name="Новости" link="" />
                    <Button name="Контакты" link="" />
                    <Button name="Авторизоваться" link="" />
                </nav>
                <div className='hearder_icons'>
                    <Button name="OK" link="" />
                    <Button name="DS" link="" />
                    <Button name="VK" link="" />
                </div>
            </div>
        </header>
    )
}


export default Header;