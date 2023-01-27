import { useSanityClient } from "astro-sanity";

export const getAllPosts = async () => {
  const query = `*[_type == 'post']{"categoryData": categories[]->{slug, title},author -> {name}, ...} | order(publishedAt desc)`;
  const data = await useSanityClient().fetch(query);
  return data;
};

export const getAllCategoriesWithPosts = async () => {
  const query = `*[_type == 'category']{"posts": *[_type == "post" && references(^._id)] | order(publishedAt desc), ...}`;
  const data = await useSanityClient().fetch(query);
  return data;
};
