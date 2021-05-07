import '../App.css';
import caretDown from '../images/caretDown';

const styles = {
    nav2: {
        backgroundColor: "#1E2026",
        height: "60px",
        borderBottom: "4px solid #161a21"
    },
    tinyButton: {
        fontSize: "12px",
        padding: "0px 4px",
        borderRadius: "2px",
    },
    nav2Item: {
        lineHeight: ".7"
    }
}


const Nav2Item = (header, content, textDanger)=>{
    return(
        <li className="nav-item pt-1 pe-2 nav-item text-white float-start">
            <header className="text-muted" style={{fontSize: "9px"}}>{header}</header>
            {
                textDanger ?
                <small className="fs-6 text-danger">{content}</small> :
                <small className="fs-6 text-white" >{content}</small>
            }
        </li>
    )
  }

function Navbar2 (){
    return(
        <nav className="navbar col-12" style={styles.nav2}>
            <div className="container-fluid px-2">
                <a className="navbar-brand m-0 p-0" href="#">
                    <h5 className="font-weight-bold text-white m-0 d-inline">BTC/USDT</h5>
                    <button className="btn btn-outline-warning ms-2" style={styles.tinyButton}>10x</button>
                    {caretDown}
                </a>
                <ul className="me-auto ms-4 clearfix list-unstyled">
                    {/* <li className="nav-item text-white border-end border-secondary pt-1 pe-2 float-start me-3">
                        <header className="fs-6 fw-bold text-success" style={styles.nav2Item}>56,112.26</header>
                        <small className="text-muted" style={styles.nav2Item}>$56,112.26</small>
                    </li> */}
                   {/* {Nav2Item("24h Change", "-1,760.01 -3.03%", true)} */}
                </ul> 
            </div>
        </nav>
    )
}

export default Navbar2;