import * as express from 'express';
import { uploadImage, listImages, getImageById } from './images.controller';
import { upload } from '../../middleware/multer';

const router = express.Router();

router.post('/', upload.single('image'), async (req, res) => {
  try {
    const images = await uploadImage(req);
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({
      message: 'Unexpected error',
      stack: err.message,
    });
  }
});

router.get('/', async (req, res) => {
  try {
    const images = await listImages();
    res.status(200).json(images);
  } catch (err) {
    res.status(500).json({
      message: 'Unexpected error',
      stack: err.message,
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const image = await getImageById(Number(id));
    res.status(200).json(image);
  } catch (err) {
    res.status(500).json({
      message: 'Unexpected error',
      stack: err.message,
    });
  }
});

export default router;
