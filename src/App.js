import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Developers from './components/Developers/Developers';
import Question from './components/Questions/Question';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Developers></Developers>
      <Question></Question>
    </div>
  );
}

export default App;
