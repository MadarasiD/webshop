import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Header />
        <Routes>
          

        </Routes>
      <Footer />
    </Router>
    </>
  );
}

export default App;
