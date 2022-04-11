import "./SinglePost.css";
import Single from "../../components/Single/Single";
import Sidebar from "../../components/Sidebar/Sidebar";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <Single />
      </div>

      <Sidebar />
    </div>
  );
}

export default SinglePost;
