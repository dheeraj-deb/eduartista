import { Link } from "react-router-dom";

function Learnmore_Become_Affiliate() {
  return (
    <>
      <div className="row g-0 learn-more-become-affiliate-color flex-col md:flex-row">
        <div className="col-sm-6 d-flex align-items-center justify-content-center py-4">
          <img
            src="/Learn-Become-Affiliate.png"
            className="img-fluid "
            alt="/"
          />
        </div>
        <div className="col-sm-6 d-flex align-items-center justify-content-center py-4">
          <div className="px-5">
            <h2>
              <b>Easy way to make money online!</b>
            </h2>
            <br />
            <p>
            Elevate your earnings with our agent scheme, a pathway to increased income and financial stability. Join our network and unlock opportunities to boost your income through commissions. With flexible hours and unlimited earning potential, our program empowers you to take control of your financial future. Become an agent today and start maximizing your earning potential. Seize the opportunity to thrive and achieve your financial goals with us!
            </p>
            <br />
            <p>
              You earn 35% commission for every sale you make via your referral
              link. There is no limit on how much you can earn!
            </p>
            <br />
            <Link to="/Affiliate">
              <a>
                <button type="button" className="btn text-sm btn-lg">
                  <b>Learn More And Become An Agent</b>
                </button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Learnmore_Become_Affiliate;
