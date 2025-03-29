import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { User } from "@prisma/client";

interface Props {
  instructor: User;
}

export const InstructorInfo = ({ instructor }: Props) => {
  const { firstName, lastName, imageUrl } = instructor;

  return (
    <div className="w-full c-card py-6 px-4">
      <div className="flex flex-col items-center gap-5 justify-center">
        <Avatar className="size-20">
          <AvatarImage src={imageUrl as string} />
          <AvatarFallback>{firstName.charAt(0)}</AvatarFallback>
        </Avatar>
        <h3>{firstName.concat(" ", lastName, " | مدرس دوره")}</h3>
      </div>
      <div className="mt-4 flex justify-center">
        <Link href={"#"}>
          <Button variant="outline" className="text-sm font-normal">
            مشاهده پروفایل مدرس
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default InstructorInfo;