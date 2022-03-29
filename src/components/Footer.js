import { useContext } from "react";
import ExpenseContext from "../contexts/ExpenseContext";

const Footer = () => {
    const {total} = useContext(ExpenseContext);
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>
          <strong>Total price is</strong> ₩{total.price}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
