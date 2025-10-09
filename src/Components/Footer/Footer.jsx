import React from 'react';
import logo from '../../assets/logo.png';
import { Link } from 'react-router';
const Footer = () => {
  return (
    <div className="bg-[#001931] text-white">
      {/* Top section: Services, Company, Legal */}
      <footer className="footer footer-horizontal px-[3%] py-10 p-10">
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-2">Services</h6>
          <a className="link link-hover">App Design</a>
          <a className="link link-hover">Development</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Support</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-2">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Blog</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-2">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
        <form className="hidden md:block">
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="w-80">
            <div className="mb-3">Enter your email address</div>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>

      {/* Bottom section: Logo + App Icons */}
      <footer className="footer flex flex-col md:flex-row justify-between items-center border-t border-gray-300 px-10 py-6">
        <div className="flex flex-col md:flex-row gap-3 items-center space-x-4 mb-4 md:mb-0">
          <div>
            <Link to="/" className="flex gap-1 items-center">
              <img className="w-[40px] h-[40px]" src={logo} alt="" />
              <p className="font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent text-base">
                HERO.IO
              </p>
            </Link>
          </div>
          <div className="text-center md:text-left">
            <p className="font-bold">Appify Inc.</p>
            <p className="text-sm text-gray-500">
              Connecting users with apps since 2010
            </p>
          </div>
        </div>

        {/* Social / App store icons */}
        <div className="flex space-x-4">
          <a href="#">
            <img
              src="https://img.icons8.com/color/480/facebook-new.png"
              alt="App Store"
              className="w-10 h-10"
            />
          </a>
          <a href="#">
            <img
              src="https://img.icons8.com/color/480/linkedin.png"
              alt="Google Play"
              className="w-10 h-10"
            />
          </a>
          <a href="#">
            <img
              src="https://img.icons8.com/color/48/telegram-app--v1.png"
              alt="Telegram"
              className="w-10 h-10"
            />
          </a>
          <a href="#">
            <img
              src="https://img.icons8.com/color/48/whatsapp--v1.png"
              alt="WhatsApp"
              className="w-10 h-10"
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
