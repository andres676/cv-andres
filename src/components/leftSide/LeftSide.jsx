import Contact from "./Contact";
import Education from "./Education";
import Header from "./Header";
import styles from "../../styles/container.module.css";

export default function LeftSide() {
  return (
    <>
      <div className={styles.left_side}>
        <Header />
        <Contact />
        <Education />
      </div>
    </>
  );
}
