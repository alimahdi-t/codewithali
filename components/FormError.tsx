import { HiOutlineExclamationTriangle } from "react-icons/hi2";

interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  if (!message) {
    return null;
  }

  return (
    <div className="bg-destructive/15 p-3 rounded-md flex items-center gap-x-2 text-sm text-destructive">
      <span>
        <HiOutlineExclamationTriangle className="w-5 h-5" />
      </span>
      <p>{message}</p>
    </div>
  );
};

export default FormError;