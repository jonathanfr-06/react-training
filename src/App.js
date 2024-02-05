import './App.css';
import Header from './components/reusables/header.jsx';
import Footer from './components/reusables/footer.jsx';
import Home  from './views/base/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;