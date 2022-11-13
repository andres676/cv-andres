import Styles from "../../styles/contact.module.css";
import Lenguage from "./Lenguage";

const contact = Styles.contactInfo;
const education = Styles.education;

export default function Education() {
  const educationDb = [
    {
      dates: "April-November del 2022",
      career: "Software Developer",
      institution: "Universidad Tecnológica de Pereira",
    },
    {
      dates: "April-October del 2022",
      career: "Software Developer",
      institution: "Oracle Next Education - Alura",
    },
    {
      dates: "Class of 2008",
      career: "Graduate",
      institution: "School Técnico Juvenil del Sur",
    },
  ];
  return (
    <>
      <div className={`${contact} ${education}`}>
        <h3 className={Styles.title}>Education</h3>
        <ul>
          {educationDb.map((data, id) => {
            return (
              <li key={id}>
                <h5>{data.dates}</h5>
                <h4>{data.career}</h4>
                <h4>{data.institution}</h4>
              </li>
            );
          })}
        </ul>
        <Lenguage />
      </div>
    </>
  );
}
