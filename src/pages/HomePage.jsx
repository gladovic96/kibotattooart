import Hero from "../components/Hero";
import Artist from "../components/Artist";
import Services from "../components/Services";
import GalleryPreview from "../components/GalleryPreview";
import Booking from "../components/Booking";

function HomePage() {
  return (
    <>
      <Hero />
      <Artist />
      <Services />
      <GalleryPreview />
      <Booking />
    </>
  );
}

export default HomePage;
