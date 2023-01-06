import { GetServerSideProps } from "next";
import BlogPost from "../../layouts/blog-post";
import type { BlogPost as BlogPostType } from "../../types/blog.types";

interface Props {
  postData: BlogPostType;
}

const Post = ({ postData }: Props) => {
  const { title, content } = postData;

  return (
    <BlogPost>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </BlogPost>
  );
};

export default Post;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const { params } = context;

  const { data: postData } = await fetch(
    `http://localhost:3000/api/cms/post?slug=${params.slug}`,
    { method: "GET" }
  ).then((response) => response.json());

  return {
    props: {
      // props for your component
      postData,
    },
  };
};
