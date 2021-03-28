import logo from './logo.png';
import SearchEngine from './SearchEngine';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="img-fluid App-logo" alt="logo"/>
        </header>
        <main>
        <SearchEngine/>
        </main>
      <footer className="App-footer text-center">Open sourced by <a href="https://www.linkedin.com/in/robertafrancesconi/">Roberta Francesconi</a> on <a href="https://github.com/RobertaRocks/weather-app-react">GitHub</a></footer>
      </div>
    </div>
  );
}


