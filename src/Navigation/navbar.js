import React from 'react';
import logo from '../images/binance-logo.png';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import gridIcon from '../images/gridIcon';
import settingsIcon from '../images/settingsIcon'
import NavItem from './navItem';

const styles = {
    navbar: {
        height: "70px",
        backgroundColor: "#12161c",
        borderBottom: "4px solid #161a21"
    },
    logo: {
        width: "170px"
    }
}

const primaryBtn = ()=>{
    return(
        <button className="btn primaryBtn">Register</button>
    )
}
const buyCrypto = ()=>{
    return(
        <span>Buy Crypto <span class="badge bg-primary text-dark">USD</span></span>
    )
}

function Navbar (){
    return(
        <nav className="navbar navbar-expand-lg" style={styles.navbar}>
            <div className="container-fluid">
                <a className="navbar-brand m-0 p-0" href="#">
                    <img src={logo} style={styles.logo}/>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <NavItem element={gridIcon} showCaret={false} margin="mx-0"/>
                        <NavItem element={buyCrypto()} showCaret={true}  margin="mx-2"/>
                        <NavItem element="Markets" showCaret={false}  margin="mx-2"/>
                        <NavItem element="Trade" showCaret={true}  margin="mx-2"/>
                        <NavItem element="Derivatives" showCaret={true}  margin="mx-2"/>
                        <NavItem element="Finance" showCaret={true}  margin="ms-2"/>




                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center text-white ms-auto">
                        <NavItem element="Log In" showCaret={false} margin="mx-2"/>
                        <NavItem element={primaryBtn()} showCaret={false} margin="mx-2"/>
                        <NavItem element="Download" showCaret={false} margin="mx-2"/>
                        <NavItem element="English" showCaret={false} />|
                        <NavItem element="USD" showCaret={false} />
                        <NavItem element={settingsIcon} showCaret={false} margin="mx-2"/>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;