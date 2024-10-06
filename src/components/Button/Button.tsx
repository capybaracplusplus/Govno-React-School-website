import { useLocation } from 'react-router-dom';
import { NavLink } from "react-router-dom"

export interface ButtonProps {
    name: string;
    link: string;
    className: string;
}

export default function Button(props: ButtonProps) {
    const location = useLocation();
    const isActive = location.pathname === props.link;

    return (
        <>
            <NavLink className={`mybutton ${isActive ? 'active' : ''} ${props.className}`} to={props.link}>
                {props.name}
            </NavLink>
        </>
    )
}

Button.defaultProps = {
    className: ""
};

