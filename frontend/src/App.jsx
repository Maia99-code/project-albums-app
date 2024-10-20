import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateAlbum from './pages/CreateAlbum';
import AlbumDetails from './pages/AlbumDetails';
import EditAlbum from './pages/EditAlbum';
import AddSong from './pages/AddSong';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateAlbum />} />
        <Route path="/albums/:id" element={<AlbumDetails />} />
        <Route path="/albums/:id/edit" element={<EditAlbum />} />
        <Route path="/albums/:id/add-song" element={<AddSong />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
};

export default App;
