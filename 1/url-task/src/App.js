import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

const Home = () => {
  return <h1>Strona Startowa</h1>;
};

const News = () => <h1>Aktualności</h1>;
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
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
