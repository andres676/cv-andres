import { BsWhatsapp, BsLinkedin, BsGithub } from "react-icons/bs";
import { MdContactMail, MdLocationOn } from "react-icons/md";
import Styles from "../../styles/contact.module.css";

const contactDb = [
  {
    icons: <BsWhatsapp />,
    info: "+57 314 515 2813",
  },
  {
    icons: <MdContactMail />,
    info: "r.rubio676@gmail.com",
  },
  {
    icons: <BsLinkedin />,
    info: "www.linkedin.com/in/",
  },
  {
    icons: <BsGithub />,
    info: "github.com/andres676",
  },
  {
    icons: <MdLocationOn />,
    info: "Cali, Colombia",
  },
];

export default function Contact() {
  return (
    <div className={Styles.contactInfo}>
      <h3 className={Styles.title}>Contact Info</h3>
      <ul>
        {contactDb.map((data, id) => {
          return (
            <li key={id}>
              <span className={Styles.icon}>{data.icons}</span>
              <span className={Styles.text}>{data.info}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
