import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Amenities from './components/Amenities';
import VideoReview from './components/VideoReview';
import NearbyHighlights from './components/NearbyHighlights';
import Gallery from './components/Gallery';
import ScheduleTourMap from './components/ScheduleTourMap';
import BookingForm from './components/BookingForm';

function App() {
  return (
    <div className="min-h-screen bg-white text-brand-dark antialiased">
      <Navigation />
      <Hero />
      <Overview />
      <Amenities />
      <VideoReview />
      <NearbyHighlights />
      <Gallery />
      <ScheduleTourMap />
      <BookingForm />
    </div>
  );
}

export default App;
