import "./movie-info.scss";

const MovieInfo = () => {
  return (
    <div className="movieinfo">
      <img src="/image1.svg" alt="movie" />

      <div className="movieinfo-descr">
        <h1>Movie Title</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla vitae
          illo dolorem laboriosam molestias nostrum eveniet vel consequatur
          velit atque facilis beatae officiis, ducimus eaque voluptates odit?
          Quisquam, ut dicta?
        </p>
      </div>
    </div>
  );
};

export default MovieInfo;
