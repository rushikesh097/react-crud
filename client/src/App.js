import './App.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import NewsComponent from './components/NewsComponent';


function App() {

  return (
    <div className="App">
    <HeaderComponent />
    <MainComponent />
    {/* <NewsComponent /> */}
    <FooterComponent />
    </div>
  );
}

export default App;
