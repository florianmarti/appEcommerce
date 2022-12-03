import "./Navbar.css";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const funcionClick = () => {};
  <Link to="/descripcion/categoria/regionales" />;

  return (
    <div className="divConteiner">
      <nav className="containerNav">
        <h1 style={{ color: props.color }}>Navbar de eCommerce</h1>
        <section>
          <button handleOnClick={funcionClick}>Regionales</button>
          <button colorText="blue">Mates</button>
        </section>
        <br></br>
        <box-icon name="menu"></box-icon>
        <CartWidget />
      </nav>
    </div>
  );
};
export default Navbar;
