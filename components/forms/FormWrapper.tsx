interface FormWrapperProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function FormWrapper({
  title,
  children,
  className = "",
}: FormWrapperProps) {
  return (
    <div className={`max-w-md mx-auto space-y-4 py-4 ${className}`}>
      <h3 className="text-center font-bold text-lg">{title}</h3>
      {children}
    </div>
  );
}