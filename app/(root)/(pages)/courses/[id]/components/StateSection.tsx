const stats = [
  {
    id: 1,
    name: "وب‌سایت مبتنی بر جنگو در سراسر دنیا",
    value: "۱۹۰,۰۰۰+",
  },
  {
    id: 2,
    name: "میانگین حقوق آگهی‌های شغلی کوئراتلنت برای تخصص جنگو",
    value: "۲۵,۰۰۰,۰۰۰ تومان",
  },
  {
    id: 3,
    name: "میانگین درآمد سالانه یک Django Developer در اروپا",
    value: "۹۸,۰۰۰ یورو",
  },
  { id: 4, name: "فریم‌ورک وب مبتنی بر زبان پایتون", value: "محبوب‌ترین" },
];

const StateSection = () => {
  return (
    <div className="box-t relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] my-36">
      <div className="max-w-7xl mx-auto">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          {/*<div className="text-center">*/}
          {/*  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">*/}
          {/*    Trusted by creators worldwide*/}
          {/*  </h2>*/}
          {/*  <p className="mt-4 text-lg leading-8 text-gray-300">*/}
          {/*    Lorem ipsum dolor sit amet consect adipisicing possimus.*/}
          {/*  </p>*/}
          {/*</div>*/}
          <dl className="w-full grid grid-cols-1 overflow-hidden text-center lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col  p-8 gap-2">
                <dt className="text-base font-bold leading-6 text-sub-t">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-extrabold tracking-tight text-main-t">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default StateSection;
