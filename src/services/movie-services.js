class MovieService {
  _apiBase = "https://api.themoviedb.org/3";
  _apiLang = "language=en-US";
  _apiKey = "&api_key=99c58946981b0fa5196a4888095e124b";
  _apiImg = "https://image.tmdb.org/t/p/original";

  getResource = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, status: ${response.status}`);
    }
    return await response.json();
  };

  getPopularMovies = async () => {
    return this.getResource(
      `${this._apiBase}/movie/popular?${this._apiLang}${this._apiKey}`
    );
  };

  getTrandingMovies = async () => {
    return this.getResource(
      `${this._apiBase}/movie/top_rated?${this._apiLang}${this._apiKey}`
    );
  };

  getDetailMovies = async (id) => {
    return this.getResource(
      `${this._apiBase}/movie/${id}?${this._apiLang}${this._apiKey}`
    );
  };
}

export default MovieService;
