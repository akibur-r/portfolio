import { toast } from "sonner";

export const handleCopyPhoneNumber = () => {
  const email = "+8801934921876";
  navigator.clipboard
    .writeText(email)
    .then(() => {
      toast.success("Phone Number Copied");
    })
    .catch(() => {
      toast.error("Failed To Copy");
    });
};
