import Styles from "../../styles/skills.module.css";
import Style from "../../styles/about.module.css";

const skillsDb = [
  {
    level: "medium",
    skill: "JAVASCRIPT",
  },
  {
    level: "medium",
    skill: "CSS",
  },
  {
    level: "medium",
    skill: "HTML",
  },
  {
    level: "medium",
    skill: "GIT",
  },
  {
    level: "medium",
    skill: "NODE.JS",
  },
  {
    level: "basic",
    skill: "REACT.JS",
  },
  {
    level: "basic",
    skill: "NEXT.JS",
  },
  {
    level: "basic",
    skill: "MONGODB",
  },
  {
    level: "basic",
    skill: "MYSQL",
  },
  {
    level: "basic",
    skill: "JAVA",
  },
  {
    level: "basic",
    skill: "PYTHON",
  },
];

export default function Skills() {
  return (
    <>
      <h2 className={Style.title2}>Professional Skills</h2>
      <div className={Styles.skills}>
        {skillsDb.map((data, id) => {
          return (
            <div className={Styles.box} key={id}>
              <h4 translate="no">{data.skill}</h4>
              <h5>{data.level}</h5>
            </div>
          );
        })}
      </div>
    </>
  );
}
