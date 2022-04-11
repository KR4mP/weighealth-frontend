import "./Sidebar.css";
import Affiliate from "../Affiliate/Affiliate";
import Picks from "../Picks/Picks";
import affiliateImage from "./../../images/keto_diet_affiliate.jpg";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="picksForYou">
        <h2>Picks For You</h2>
      </div>
      <Picks className="picks" />
      <div className="sidebar__affiliateLink">
        <h2 className="sidebar__title">
          Get Your 21 Free Keto Diet Recipes Straight To Your Inbox!
        </h2>
        <img
          className="affiliateImg"
          src={affiliateImage}
          alt="21 Free Keto Diet"
        />
        <Affiliate />
      </div>
    </div>
  );
}

export default Sidebar;
