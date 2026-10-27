import "./hero.scss";
import img from "/public/image1.svg";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__info">
        <h2>FIND MOVIES</h2>
        <h1>TV shows and more</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
          fuga necessitatibus repellat fugiat, voluptatibus rerum laboriosam
          ipsam beatae dolorum exercitationem porro similique ad, facere enim!
          Quisquam hic error velit deserunt?
        </p>
        <button className="btn btn-primary">DETAILS</button>
      </div>
      <div className="hero__movie">
        <img src={img} alt="img" />
        <div className="hero__movie-descr">
          <h2>Madellin</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
            nisi possimus sed adipisci, beatae blanditiis, dolorem aliquam
            dolore quia impedit accusantium, natus iusto quibusdam atque vero
            fugiat qui sit quae!
          </p>
          <div>
            <button className="btn btn-secondary">Random movie</button>
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
