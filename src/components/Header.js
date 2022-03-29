import { useContext } from "react";
import ExpenseContext from "../contexts/ExpenseContext";

const Header = () => {
  const { total } = useContext(ExpenseContext);
  return (
    <section className="hero is-info">
      <div className="hero-body">
        <p className="title">The total price is</p>
        <p className="subtitle">₩{total.price}</p>
      </div>
    </section>
  );
};

export default Header;
