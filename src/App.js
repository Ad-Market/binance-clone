import './App.css';
import caretUp from './images/caretUp';
import caretDown from './images/caretDown';
import Navbar2 from './Navigation/navbar2';


const styles = {
  wrapperContainer: {
    height: "90vh"
  },
  main: {
    backgroundColor: "#1E2026"
  },
  mainSidebar: {
    width: "325px",
    borderLeft: "4px solid #161a21",
    backgroundColor: "#1E2026"
  },
  nav3: {
    backgroundColor: "#1E2026",
    borderBottom: "4px solid #161a21",
    height: "48px"
  },
  secondarySidebar: {
    width: "300px",
    height: "550px",
    borderLeft: "4px solid #161a21",
    backgroundColor: "#1E2026"
  },
}


function App() {
  return (
    <div className="container-fluid" style={styles.wrapperContainer}>
      <div className="row h-100">
        <main className="col h-100" style={styles.main}>
          <div className="row">
            <Navbar2 />

            <section className="col-9 px-0">
              <nav className="navbar col-12" style={styles.nav3}></nav>
              <figure className="graph"></figure>
            </section>
            <aside className="py-5 col" style={styles.secondarySidebar}>
              kkvhvfdhvh
            </aside>
          </div>
          
          
        </main>
        <aside className="h-100" style={styles.mainSidebar}></aside>
      </div>
    </div>
  );
}

export default App;
