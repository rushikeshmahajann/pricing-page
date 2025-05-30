import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-full bg-black text-white font-poppin tracking-tight">

      <div className="w-full md:max-w-[1680px] h-full mx-auto">
        <div className="h-max px-6">
          <div className="flex items-center">
            {" "}
            <div className="rounded-full w-8 h-8 bg-gradient-to-r from-purple-50 to-purple-100"></div>
            <h2 className="font-bold mb-4 mt-4 pt-12 text-5xl sm:text-6xl md:text-8xl">buyOu</h2>
          </div>
          <p className="text-sm md:text-base max-w-sm text-gray-400 mb-4">
            Build stunning video-powered storefronts in minutes. No code, no
            hassle.
          </p>
          <div className="flex gap-4 mt-4 text-lg text-gray-400">
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaLinkedin />
            </a>
            <a href="#">
              <FaYoutube />
            </a>
          </div>
        </div>
        <div className="w-full mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
   
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Templates</a>
              </li>
              <li>
                <a href="#">Integrations</a>
              </li>
              <li>
                <a href="#">Video Showcase</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
            </ul>
          </div>

  
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">API Docs</a>
              </li>
              <li>
                <a href="#">Community</a>
              </li>
              <li>
                <a href="#">Video Guides</a>
              </li>
              <li>
                <a href="#">System Status</a>
              </li>
            </ul>
          </div>

    
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#">Terms of Service</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookie Policy</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
            </ul>
          </div>
        </div>


        <div className="w-full border-t border-gray-800 px-6 py-4 text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Sellou Inc. All rights reserved.</p>
          <p>Built with ❤️ by Rushikesh Mahajan</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
