import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { sendGmailServer } from "../../service/render_api";

export default function sendGmail(
  name: string,
  email: string,
  title: string,
  message: string,
  onClick: () => void,
  setLoadingBtn: (loading: boolean) => void
) {
  const templateParams = {
    name: name,
    to_email: email,
    title: title,
    message: message,
  };
  emailjs.init(import.meta.env.VITE_YOUR_PUBLIC_KEY);
  emailjs
    .send(
      import.meta.env.VITE_YOUR_SERVICE_ID,
      import.meta.env.VITE_YOUR_TEMPLATE_ID,
      templateParams
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response);
        if (response.status === 200) {
          sendGmailServer(name, email, title, message).then(() => {
            toast.success("Gửi thành công!");
            onClick();
            setLoadingBtn(false);
          });
        } else {
          toast.error("Gửi thất bại!");
          setLoadingBtn(false);
        }
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
}
