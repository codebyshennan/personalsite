import { createImageBuilder, useSanityClient } from "astro-sanity";

const builder = createImageBuilder(useSanityClient());

export const getSanityImageURL = (source) => {
  return builder.image(source);
};
