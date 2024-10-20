import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateAlbum = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [releaseDate, setReleaseDate] = useState('');
  const [genre, setGenre] = useState('');
  const [trackCount, setTrackCount] = useState(0);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/albums', { title, artist, releaseDate, genre, trackCount });
      navigate('/');
    } catch (error) {
      console.error('Error al crear el álbum', error);
    }
  };

  return (
    <div>
      <h1>Crear Álbum</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Artista:</label>
          <input type="text" value={artist} onChange={(e) => setArtist(e.target.value)} />
        </div>
        <div>
          <label>Fecha de Lanzamiento:</label>
          <input type="date" value={releaseDate} onChange={(e) => setReleaseDate(e.target.value)} />
        </div>
        <div>
          <label>Género:</label>
          <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
        </div>
        <div>
          <label>Número de Pistas:</label>
          <input type="number" value={trackCount} onChange={(e) => setTrackCount(e.target.value)} />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CreateAlbum;
