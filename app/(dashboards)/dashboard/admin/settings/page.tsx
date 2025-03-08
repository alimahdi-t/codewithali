import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { EditUserForm } from "@/components/forms/EditUserForm";
import { currentUser } from "@/lib/auth";
import { getUserById } from "@/data/user";
import { ChangePasswordForm } from "@/components/forms/ChangePasswordForm";

const SettingsPage = async () => {
  const user = await currentUser();
  if (!user?.id) {
    return;
  }

  const data = await getUserById(parseInt(user.id));
  if (!data) {
    return;
  }

  return (
    <div className="flex flex-col gap-y-4">
      <Card>
        <CardHeader className="font-semibold text-xl">
          ویرایش حساب کابری
        </CardHeader>
        <CardContent>
          <EditUserForm
            initialData={{
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email ?? "",
              phoneNumber: data.phoneNumber || "",
              username: data.username || "",
              bio: data.bio || "",
              imageUrl: data.imageUrl || "",
            }}
          />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="text-xl font-semibold">رمز عبور</CardHeader>
        <CardContent>
          <ChangePasswordForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPage;