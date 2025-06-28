import { toast } from "sonner";

export const handleCopyEmail = () => {
  const email = "akibur.pciu@gmail.com";
  navigator.clipboard
    .writeText(email)
    .then(() => {
      toast.success("Email Copied");
    })
    .catch(() => {
      toast.error("Failed To Copy");
    });
};
