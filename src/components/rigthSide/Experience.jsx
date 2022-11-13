import Styles from "../../styles/about.module.css";
const experienceDb = [
  {
    years: "2022",
    company: "freelance",
    position: "developer",
    occupation:
      "Creator of web pages implementing different programming languages.",
  },
  {
    years: "2019 - 2021",
    company: "own business",
    position: "manager",
    occupation:
      "In charge of planning and directing the correct elaboration of the work for the satisfaction of the clients.",
  },
  {
    years: "2016 - 2019",
    company: "peru chicken",
    position: "administrator",
    occupation:
      "In charge of verifying all the functions of the restaurant, making purchases and inventory, paying payroll and general services of the company.",
  },
  {
    years: "2014 - 2016",
    company: "cubanitos",
    position: "food handler",
    occupation:
      "Responsible for the correct preparation of food ordered by customers.",
  },
  {
    years: "2012 - 2014",
    company: "super burguer",
    position: "domiciliary",
    occupation: "Receive and deliver orders made by customers.",
  },
];

export default function Experience() {
  return (
    <div className={Styles.about}>
      <h2 className={Styles.title2}>Experience</h2>
      {experienceDb.map((data, id) => {
        return (
          <div className={Styles.box} key={id}>
            <div className={Styles.year_company}>
              <h5>{data.years}</h5>
              <h5 translate="no">{data.company}</h5>
            </div>
            <div className={Styles.text}>
              <h4>{data.position}</h4>
              <p>{data.occupation}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
