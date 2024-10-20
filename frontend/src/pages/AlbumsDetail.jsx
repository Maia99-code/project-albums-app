import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const AlbumDetails = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`/api/albums/${id}`)
      .then(response => setAlbum(response.data))
      .catch(error => console.error(error));
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`/api/albums/${id}`);
      navigate('/');
    } catch (error) {
      console.error('Error al eliminar el álbum', error);
    }
  };

  if (!album) return <div>Cargando...</div>;

  return (
    <div>
      <div>
        <h1>{album.title}</h1>
        <p>Artista: {album.artist}</p>
        <p>Fecha de Lanzamiento: {album.releaseDate}</p>
        <p>Género: {album.genre}</p>
        <p>Número de Pistas: {album.trackCount}</p>
      </div>
      <div>
        <h2>Canciones</h2>
        <ul>
          {album.songs.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ul>
      </div>
      <button onClick={handleDelete}>Eliminar Álbum</button>
    </div>
  );
};

export default AlbumDetails;
