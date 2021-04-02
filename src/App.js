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
        <SearchEngine defaultKeyword="hello"/>
        </main>
      <footer className="App-footer text-center"> <br/> <br/>Open sourced by <a href="https://www.linkedin.com/in/robertafrancesconi/" target="_blank" rel="noreferrer">Roberta Francesconi</a> on <a href="https://github.com/RobertaRocks/dictionary-react-app" target="_blank" rel="noreferrer">GitHub</a></footer>
      <div className="sidetext-left">
	        ROBERTA'S WORDS
      </div>
           
</div>
    </div>
  );
}


