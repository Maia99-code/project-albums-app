const express = require('express');
const Album = require('../models/Album');
const router = express.Router();

// Obtener todos los álbumes
router.get('/', async (req, res) => {
  const albums = await Album.find().populate('userId', 'username');
  res.json(albums);
});

// Crear un álbum
router.post('/', async (req, res) => {
  const { title, artist, releaseDate, genre, trackCount, userId } = req.body;
  const album = new Album({ title, artist, releaseDate, genre, trackCount, userId });
  await album.save();
  res.status(201).json(album);
});

// Obtener álbum por ID
router.get('/:id', async (req, res) => {
  const album = await Album.findById(req.params.id);
  if (!album) return res.status(404).json({ message: 'Álbum no encontrado' });
  res.json(album);
});

// Editar álbum
router.put('/:id', async (req, res) => {
  const { title, artist, releaseDate, genre, trackCount, songs } = req.body;
  const album = await Album.findByIdAndUpdate(req.params.id, { title, artist, releaseDate, genre, trackCount, songs }, { new: true });
  res.json(album);
});

// Eliminar álbum
router.delete('/:id', async (req, res) => {
  await Album.findByIdAndDelete(req.params.id);
  res.json({ message: 'Álbum eliminado' });
});

module.exports = router;
