import emailjs from "@emailjs/browser";

export default function sendGmail(
  name: string,
  email: string,
  title: string,
  message: string
) {
  var templateParams = {
    name: name,
    to_email: email,
    title: title,
    message: message,
  };
  console.log(templateParams);
  emailjs.init("xTjvzrik9XPQIn2xt");
  emailjs.send("service_ml75s2u", "template_ivaioyk", templateParams).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
    },
    (error) => {
      console.log("FAILED...", error);
    }
  );
}
