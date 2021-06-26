import * as sharp from 'sharp';
import * as imagesDatasource from './images.datasource';

export const uploadImage = async (req) => {
  try {
    const pathImageSmall = 'uploads/' + 'thumbnails-small-' + req.file.originalname,
      pathImageLarge = 'uploads/' + 'thumbnails-large-' + req.file.originalname;
    
    await Promise.all([
      sharp(req.file.path).resize(200, 200).toFile(pathImageSmall),
      sharp(req.file.path).resize(300, 300).toFile(pathImageLarge)
    ])

    const image = await imagesDatasource.saveImage({
      description: req.body.description,
      imageUrl: req.file.path,
      thumbnailLarge: pathImageLarge,
      thumbnailSmall: pathImageSmall,
    })
    
    return {
      message: 'File uploded successfully',
      image
    };
  } catch (error) {
    console.error(error);
  }
};

export const listImages = async () => {
  try {
    return imagesDatasource.listImages()
  } catch (error) {
    console.error(error);
  }
};

export const getImageById = async (id: number) => {
  try {
    return imagesDatasource.getImageById(id)
  } catch (error) {
    console.error(error);
  }
}