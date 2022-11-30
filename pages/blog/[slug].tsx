import Head from "next/head";
import { useRouter } from "next/router";
import { getClient } from "@lib/sanity";
import { groq } from "next-sanity";
import { GetStaticPaths } from "next";

const query = groq`
*[_type == "post"] | order(_createdAt desc) {
  ..., 
  author->,
  categories[]->
}
`;

export default function Post(props: any) {
  const { postdata } = props;

  // const router = useRouter();

  return (
    <>
      {postdata &&
        postdata.map((post: any, i: number) => (
          <article key={i}>
            <h3 className="text-lg"> {post.title} </h3>
            <p className="mt-3">{post.excerpt}</p>
          </article>
        ))}
    </>
  );
}

export async function getStaticProps({ params, preview = false }: any) {
  console.log("params", params);

  const post = await getClient(preview).fetch(query);

  return {
    props: {
      postdata: post,
      preview,
    },
    revalidate: 10,
  };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};
