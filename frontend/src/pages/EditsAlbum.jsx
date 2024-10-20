import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditAlbum = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/albums/${id}`)
      .then(response => setAlbum(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/albums/${id}`, album);
      navigate(`/albums/${id}`);
    } catch (error) {
      console.error('Error al editar el álbum', error);
    }
  };

  if (!album) return <div>Cargando...</div>;

  return (
    <div>
      <h1>Editar Álbum</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={album.title}
            onChange={(e) => setAlbum({ ...album, title: e.target.value })}
          />
        </div>
        <div>
          <label>Artista:</label>
          <input
            type="text"
            value={album.artist}
            onChange={(e) => setAlbum({ ...album, artist: e.target.value })}
          />
        </div>
        <div>
          <label>Fecha de Lanzamiento:</label>
          <input
            type="date"
            value={album.releaseDate}
            onChange={(e) => setAlbum({ ...album, releaseDate: e.target.value })}
          />
        </div>
        <div>
          <label>Género:</label>
          <input
            type="text"
            value={album.genre}
            onChange={(e) => setAlbum({ ...album, genre: e.target.value })}
          />
        </div>
        <div>
          <label>Número de Pistas:</label>
          <input
            type="number"
            value={album.trackCount}
            onChange={(e) => setAlbum({ ...album, trackCount: e.target.value })}
          />
        </div>
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default EditAlbum;
