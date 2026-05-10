import logoIcon from "../assets/logo.png";

function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            <img className="logo-icon" src={logoIcon} alt="" />
            <span>FloraVision.</span>
          </div>
          <p className="mt-[18px]">
            "From lush indoor greens to vibrant outdoor blooms, our plants are
            crafted to thrive and elevate your living environment."
          </p>
          <div className="social-row" aria-label="Social links">
            <span>FB</span>
            <span>TW</span>
            <span>LI</span>
          </div>
        </div>

        <div>
          <h4>Quick Link's</h4>
          <ul>
            {["Home", "Type's Of plant's", "Contact", "Privacy"].map((link) => (
              <li key={link}>
                <a href="#home">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4>For Every Update.</h4>
          <form
            onSubmit={(event) => event.preventDefault()}
            className="subscribe-row"
          >
            <input type="email" placeholder="Enter Email" aria-label="Email address" />
            <button type="submit">SUBSCRIBE</button>
          </form>
          <div className="copyright">FloraVision @ all right reserve</div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
