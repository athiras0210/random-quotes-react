import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Quotes from './Components/Quotes';

function App() {
  return (
    <div className="App">
      <Header/>
      <Quotes/>
      <div style={{ height: '200px' }}> 
        {/* This div will make the page taller, triggering vertical scrolling */}
      </div>
      <Footer/>
    </div>
  );
}

export default App;
