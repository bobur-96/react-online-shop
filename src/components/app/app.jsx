import ErrorBoundry from "../error-boundry/error-boundry";
import Hero from "../hero/hero";
import Navbar from "../navbar/navbar";
import RowMovies from "../row-movies/row-movies";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <ErrorBoundry>
        <RowMovies />
      </ErrorBoundry>
    </div>
  );
};

export default App;
