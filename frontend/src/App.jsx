import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Amenities from './components/Amenities';
import VideoReview from './components/VideoReview';

function App() {
  return (
    <div className="min-h-screen bg-white text-brand-dark antialiased">
      <Navigation />
      <Hero />
      <Overview />
      <Amenities />
      <VideoReview />
    </div>
  );
}

export default App;
