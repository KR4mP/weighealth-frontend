import "./Write.css";
import { AiOutlinePlusCircle } from "react-icons/ai";

function Write() {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        className="writeImg"
      />
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <AiOutlinePlusCircle className="writeIcon" />
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Write your post here..."
            className="writeText writeInput"
          ></textarea>
        </div>
        <input type="submit" value="Publish" className="writeSubmit" />
      </form>
    </div>
  );
}

export default Write;
