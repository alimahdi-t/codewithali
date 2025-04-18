import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  text: string;
  maxWidth?: string; // Optional override for width
};

export const TruncatedTooltipText = ({
  text,
  maxWidth = "max-w-60",
}: Props) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <p className={`truncate ${maxWidth}`}>{text}</p>
        </TooltipTrigger>
        <TooltipContent>
          <p className="text-wrap max-w-md text-sm leading-6">{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};