import { DashboardPageHeader } from "@/components/dashboard/DashboardPageHeader";
import { getAllUsersAction } from "@/actions/users/get-all-users.action";
import { ClientToastWrapper } from "@/components/common/ClientToastWrapper";
import { UsersTable } from "@/components/tables/UsersTable";

const UsersList = async () => {
  const response = await getAllUsersAction();
  if (response.error) {
    return <ClientToastWrapper message={response.error} variant={"error"} />;
  }

  const { users } = response;

  return (
    <div className="w-full py-6">
      <div className="mb-4">
        <DashboardPageHeader
          title=" لیست کاربران"
          description="لیست تمام کاربران سیستم. برای مشاهده جزئیات هر کاربر روی ردیف آن کلیک کنید."
        />
      </div>

      <UsersTable data={users ?? []} />
    </div>
  );
};

export default UsersList;