import './App.css';
import { AppRouter } from './router/AppRouter';
import { MoviesProvider } from './components/Context';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <MoviesProvider>
        <AppRouter></AppRouter>
      </MoviesProvider>
      <Footer></Footer>
    </div>
  );
}

export default App;
