import { HiOutlineFunnel } from "react-icons/hi2";
// TODO: Complete CourseFilterOption for mobile.
const CourseFilterOption = ({ className }: { className?: string }) => {
  return (
    <div className={`w-full ${className}`}>
      <p
        className="w-full h-full flex justify-center items-center gap-4 shadow-lg
           font-semibold leading-6 py-4 px-4 rounded-lg sm:hidden"
      >
        <HiOutlineFunnel className="w-5 h-5" />
        فیلتر
      </p>
    </div>
  );
};

export default CourseFilterOption;
