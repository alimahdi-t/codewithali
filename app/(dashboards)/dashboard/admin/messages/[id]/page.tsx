import { getContactMessage } from "@/actions/messages/get-contact-message.action";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HiOutlineCalendarDays,
  HiOutlineDevicePhoneMobile,
  HiOutlineEnvelope,
  HiOutlineUser,
} from "react-icons/hi2";
import moment from "jalali-moment";
import { convertToPersianNumbers } from "@/utils";
import { SendMessageAnswerForm } from "@/components/forms/SendMessageAnswerForm";

interface Props {
  params: Promise<{ id: string }>;
}

const MessagePage = async (props: Props) => {
  const { id } = await props.params;
  const response = await getContactMessage({ id });

  if (response.error) {
    toast.error(response.error);
  }

  const { message } = response;
  if (!message) {
    return null;
  }

  return (
    <div className="flex flex-col gap-y-4">
      <Card>
        <CardHeader>
          <CardTitle>{message.title}</CardTitle>
          <div className="flex flex-wrap items-center gap-x-4 justify-self-end text-gray-600">
            <div className="flex items-center gap-x-1">
              <HiOutlineUser className="size-4" />
              <p className="text-xs font-normal">{message.fullName}</p>
            </div>
            <div className="flex items-center gap-x-1">
              <HiOutlineEnvelope className="size-4" />
              <p className="text-xs font-normal">{message.email}</p>
            </div>
            <div className="flex items-center gap-x-1 ">
              <HiOutlineCalendarDays className="size-4" />
              <p className="text-xs font-normal">
                {convertToPersianNumbers(
                  moment(new Date(message.createdAt))
                    .locale("fa")
                    .format("ddd DD MMM YYYY - ساعت HH:mm:ss"),
                )}
              </p>
            </div>

            {message.phone && (
              <div className="flex items-center gap-x-1 ">
                <HiOutlineDevicePhoneMobile className="size-4" />

                <p className="text-xs font-normal">
                  {convertToPersianNumbers(message.phone)}
                </p>
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent>{message.message}</CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>پاسخ</CardTitle>
        </CardHeader>
        <CardContent>
          <SendMessageAnswerForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default MessagePage;