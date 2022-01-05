import './App.css';
import LandingPage from './pages/LandingPage';
import Header from './components/Header'
import TrackCard from './components/TrackCard';
import FeedPage from './pages/FeedPage';

function App() {
  return (
    <div>
      <Header />
      <FeedPage />
    </div>
  );
}

export default App;
