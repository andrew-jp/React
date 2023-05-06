
import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import yose from './yosemite.jpg'
import ic from './ic.jpg'

function App() {

  return (
    <div className='App'>
      <div
        className='Start-page'
        style={{
        backgroundImage: `url(${yose})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'}}
        >
        < NavBar />
        < Header />
      </div>
      <div className='body' style={{
          backgroundImage: `url(${ic})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
          >
          < Body id='body'/>
      </div>
     
      < Footer id='footer'/>
    </div>
  );
}

export default App;
