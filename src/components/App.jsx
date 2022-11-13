import LeftSide from "./leftSide/LeftSide";
import RigthSide from "./rigthSide/RigthSide";
import styles from "../styles/container.module.css";

const App = () => (
  <div className={styles.container}>
    <LeftSide />
    <RigthSide />
  </div>
);

export default App;
