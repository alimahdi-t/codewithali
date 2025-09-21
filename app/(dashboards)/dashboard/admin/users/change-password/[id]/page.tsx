import { FormWrapper } from "@/components/forms/FormWrapper";
import { toPersianNumber } from "@/utils";
import { ChangeUserPasswordForm } from "@/components/forms/ChangeUserPasswordForm";

interface Props {
  params: Promise<{ id: string }>;
}

const ChangeUserPasswordPage = async (props: Props) => {
  const { id } = await props.params;
  if (!id) return;
  return (
    <FormWrapper title={toPersianNumber(`تغییر رمز عبور کاربر با شناسه ${id}`)}>
      <div className="mt-4">
        <ChangeUserPasswordForm userId={Number(id)} />
      </div>
    </FormWrapper>
  );
};

export default ChangeUserPasswordPage;