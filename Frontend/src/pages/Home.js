import React from "react";
import architectureImg from "../assets/Architecture_img.jpg";
import w2cBfb from "../assets/w2c_bfb.png";
import w2cVb from "../assets/w2c_vb.png";
import w2cEc from "../assets/w2c_ec.png";
import w2cSc from "../assets/w2c_sc.png";
import "../style.css";

export default function Home() {
  return (
    <main>
      <section id="content1">
        <div>
          <h1 style={{ fontFamily: "Georgia, serif" }}>BEAM</h1>
          <h2>Connect. Collaborate. Deliver.</h2>
          <p>Your trusted B2B platform for sourcing expert services in software development, UI/UX design, testing,
            DevOps, ongoing maintenance and many more</p>
          <p>New to BEAM?</p>
          <p>Begin your journey with BEAM now -
            <a href="/signup" id="signup">
              Sign Up
              <svg className="border-svg" width="100%" height="100%" viewBox="0 0 160 50" preserveAspectRatio="none">
                <rect className="train" x="1" y="1" width="158" height="48" rx="15" ry="15" fill="none" stroke="white"
                  strokeWidth="3" strokeDasharray="600" strokeDashoffset="600" />
              </svg>
            </a>
          </p>
        </div>

        <div className="how-it-works">
          <h3 style={{ fontFamily: "Georgia, serif" }}>How It Works</h3>
          <div className="steps">
            <div className="step">
              <h4>1. Post a Requirement</h4>
              <p>Let the community know what you need.</p>
            </div>
            <div className="step">
              <h4>2. Get Proposals</h4>
              <p>Receive offers from trusted service providers tailored to your needs.</p>
            </div>
            <div className="step">
              <h4>3. Start Collaborating</h4>
              <p>Connect, negotiate, and kick off your project with full transparency.</p>
            </div>
          </div>
        </div>

        <div className="architecture">
          <h2 style={{ fontFamily: "Georgia, serif" }}>Flow of BEAM</h2>
          <img src={architectureImg} alt="Architecture" className="architecture_img" />
        </div>

        <div className="why-choose-us" style={{ color: "green" }}>
          <div className="content3">
            <h2 style={{ fontFamily: "Georgia, serif" }}>Why Choose Us</h2>
            <div className="arrangement-why-choose-us">
              {[{img: w2cBfb, list: ["Tailored, industry-specific solutions for maximum impact","Scalable infrastructure to grow with your business","Proven strategies to maximize ROI"]},
                {img: w2cVb, list: ["Trusted and verified business","Proven track record with high-quality deliverables","Guaranteed reliability and compliance"]},
                {img: w2cEc, list: ["Streamlined onboarding and workflow setup","Clear documentation to minimize back-and-forth","Easy access to updates and progress tracking"]},
                {img: w2cSc, list: ["Rapid execution without compromising quality","Transparent timelines and deliverables","Clear, concise reporting for better decision-making"]}
              ].map((item, idx) => (
                <div className="sub-arrangement-why-choose-us" key={idx}>
                  <img src={item.img} alt="Why choose us" />
                  <ul>{item.list.map((li, i) => <li key={i}>{li}</li>)}</ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="faq">
          <h3 style={{ fontFamily: "Georgia, serif" }}>Frequently Asked Questions</h3>
          <p>In development</p>
          <p>Will be integrating after taking feedback</p>
        </div>
      </section>
    </main>
  );
}
