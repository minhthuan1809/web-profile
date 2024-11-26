import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { sendGmailServer } from "../../service/render_api";

export default function sendGmail(
  name: string,
  email: string,
  title: string,
  message: string,
  onClick: () => void
) {
  const templateParams = {
    name: name,
    to_email: email,
    title: title,
    message: message,
  };

  emailjs.init("xTjvzrik9XPQIn2xt");
  emailjs.send("service_ml75s2u", "template_ivaioyk", templateParams).then(
    (response) => {
      console.log("SUCCESS!", response);
      if (response.status === 200) {
        sendGmailServer(name, email, title, message).then(() => {
          toast.success("Gửi thành công!");
          // onClick();
        });
      } else {
        toast.error("Gửi thất bại!");
      }
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
}
