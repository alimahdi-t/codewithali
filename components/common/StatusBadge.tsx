interface StatusBadgeProps {
  variant: "success" | "warning" | "error" | "info";
  text: string;
}

const statusVariants: Record<
  StatusBadgeProps["variant"],
  { className: string }
> = {
  info: {
    className: "text-action-info bg-action-light-info dark:bg-action-info/50",
  },
  success: {
    className:
      "text-action-success bg-action-light-success dark:bg-action-success/50",
  },
  warning: {
    className:
      "text-action-warning bg-action-light-warning dark:bg-action-warning/50",
  },
  error: {
    className:
      "text-action-error bg-action-light-error dark:bg-action-error/50",
  },
};

export const StatusBadge = ({ variant, text }: StatusBadgeProps) => {
  const style = statusVariants[variant];

  return (
    <span
      className={`${style.className} px-2 inline-block py-1 rounded-xl text-xs font-light leading-5 text-center text-nowrap`}
    >
      {text}
    </span>
  );
};