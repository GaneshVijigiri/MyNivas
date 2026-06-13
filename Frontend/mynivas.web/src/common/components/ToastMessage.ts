import { toast } from "react-toastify";
import type { MessageTypeEnum } from "../utils/Enums";

export const ShowToastMessage = (
  message: string,
  type: MessageTypeEnum,
  duration: number = 3000,
) => {
  switch (type) {
    case "success":
      toast.success(message, {
        autoClose: duration,
        position: "top-right",
        closeOnClick: true,
        pauseOnHover: true,
      });
      break;
    case "error":
      toast.error(message, {
        autoClose: duration,
        position: "top-right",
        closeOnClick: true,
        pauseOnHover: true,
      });
      break;
    case "warning":
      toast.warning(message, {
        autoClose: duration,
        position: "top-right",
        closeOnClick: true,
        pauseOnHover: true,
      });
      break;
    case "info":
      toast.info(message, {
        autoClose: duration,
        position: "top-right",
        closeOnClick: true,
        pauseOnHover: true,
      });
      break;
  }
};
