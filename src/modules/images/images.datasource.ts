import { getRepository } from "typeorm";
import { Images } from '../../entity/images.entity';

type Image = {
  description: string,
  imageUrl: string,
  thumbnailLarge: string,
  thumbnailSmall: string,
}

export const saveImage = async (data: Image) => {
  const imagesRepository = getRepository(Images)
  return imagesRepository.save(data)
}

export const listImages = async () => {
  const imagesRepository = getRepository(Images)
  return imagesRepository.find({
    select: ['id', 'description', 'imageUrl']
  })
}

export const getImageById = async (id: number) => {
  const imagesRepository = getRepository(Images)
  return imagesRepository.findOne(id)
}