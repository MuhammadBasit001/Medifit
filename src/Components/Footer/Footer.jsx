import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import message from "../images/message.png";
import twitter from "../images/twitter.png";
import youtube from "../images/youtube.png";
import location from "../images/location.png";
import phone from "../images/phone.png";

const Footer = () => {
  return (
    <section className="bg-[#E2DFCF] text-[#503017] w-full px-4 py-8 md:px-12">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-10">
        {/* Footer Columns */}
        <div className="flex flex-wrap gap-y-10">
          {/* Column 1 */}
          <div className="w-full sm:w-1/2 lg:w-2/12 px-2 min-w-0">
            <h3 className="font-bold text-xl mb-4">Pages</h3>
            <ul className="space-y-2 text-base">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/shop">Shop</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-full sm:w-1/2 lg:w-2/12 px-2 min-w-0">
            <h3 className="font-bold text-xl mb-4">Utilities</h3>
            <ul className="space-y-2 text-base">
              <li><Link to="/">Style Guide</Link></li>
              <li><Link to="/instructions">Instructions</Link></li>
              <li><Link to="/changelog">Changelog</Link></li>
              <li><Link to="/license">License</Link></li>
              <li><Link to="/linkinbio">Link in Bio</Link></li>
              <li><Link to="/404">Error 404</Link></li>
              <li><Link to="/protected">Password Protected</Link></li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-full sm:w-1/2 lg:w-5/12 px-2 min-w-0 flex flex-col items-center justify-center text-center">
            <img src={logo} alt="Company Logo" className="w-[160px] mb-4" />
            <p className="text-sm mb-4 lg:px-32">
              We provide the ultimate solution for your online store and all the healthcare needs.
            </p>
            <div className="flex gap-4">
              <img src={facebook} alt="facebook" className="w-5 h-5" />
              <img src={twitter} alt="twitter" className="w-5 h-5" />
              <img src={youtube} alt="youtube" className="w-5 h-5" />
              <img src={instagram} alt="instagram" className="w-5 h-5" />
            </div>
          </div>

          {/* Column 4 */}
          <div className="w-full sm:w-1/2 lg:w-3/12 px-2 min-w-0 flex justify-around flex-col gap-6">
            <div>
              <h2 className="font-bold text-xl mb-2">Address</h2>
              <div className="flex items-start gap-2">
                <img src={location} alt="location" className="w-6 h-6" />
                <p className="text-sm">1640 Parker Rd. Allentown, New Mexico 31134</p>
              </div>
            </div>

            <div>
              <h2 className="font-bold text-xl mb-2">Contact</h2>
              <div className="flex items-center gap-2">
                <img src={message} alt="email" className="w-6 h-6" />
                <p className="text-sm">hello@gmail.com</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <img src={phone} alt="phone" className="w-6 h-6" />
                <p className="text-sm">(209) 555-0104</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Note */}
        <div className="text-center text-sm pt-4 border-t border-gray-400 mt-6">
          <p>
            Design by <span className="underline font-bold">Webestica</span>, Powered by{" "}
            <span className="underline font-bold">Webflow</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
