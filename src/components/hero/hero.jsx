import MovieService from "../../services/movie-services";
import Error from "../error/error";
import Spinner from "../spinner/spinner";
import "./hero.scss";
import React from "react";

class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
      loading: true,
      error: false,
    };

    this.movieService = new MovieService();
  }

  componentDidMount() {
    this.updateMovie();
  }

  updateMovie = () => {
    this.setState({ loading: true });

    this.movieService
      .getRandomMovie()
      .then((res) => this.setState({ movie: res }))
      .catch(() => this.setState({ error: true }))
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { movie, loading, error } = this.state;

    const errotContent = error ? <Error /> : null;
    const loadingContent = loading ? <Spinner /> : null;
    const content = !(error || loading) ? <Content movie={movie} /> : null;

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
          <div>
            <button className="btn btn-primary">DETAILS</button>
            <button className="btn btn-secondary" onClick={this.updateMovie}>
              Random Movie
            </button>
          </div>
        </div>
        <div className="hero__movie">
          {errotContent}
          {loadingContent}
          {content}
        </div>
      </div>
    );
  }
}

export default Hero;

const Content = ({ movie }) => {
  return (
    <>
      <img src={movie.backdrop_path} alt="img" />

      <div className="hero__movie-descr">
        <h2>{movie.name}</h2>
        <p>
          {movie.description && movie.description.length > 250
            ? `${movie.description.slice(0, 250)}...`
            : movie.description}
        </p>

        <button className="btn btn-primary">Details</button>
      </div>
    </>
  );
};
