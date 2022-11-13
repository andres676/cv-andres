import style from "../../styles/profileText.module.css";
import img from "../../img/profile.jpg";

const name = "andres ramos";
export default function Header() {
  return (
    <div className={style.profileText}>
      <div className={style.imgBx}>
        <img src={img} alt={name} />
      </div>
      <h2>
        Andrés Ramos
        <br />
        <span>Web Developer</span>
      </h2>
    </div>
  );
}
