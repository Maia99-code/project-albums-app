import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios.get('/api/albums')
      .then(response => setAlbums(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Todos los Álbumes</h1>
      <Link to="/create">Crear Álbum</Link>
      <ul>
        {albums.map(album => (
          <li key={album._id}>
            {album.title} - {album.artist}
            <Link to={`/albums/${album._id}`}>Ver</Link>
            <Link to={`/albums/${album._id}/edit`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
