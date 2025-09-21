import { getUser } from "@/actions/getUser";
import { FormWrapper } from "@/components/forms/FormWrapper";
import { UserForm } from "@/components/forms/UserForm";

interface Props {
  params: Promise<{ id: string }>;
}

const EditUserInfoPage = async (props: Props) => {
  const { id } = await props.params;
  const user = await getUser({ id: parseInt(id) });

  if (!user) return null;
  return (
    <FormWrapper title="ویرایش کاربر">
      <div className="mt-4">
        <UserForm initialData={user} />
      </div>
    </FormWrapper>
  );
};

export default EditUserInfoPage;