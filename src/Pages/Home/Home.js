import ImgCarousel from "../../Components/Img-carousel/Img-Carousel";
import Card from "../../Components/Card/Card";
const Home = ({ books }) => {
  return (
    <div>
      <ImgCarousel />
      <Card books={books} />
    </div>
  );
};
export default Home;
