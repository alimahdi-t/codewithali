interface Props {
  params: { id: string };
}

const Course = ({ params }: Props) => {
  return <div>Course {params.id}</div>;
};

export default Course;
