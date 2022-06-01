import { MovieCard } from './MovieCard';
import '../styles/content.scss';
import { MovieProps } from '../App';

interface IProps {
  movies: MovieProps[];
  selectedGenre: any;
}

export function Content({ selectedGenre, movies }: IProps) {
  // Complete aqui
  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie: MovieProps) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
