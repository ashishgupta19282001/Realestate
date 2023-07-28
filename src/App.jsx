import Header from './component/Header/Header'
import Hero from './component/Hero/Hero';
import Companies from './component/companies/Companies';
import './App.css'
import Residencies from './component/Residencies/Residencies';
function App() {
  return (
  <div className="App">
    <div>
    <div className="white-gradient"/>
    <Header/>
    <Hero/>
    </div> 
    <Companies/>
    <Residencies/>
  </div>
  ); 
}

export default App;
