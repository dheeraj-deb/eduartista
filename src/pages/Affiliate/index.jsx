import { Link } from "react-router-dom";

import "./style.css";

function Affiliate() {
  return (
    <>
      <div className="Affiliate-color1">
        <br />
        <div className="flex justify-center">
          <div className="Affiliatedivfirst">
            <img src="/Affiliate1.png" className="w-full" alt="/" />
          </div>
        </div>
        <p className="text-white text-center text-3xl font-bold">
          <b>Become Our Agent</b>
        </p>
        <br />
        <p className="text-white text-center text-md px-5">
          <b>Earn 30-50% commission every time you make a sale</b>
        </p>
        <br />
        <div className="flex justify-center">
          <Link href="/Signup">
            <a className="px-4">
              <button
                type="button"
                className="bg-blue-600 px-4 py-3 text-white font-bold rounded"
              >
                <b>SIGN IN</b>
              </button>
            </a>
          </Link>
          <Link href="/Login">
            <a className="px-4">
              <button
                type="button"
                className="bg-blue-400 px-4 py-3 text-white font-bold rounded"
              >
                <b>LOGIN</b>
              </button>
            </a>
          </Link>
        </div>
        <br />
        <br />
      </div>

      <div className="Affiliate-color2">
        <br />
        <br />
        <br />
        <div className="container">
          <p className="text-center text-2xl font-bold">
            <b>
              Start Selling Our Super Popular Products to Your Network And Earn
              High Commission!
            </b>
          </p>
          <br />
          <img src="/Affiliate2.png" className="w-[400px]" alt="/" />
          <br />
          <br />
          <br />
          <div className="container">
            <p className="text-center text-2xl font-bold">
              <b>Three Reasons Why You Should Become An Agent Already Today</b>
            </p>
            <br />
            <p className="text-center text-lg text-gray-500">
              Our hassle-free digital products for social media are in
              exceptional demand and suitable for everyone in your network. The
              best thing is that we offer the highest commission on the entire
              internet.
            </p>
            <br />
            <br />
            <br />
            <br />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="">
                <p className="text-center text-4xl font-bold">
                  <b>1.</b>
                </p>
                <br />
                <p className="text-center text-xl font-bold">
                  <b>START EARNING TODAY</b>
                </p>
                <br />
                <p className="text-center text-gray-500">
                  We made the selling easy for you. After our straightforward
                  registration, you can access your agent dashboard, referral
                  link, and promotional materials right away. Create your first
                  promotional social media post, email, or blog article today
                  and make your first sales.{" "}
                </p>
              </div>
              <div className="">
                <p className="text-center text-4xl font-bold">
                  <b>2.</b>
                </p>
                <br />
                <p className="text-center text-xl font-bold">
                  <b>PROVEN PRODUCTS</b>
                </p>
                <br />
                <p className="text-center text-gray-500">
                  {" "}
                  Millions of people are thriving for social media success every
                  day. By promoting our beloved products, you can help
                  individuals, businesses, and organizations to succeed on
                  social media. Your network will easily find their favorite
                  products from our selection of over 200 products for over 40
                  industries.
                </p>
              </div>
              <div className="">
                <p className="text-center text-4xl font-bold">
                  <b>3.</b>
                </p>
                <br />
                <p className="text-center text-xl font-bold">
                  <b>HIGH COMMISSION</b>
                </p>
                <br />
                <p className="text-center text-gray-500">
                  We are known and praised for an exceptionally high commission.
                  We appreciate our Agent, and we want to offer you a way to
                  make an excellent level of income by giving you a 30-50%
                  commission for every sale you make. You can work wherever you
                  want and whenever you want by selling our digital products.
                </p>
              </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <p className="text-center text-4xl font-bold">
              SIGN UP NOW AND YOU CAN START RIGHT AWAY
            </p>
            <br />
            <div className="flex justify-center">
              <Link href="/Signup">
                <a className="px-4">
                  <button
                    type="button"
                    className="bg-blue-600 px-4 py-3 text-white font-bold"
                  >
                    <b>REGISTER AND START SELLING</b>
                  </button>
                </a>
              </Link>
            </div>
            <br />
            <p className="text-center text-lg">
              Your registration will be approved automatically. You will find
              your own agent link from the Agent Dashboard. Also, you will
              receive access in promotional materials via email.
            </p>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="Affiliate-color1">
        <br />
        <div className="container">
          <p className="text-white text-center text-4xl font-bold">
            <b>In A Nutshell</b>
          </p>
          <br />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="">
              <div className="flex justify-center">
                <div className="Affiliatedivsecond">
                  <img src="/Affiliateicon1.png" className="w-full" alt="/" />
                </div>
              </div>
              <p className="text-white text-center text-xl font-bold">
                <b>30-50% Commission</b>
              </p>
              <p className="text-white text-center text-xl font-bold">
                We offer a high commission for every sale you make
              </p>
            </div>
            <div className="">
              <div className="flex justify-center">
                <div className="Affiliatedivsecond">
                  <img src="/Affiliateicon2.png" className="w-full" alt="/" />
                </div>
              </div>
              <p className="text-white text-center text-xl font-bold">
                <b>Best-Selling Products</b>
              </p>
              <p className="text-white text-center text-xl font-bold">
                We have over +200 products for various industries
              </p>
            </div>
            <div className="">
              <div className="flex justify-center">
                <div className="Affiliatedivsecond">
                  <img src="/Affiliateicon3.png" className="w-full" alt="/" />
                </div>
              </div>
              <p className="text-white text-center text-xl font-bold">
                <b>Promotional Materials</b>
              </p>
              <p className="text-white text-center text-xl font-bold">
                Social media templates, emails and articles for you to use
              </p>
            </div>
          </div>
          <br />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="">
              <div className="flex justify-center">
                <div className="Affiliatedivsecond">
                  <img src="/Affiliateicon4.png" className="w-full" alt="/" />
                </div>
              </div>
              <p className="text-white text-center text-xl font-bold">
                <b>MLM</b>
              </p>
              <p className="text-white text-center text-xl font-bold">
                Invite other agent and earn even higher commission
              </p>
            </div>
            <div className="">
              <div className="flex justify-center">
                <div className="Affiliatedivsecond">
                  <img src="/Affiliateicon5.png" className="w-full" alt="/" />
                </div>
              </div>
              <p className="text-white text-center text-xl font-bold">
                <b>Community</b>
              </p>
              <p className="text-white text-center text-xl font-bold">
                Be part of our community and learn from others
              </p>
            </div>
            <div className="">
              <div className="flex justify-center">
                <div className="Affiliatedivsecond">
                  <img src="/Affiliateicon6.png" className="w-full" alt="/" />
                </div>
              </div>
              <p className="text-white text-center text-xl font-bold">
                <b>14 Days Payout</b>
              </p>
              <p className="text-white text-center text-xl font-bold">
                You will receive your commission in 14 days
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="Affiliate-color2">
        <br />
        <br />
        <br />
        <div className="container">
          <p className="text-center text-3xl font-bold">
            <b>When You Start, You Will Have A High Commission...</b>
          </p>
          <br />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="">
              <img src="/Affiliateimg1.png" className="w-full" alt="/" />
            </div>
            <div className="">
              <img src="/Affiliateimg2.png" className="w-full" alt="/" />
            </div>
            <div className="">
              <img src="/Affiliateimg3.png" className="w-full" alt="/" />
            </div>
            <div className="">
              <img src="/Affiliateimg4.png" className="w-full" alt="/" />
            </div>
          </div>
          <br />
          <p className="text-center text-3xl font-bold">
            <b>... And Soon You Will Have Even Higher Commission.</b>
          </p>
          <br />
          <div className="flex justify-center">
            <Link href="/Signup">
              <a className="px-4">
                <button
                  type="button"
                  className="bg-blue-600 px-4 py-3 text-white font-bold"
                >
                  <b>REGISTER AND START SELLING</b>
                </button>
              </a>
            </Link>
          </div>
          <br />
          <p className="text-center text-lg text-gray-500">
            As a new Agent, you start from the BRONZE level with a 30%
            commission for every sale made with your agent link. Once your
            all-time sales reach $5 000, you will raise on the SILVER level and
            start getting a 35% commission. You will raise on the GOLD level and
            get 40% commission once your sales reach $15 000. After $50 000, you
            will be raise on the PLATINUM level.
          </p>
          <br />
          <br />
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shadow-lg p-4 rounded-lg">
            <div className="">
              <div className="flex justify-center">
                <div className="Affiliatedivthird">
                  <img src="/Affiliateimg5.png" className="w-full" alt="/" />
                </div>
              </div>
              <br />
              <br />
            </div>
            <div className="p-3">
              <p className="text-3xl font-bold text-black">
                <b>Level Up To Hall Of Fame</b>
              </p>
              <br />
              <br />
              <p className="text-lg">
                Finally, when your lifetime sales reach $50 000, you will be
                nominated to our Hall of Fame and receive DIAMOND status and
                with 50% commission.
              </p>
              <br />
              <p className="text-lg">
                DIAMOND Agent will be invited to our Agent Assembly once in a
                year.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>

      <div className="Affiliate-color1">
        <br />
        <br />
        <div className="container">
          <p className="text-white text-center text-3xl font-bold">
            <b>Empowering Our Women</b>
          </p>
          <br />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4">
            <div className="p-4">
              <div className="flex justify-center">
                <div className="">
                  <img
                    src="/women_empowerment.jpg"
                    className="rounded w-[250px]"
                    alt="/"
                  />
                </div>
              </div>
              <br />
              <p className="text-xl text-center">
                <b>Life-time Commission</b>
              </p>
              <p className="text-xl text-center text-gray-500">
                <b>$46 742</b>
              </p>
            </div>
            <div className="p-4">
              <p className="text-2xl font-bold">
                <i>{`"One of the best agent schema"`}</i>
              </p>
              <br />
              <br />
              <p className="text-lg text-gray-500">
                <i>{`"Empowering women through financial independence, our agent scheme offers a pathway to self-sufficiency. Join us and become an agent, earning commissions while supporting women to thrive economically. With our program, women can generate their income, paving the way for autonomy and success. Be part of a community dedicated to fostering female entrepreneurship and empowerment. Together, let's break barriers and build a future where women control their financial destinies."`}</i>
              </p>
              <br />
              <p className="text-lg text-gray-500">
                <i>- Juhani, Agent Marketer</i>
              </p>
            </div>
          </div>
          <br />
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white p-4">
            <div className="p-4">
              <div className="flex justify-center">
                <div className="Affiliatedivthird">
                  <img
                    src="/imgwomen.png"
                    className="rounded-full w-40"
                    alt="/"
                  />
                </div>
              </div>
              <br />
              <p className="text-xl text-center">
                <b>Life-time Commission</b>
              </p>
              <p className="text-xl text-center text-gray-500">
                <b>$12 731</b>
              </p>
            </div>
            <div className="p-4">
              <p className="text-2xl font-bold">
                <i>{`"I make $1000 extra in a month with these commissions"`}</i>
              </p>
              <br />
              <br />
              <p className="text-lg text-gray-500">
                <i>{`"I am a big fan of SMC's products by myself, and my followers ask every day how I can create such good content. It's easy to share my agent link with promotional code and recommend these templates and make some extra money. Now I make about $1000 in a month with SMC's commissions. It's becoming my best passive revenue stream as an influencer, and I will focus even more on this in the future.`}</i>
              </p>
              <br />
              <p className="text-lg text-gray-500">
                <i>- Lotta, Wellness Influencer</i>
              </p>
            </div>
          </div> */}
        </div>
        <br />
        <br />
      </div>

      <div className="Affiliate-color2">
        <br />
        <br />
        <br />
        <div className="container">
          <div className="flex justify-center">
            <div className="Affiliatedivfourth">
              <img src="/Affiliate3.png" className="w-full" alt="/" />
            </div>
          </div>
          <br />
          <p className="text-3xl text-center font-bold">
            <b>Who Is Our Agent Program For?</b>
          </p>
          <br />
          <p className="text-xl text-center text-gray-500">
            <b>
              The agent is suitable especially for agent marketers, bloggers and
              social media influencers. But, even if you don’t have a large
              followers base, you can invite your family, friends, neighbors and
              even strangers!
            </b>
          </p>
          <br />
          <br />
          <p className="text-3xl text-center font-bold">
            <b>How Does Our Agent Program Work?</b>
          </p>
          <br />
          <p className="text-lg text-gray-500">
            <b>{`1. Sign in for Social Media Calendar's Affiliate Program.`}</b>
          </p>
          <br />
          <p className="text-lg text-gray-500">
            <b>
              2. Go to the agent program dashboard and copy your unique link for
              the whole web store of for a specific product.
            </b>
          </p>
          <br />
          <p className="text-lg text-gray-500">
            <b>3. Share the link and start earning money.</b>
          </p>
          <br />
          <br />
          <div className="flex justify-center">
            <div className="Affiliatedivfourth">
              <img src="/Affiliate4.png" className="w-full" alt="/" />
            </div>
          </div>
          <br />
          <br />
          <p className="text-3xl text-center font-bold">
            <b>How I Earn Money?</b>
          </p>
          <br />
          <p className="text-xl text-center text-gray-500">
            <b>
              Every time somebody uses your link to buy our products, you will
              receive a 30-50% commission (depending on your tier) after 14
              days. Our refund policy is 14 days, so your commission is
              available for payout after that.
              <br />
              <br />
              Your earnings will be paid with PayPal. You need to set up a
              PayPal account to be able to receive payments.
              <br />
              <br />
              You can see all your numbers when you log into your agent account
              and check the dashboard.
            </b>
          </p>
          <br />
          <br />
          <p className="text-3xl text-center font-bold">
            <b>How Can You Promote Our Products?</b>
          </p>
          <br />
          <p className="text-lg text-gray-500">
            <b>
              Anyone can start growing a thriving agent business right today -
              thanks to the internet and social media!
              <br />
              <br />
              And if you already have followers, you hit the golden vein.
              <br />
              <br />
              Here are some examples of how you can easily make money with agent
              marketing:
              <br />
              <br />
              1. First, share the link with your friends, family, and contacts.
              <br />
              2. Share your agent link repeatedly on your social media
              platforms.
              <br />
              3. Share your agent link on your website and blog.
              <br />
              4. If you have a list, share your link with email.
              <br />
              <br />
              Steps 1 and 2, you can do right away. Later you can boost your
              sales with a website and growing an email list.
              <br />
              <br />
              Login to our Agent Partner online course to get access to tips and
              marketing materials.
            </b>
          </p>
          <br />
          <br />
          <p className="text-center text-3xl font-bold">
            <b>Sign In And Start Making Money! </b>
          </p>
          <br />
          <div className="flex justify-center">
            <Link href="/Signup">
              <a className="px-4">
                <button
                  type="button"
                  className="bg-blue-600 px-4 py-3 text-white font-bold"
                >
                  <b>REGISTER AND START SELLING</b>
                </button>
              </a>
            </Link>
          </div>
        </div>
        <br />
        <br />
      </div>

      <div className="frequently-asked-questions-color">
        <br />
        <br />
        <div className="container">
          <p className="text-3xl text-center text-gray-700">
            <b>Frequently Asked Questions</b>
          </p>
          <br />
          <br />
          <br />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-md-12">
              <div className="accordion accordion-flush" id="faqlist">
                <div className="accordion-item">
                  <h2 className="accordion-header px-2 frequently-asked-questions-color">
                    <button
                      className="accordion-button collapsed frequently-asked-questions-color"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-1"
                    >
                      What is my commission and when I will receive the money?
                    </button>
                  </h2>
                  <div
                    id="faq-content-1"
                    className="accordion-collapse collapse "
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      We offer 30-50% commission for our Agent. More you sell,
                      higher commission you will earn. Our agent software
                      (Affilo) will pay your commission automatically after 14
                      days when the refund policy period for the order is
                      passed.
                    </div>
                  </div>
                </div>
                <hr className="bg-dark" />
                <div className="accordion-item">
                  <h2 className="accordion-header px-2 frequently-asked-questions-color">
                    <button
                      className="accordion-button collapsed frequently-asked-questions-color"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-content-2"
                    >
                      Do you offer shareable discount codes for agents?
                    </button>
                  </h2>
                  <div
                    id="faq-content-2"
                    className="accordion-collapse collapse"
                    data-bs-parent="#faqlist"
                  >
                    <div className="accordion-body">
                      Yes, every Agent has a unique discount code for 20%
                      discount for first-time buyers.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </>
  );
}

export default Affiliate;
