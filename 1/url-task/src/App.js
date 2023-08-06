import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';

const Home = () => {
  return <h1>Strona Startowa</h1>;
};

const News = () => <h1>Aktualności</h1>;
const Contact = () => <h1>Kontakt</h1>;

const ErrorPage = () => <h1>Strona nie istnieje</h1>;

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink to="/" className="home"
                  activeStyle={{
                    backgroundColor: 'gray',
                    letterSpacing: '2px',
                  }}>Start</NavLink>
              </li>
              <li>
                <NavLink to="/news" className="news">Aktualności</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="contact">Kontakt</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <section>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
