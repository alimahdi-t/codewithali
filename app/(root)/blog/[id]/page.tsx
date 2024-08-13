interface Props {
  params: { id: string };
}

const BlogPost = ({ params }: Props) => {
  return <div>Blog Post {params.id}</div>;
};

export default BlogPost;
