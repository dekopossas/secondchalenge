import { Button } from './Button';

import '../styles/sidebar.scss';
import { GenreResponseProps } from '../App';

interface IProps {
  genres: GenreResponseProps[];
  handleClickButton: (id: number) => void;
  selectedGenreId: any;
}

export function SideBar({ genres, handleClickButton, selectedGenreId }: IProps) {
  // Complete aqui
  return (
    <nav className="sidebar">
      <span>
        Watch<p>Me</p>
      </span>

      <div className="buttons-container">
        {genres.map((genre: GenreResponseProps) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
