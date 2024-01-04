import { Link } from "react-router-dom";
import "../styles/Home.css";
const Home = () => {
  return (
    <Link to="/shop">
      <div className="dig-deep">
        <h1>ENTER</h1>
      </div>
    </Link>
  );
};

export default Home;
