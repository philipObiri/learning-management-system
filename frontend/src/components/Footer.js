import {Link} from "react-router-dom";
function Footer() {
  return (
    <footer className="footer text-white bg-dark py-5 mt-auto border-top">
      <div className="container">
        <p className="float-end mb-1">
          <a href="/#">
            <font >
              <font >Back to top</font>
            </font>
          </a>
        </p>
        <p class="mb-1">
          Copyright © 2023
        </p>
        <p class="mb-0">
         <Link to="/contact">Contact Support</Link>
        </p>
      </div>
    </footer>
  )
}
export default Footer;
