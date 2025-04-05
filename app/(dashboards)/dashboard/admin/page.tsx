const AdminDashboard = () => {
  return (
    <div className="bg-gray-50">
      <div className="grid grid-cols-4 gap-2">
        <div className="flex-1 p-4 bg-white rounded-lg shadow-sm border border-gray-100 dark:text-white dark:bg-gray-900 dark:shadow-none dark:border-none h-40">
          تعداد کابران
        </div>
        <div className="flex-1 p-4 bg-white rounded-lg shadow-sm border border-gray-100 dark:text-white dark:bg-gray-900 dark:shadow-none dark:border-none h-40">
          تعداد دوره ها
        </div>
        <div className="flex-1 p-4 bg-white rounded-lg shadow-sm border border-gray-100 dark:text-white dark:bg-gray-900 dark:shadow-none dark:border-none h-40">
          تعداد پست ها
        </div>
        <div className="flex-1 p-4 bg-white rounded-lg shadow-sm border border-gray-100 dark:text-white dark:bg-gray-900 dark:shadow-none dark:border-none h-40"></div>
      </div>
    </div>
  );
};

export default AdminDashboard;