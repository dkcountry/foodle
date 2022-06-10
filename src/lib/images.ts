import { imageMap } from '../constants/images'

export const getImage = (solution: string) => {
  return imageMap[solution.toLowerCase()]
}
