import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { EditUserForm } from "@/components/forms/EditUserForm";

const SettingsPage = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <Card>
        <CardHeader className="font-bold text-xl">ویرایش حساب کابری</CardHeader>
        <CardContent>
          <EditUserForm />
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="text-xl font-semibold">رمز عبور</CardHeader>
      </Card>
    </div>
  );
};

export default SettingsPage;