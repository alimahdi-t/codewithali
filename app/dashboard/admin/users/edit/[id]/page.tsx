import { getUser } from "@/lib/actions/getUser";

interface Props {
  params: Promise<{ id: string }>;
}

const EditUserInfoPage = async (props: Props) => {
  const { id } = await props.params;
  const user = await getUser({ id: parseInt(id) });
  console.log(user);
  return <div>Hey</div>;
};

export default EditUserInfoPage;
