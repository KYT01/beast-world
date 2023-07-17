import './reset.css';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import HornedBeast from './components/HornedBeast';




function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <HornedBeast />
    </div>
  );
}

export default App;
