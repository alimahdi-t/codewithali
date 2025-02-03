interface Props {
  params: Promise<{ id: string }>;
}

const BlogPost = async (props: Props) => {
  const params = await props.params;
  return <div>Blog Post {params.id}</div>;
};

export default BlogPost;
