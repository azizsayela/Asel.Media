import imageUrlBuilder from "@sanity/image-url";
import sanityClient from "../sanityClient";

const builder = imageUrlBuilder(sanityClient);

export const ConverURLToImage = (source) => {
    return builder.image(source);
};

export const FetchSportsArticles = async () => {
    try {
        const sportsArticles = await sanityClient.fetch(`*[_type == 'sports'] | order(_updatedAt desc)`);
        return sportsArticles;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const FetchTechArticles = async () => {
    try {
        const techArticles = await sanityClient.fetch(`*[_type == 'technology'] | order(_updatedAt desc)`);
        return techArticles;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const FetchInfoContinuArticles = async () => {
    try {
        const InfoContinuArticles = await sanityClient.fetch(`*[_type == 'linfoEnContinu'] | order(_updatedAt desc)`);
        return InfoContinuArticles;
    } catch (error) {
        console.error(error);
        throw error;
    }
}