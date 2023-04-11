import { chuckjokes } from '../data.js';

export function load({ params }) {
  const post = chuckjokes.find((chuckjokes) => chuckjokes.slug === params.slug);

  return {
    post
  }
}