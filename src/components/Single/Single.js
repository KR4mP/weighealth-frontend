import "./Single.css";
import { BsFillPencilFill } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";

function Single() {
  return (
    <div className="single">
      <img
        src="https://www.helpguide.org/wp-content/uploads/calories-counting-diet-food-control-and-weight-loss-concept-calorie-768.jpg"
        alt=""
        className="singleImg"
      />
      <h1 className="singleTitle">
        Lorem ipsum dolor sit amet.
        <div className="singleEdit">
          <BsFillPencilFill className="singleIcon" />
          <FiTrash2 className="singleIcon" />
        </div>
      </h1>
      <div className="singleInfo">
        <span className="singleAuthor">
          Author: <b>Can</b>
        </span>
        <span className="singleDate">1 Hour Ago</span>
      </div>
      <p className="singleDesc">
        Lorem ipsum dolor siLorem ipsum dolor sit, amet consectetur adipisicing
        elit. Accusantium exercitationem deleniti nesciunt ipsam omnis magnam
        doloribus, dolores porro facere voluptatem. Sequi officiis veritatis
        impedit explicabo aliquam labore beatae culpa temporibus?Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Accusantium exercitationem
        deleniti nesciunt ipsam omnis magnam doloribus, dolores porro facere
        voluptatem. Sequi officiis veritatis impedit explicabo aliquam labore
        beatae culpa temporibus?t, amet consectetur adipisicing elit.
        Accusantium exercitationem deleniti nesciunt ipsam omnis magnam
        doloribus, dolores porro facere voluptatem. Sequi officiis veritatis
        impedit explicabo aliquam labore beatae culpa temporibus? Lorem ipsum
        dolor sit, amet consectetur adipisicing elit. Accusantium exercitationem
        deleniti nesciunt ipsam omnis magnam doloribus, dolores porro facere
        voluptatem. Sequi officiis veritatis impedit explicabo aliquam labore
        beatae culpa temporibus?
      </p>
    </div>
  );
}

export default Single;
