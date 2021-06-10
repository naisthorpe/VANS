import React from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {

  const styles = {
    width: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    },
    color: {
      backgroundColor: 'white',
      marginBottom: '0px'
    }
  }

  return (
    <div>
      <div className="d-flex justify-content-center pb-4" style={styles.width, styles.color}>
        <h1 style={styles.color}>VANS App</h1>
      </div>
      <Router>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Projects" component={Projects} />

      </Router>
    </div>
  );
}

export default App;
