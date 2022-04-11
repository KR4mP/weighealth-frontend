import "./Home.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Hero from "../../components/Hero/Hero";
import Posts from "../../components/Posts/Posts";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__wrapper">
        <Hero />
        <Link className="catTitle homeLink" to="/category/diets">
          <span>DIETS</span>
        </Link>
        <Posts />
        <Link className="catTitle homeLink" to="/category/fitness">
          <span>FITNESS</span>
        </Link>
        <Posts />
        <Link className="catTitle homeLink" to="/category/health">
          <span>HEALTH</span>
        </Link>
        <Posts />
        <Link className="catTitle homeLink" to="/category/wellness">
          <span>WELLNESS</span>
        </Link>
        <Posts />
        <Link className="catTitle homeLink" to="/category/lifestyle">
          <span>LIFESTYLE</span>
        </Link>
        <Posts />
      </div>
      <Sidebar />
    </div>
  );
}

export default Home;
