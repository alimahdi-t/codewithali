import { HiOutlineCheckCircle } from "react-icons/hi2";

interface FormSuccessProps {
  message?: string;
}

const FormSuccess = ({ message }: FormSuccessProps) => {
  if (!message) {
    return null;
  }

  return (
    <div className="text-sm bg-emerald-500/15 p-3 rounded-md flex items-center gap-x-2 text-emerald-500">
      <span>
        <HiOutlineCheckCircle className="w-5 h-5" />
      </span>
      <p>{message}</p>
    </div>
  );
};

export default FormSuccess;