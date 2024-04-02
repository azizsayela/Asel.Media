import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../sanityClient";

const builder = imageUrlBuilder(sanityClient);

export const ConverURLToImage = (source) => {
  return builder.image(source);
};

export const FetchNews = async (topic) => {
  try {
    const sportsArticles = await sanityClient.fetch(
      `*[_type == '${topic}'] | order(_updatedAt desc)`
    );
    return sportsArticles;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
