import React from 'react';
import '../styles/App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import Nav from './Nav';
import Page from './Page';
import Footer from './Footer';

function App() {
  return (
    <Router>
    <div className="app">
     <header>
      { <Header /> }
      </header>
      <main> 
        <aside>
          {<Nav />}
        </aside>
        <section>
          {<Page />}
        </section>
      </main>
      <footer>
        {<Footer/>}
      </footer>
    </div>
    </Router>
  );
}

export default App;
