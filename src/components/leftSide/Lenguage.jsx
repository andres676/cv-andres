import Styles from "../../styles/contact.module.css";

const contactInfo = Styles.contactInfo;
const lenguage = Styles.lenguage;

export default function Lenguage() {
  return (
    <div className={`${contactInfo}${lenguage}`}>
      <h3 className={Styles.title}>Lenguage</h3>
      <ul>
        <li>
          <h5>Level A2</h5>
          <h4>English</h4>
        </li>
      </ul>
    </div>
  );
}
