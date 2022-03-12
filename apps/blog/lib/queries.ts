import { groq } from "next-sanity";

export const indexQuery = groq`
*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  publishedAt,
  description,
  mainImage,
  "slug": slug.current,
}`;

export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    body,
    mainImage,
    description,
    categories[]->{
      _id,
      title
    },
    "slug": slug.current
  }
`;

export const feedQuery = groq`
*[_type == "post"] | order(publishedAt desc) [0...10] {
  title,
  body,
  publishedAt,
  description,
  mainImage,
  "slug": slug.current
}`;
