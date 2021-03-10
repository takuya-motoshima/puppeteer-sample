import globby from 'globby';
// const joinImages = require('join-images');
import {joinImages} from 'join-images';

/**
 * Join and save multiple images.
 */
export default async function(pattern, outputpath) {
  // Find an image.
  const files = await globby(pattern);
  console.log(files);

  // Join images.
  const img = await joinImages(files);

  // Save image as file
  img.toFile(outputpath);
}