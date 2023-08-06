import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

const Home = () => {
  return <h1>Strona Startowa</h1>;
};
const News = () => <h1>News</h1>;
const Contact = () => <h1>Kontakt</h1>;

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Start</Link>
              </li>
              <li>
                <Link to="/news">Aktualności</Link>
              </li>
              <li>
                <Link to="/contact">Kontakt</Link>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <Routes >
          <Route path="/" component={Home} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={Contact} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
