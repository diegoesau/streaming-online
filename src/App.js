import './App.css';
import { AppRouter } from './router/AppRouter';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <AppRouter></AppRouter>
      <Footer></Footer>
    </div>
  );
}

export default App;
