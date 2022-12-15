import BlogPost from "../../layouts/blog-post";

const Post = ({postData}) => {
    const {
        title,
        content,
    } = postData;

    return (
        <BlogPost>
            <h1>{title}</h1>
            <div dangerouslySetInnerHTML={{__html: content}} />
        </BlogPost>
    )
}

export default Post;

export async function getServerSideProps(context) {
    const {params} = context;

    const {data: postData} = await fetch(`http://localhost:3000/api/cms/post?slug=${params.slug}`, { method: 'GET' })
      .then((response) => response.json())
  
    return {
      props: {
        // props for your component
        postData,
      },
    };
  }