import { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const AddSong = () => {
  const { id } = useParams();
  const [song, setSong] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`/api/albums/${id}/songs`, { song });
      navigate(`/albums/${id}`);
    } catch (error) {
      console.error('Error al agregar la canción', error);
    }
  };

  return (
    <div>
      <h1>Agregar Canción</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Canción:</label>
          <input type="text" value={song} onChange={(e) => setSong(e.target.value)} />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default AddSong;
