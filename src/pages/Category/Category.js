import "./Category.css";
import Posts from "../../components/Posts/Posts";
import Sidebar from "../../components/Sidebar/Sidebar";

function Category() {
  return (
    <div className="category">
      <div className="categoryWrapper">
        <Posts />
      </div>
      <Sidebar />
    </div>
  );
}

export default Category;
