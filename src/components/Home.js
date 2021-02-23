import { Link } from "react-router-dom";
import "../styles/Home.css";
const Home = () => {
  return (
    <Link to="/shop">
      <div className="dig-deep">
        <h1>DIG DEEP</h1>
      </div>
    </Link>
  );
};

export default Home;
