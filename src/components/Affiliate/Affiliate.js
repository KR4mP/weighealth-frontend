import "./Affiliate.css";

function Affiliate() {
  return (
    <div className="affiliate">
      <div className="affiliate__wrapper">
        <form className="affiliateForm">
          <input type="text" placeholder="First Name.." />
          <input type="email" placeholder="E-mail Adress.." />
          <button type="submit">E-Mail Me The Free Recipes</button>
        </form>
      </div>
    </div>
  );
}

export default Affiliate;
