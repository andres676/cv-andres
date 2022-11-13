import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import styles from "../../styles/container.module.css";

export default function RigthSide() {
  return (
    <>
      <div className={styles.rigth_side}>
        <About />
        <Experience />
        <Skills />
      </div>
    </>
  );
}
