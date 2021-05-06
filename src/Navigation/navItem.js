import React, {useState} from 'react';

const Caret = (caretUp) => {
    return (
        caretUp ?
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-caret-up-fill px-1" viewBox="0 0 16 16">
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="gray" className="bi bi-caret-down-fill px-1" viewBox="0 0 16 16" focusable="false" role="img">
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
            </svg>
    )
}

const styles = {
    navItemText: {
        fontSize: "16px"
    }
}

const toggleDropdownMenu = (bool)=>{
   return bool ? "dropdown-menu" : "dropdown-menu d-none"
}

function NavItem (props){
    const [caretUp, setCaretUp] = useState(false);

    return(
        <li className={`nav-item dropdown ${props.margin}`}>
            <a className="nav-link Nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" 
            onMouseOver={() =>{setCaretUp(true) }} onMouseOut={() => setCaretUp(false)}>
                <span className="ml-5" style={styles.navItemText}>{props.element}</span>
                <span>
                    {props.showCaret ? Caret(caretUp): null}
                </span>
            </a>
            {caretUp ? <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul> : null}
        </li>
    )
}

export default NavItem;