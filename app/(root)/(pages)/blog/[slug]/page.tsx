interface Props {
  params: Promise<{ slug: string }>;
}

const BlogPost = async (props: Props) => {
  const params = await props.params;
  return <div>Blog Post {params.slug}</div>;
};

export default BlogPost;
